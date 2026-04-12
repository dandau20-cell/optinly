import { NextRequest, NextResponse } from "next/server";

interface IntakeSubmission {
  industry: string;
  volume: string;
  states: string[];
  budget: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  consentTimestamp?: string;
  consentText?: string;
}

const REQUIRED_FIELDS: (keyof IntakeSubmission)[] = [
  "fullName",
  "email",
  "phone",
  "industry",
];

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

    // TODO: Add Airtable/GHL integration
    console.log("[Intake Submission]", JSON.stringify(body, null, 2));

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
