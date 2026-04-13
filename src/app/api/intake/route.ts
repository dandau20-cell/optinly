import { NextRequest, NextResponse } from "next/server";

interface IntakeSubmission {
  industry: string;
  improvements: string[];
  revenue: string;
  website: string;
  fullName: string;
  email: string;
  phone: string;
  tcpaConsent: boolean;
}

const REQUIRED_FIELDS: (keyof IntakeSubmission)[] = [
  "fullName",
  "email",
  "phone",
  "industry",
];

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const N8N_WEBHOOK_URL = process.env.N8N_OPTINLY_WEBHOOK_URL;

async function sendToGHL(body: IntakeSubmission) {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.log("[GHL] Skipped — missing GHL_API_KEY or GHL_LOCATION_ID");
    return;
  }

  const nameParts = body.fullName.trim().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ") || "";

  // Normalize phone to +1XXXXXXXXXX
  const digits = body.phone.replace(/\D/g, "");
  const phone = digits.startsWith("1") ? `+${digits}` : `+1${digits}`;

  // Safely normalize improvements — could be array, string, or undefined
  const improvements = Array.isArray(body.improvements)
    ? body.improvements
    : body.improvements
    ? [body.improvements]
    : [];

  const payload = {
    locationId: GHL_LOCATION_ID,
    firstName,
    lastName,
    email: body.email,
    phone,
    website: body.website || "",
    companyName: (body as Record<string, unknown>).agency_name as string || "",
    source: "Optinly Intake Quiz",
    tags: [
      `industry:${body.industry}`,
      "optinly-lead",
      ...improvements.map((i: string) => `improvement:${i}`),
    ],
    customFields: [
      { id: "V90QBvarL8rQZsKBBlXa", field_value: body.industry },
      { id: "Pieuxsvx3zpSa1WGe1W8", field_value: improvements.join(", ") },
      { id: "07rRqLTrq7j3AHup9ZeX", field_value: body.revenue || "" },
      { id: "1tP5jxeaVG9wA1N72Pkx", field_value: body.website || "" },
      { id: "9bJFJEPqMigcv5FdfqyV", field_value: body.tcpaConsent ? "Yes" : "No" },
      { id: "JZOQfXjwc2Eg3L6SQOIA", field_value: new Date().toISOString() },
    ],
  };

  console.log("[GHL] Sending contact:", JSON.stringify(payload, null, 2));

  const res = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GHL_API_KEY}`,
      Version: "2021-07-28",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  console.log("[GHL] Response:", res.status, JSON.stringify(data));
}

async function sendToN8N(body: IntakeSubmission) {
  if (!N8N_WEBHOOK_URL) return;

  try {
    await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        source: "optinly.io",
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error("[n8n Error]", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: IntakeSubmission = await request.json();

    const missingFields = REQUIRED_FIELDS.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    console.log("[Intake Submission]", JSON.stringify(body, null, 2));

    // Await both — Vercel kills the function after response, so fire-and-forget won't work
    await Promise.all([sendToGHL(body), sendToN8N(body)]);

    return NextResponse.json({
      success: true,
      message: "Submission received",
    });
  } catch (error) {
    console.error("[Intake API Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
