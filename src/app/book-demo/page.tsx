"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function BookingCalendar() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  const calendarBase =
    "https://api.leadconnectorhq.com/widget/booking/qnYnomEPvz4vFovJQkor";

  const params = new URLSearchParams();
  if (name) params.set("name", name);
  if (email) params.set("email", email);
  if (phone) params.set("phone", phone);

  const calendarUrl = params.toString()
    ? `${calendarBase}?${params.toString()}`
    : calendarBase;

  return (
    <div className="rounded-xl border border-border overflow-hidden bg-white">
      <iframe
        src={calendarUrl}
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        id="qnYnomEPvz4vFovJQkor_1776105991628"
        title="Book a Demo - Optinly"
        height="700"
      />
    </div>
  );
}

export default function BookDemoPage() {
  return (
    <>
      <script
        src="https://link.msgsndr.com/js/form_embed.js"
        type="text/javascript"
        async
      />
      <Header />
      <main className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display text-foreground">
              Book a Demo Call
            </h1>
            <p className="mt-4 text-lg text-muted">
              See how Optinly delivers qualified, exclusive leads to your
              business. Pick a time that works for you.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="rounded-xl border border-border overflow-hidden bg-white flex items-center justify-center" style={{ height: 700 }}>
                <p className="text-muted">Loading calendar...</p>
              </div>
            }
          >
            <BookingCalendar />
          </Suspense>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-display text-foreground mb-1">
                20-30 Minutes
              </h3>
              <p className="text-sm text-muted">Quick and focused</p>
            </div>
            <div>
              <h3 className="font-display text-foreground mb-1">
                No Obligation
              </h3>
              <p className="text-sm text-muted">Free consultation</p>
            </div>
            <div>
              <h3 className="font-display text-foreground mb-1">
                Same-Day Setup
              </h3>
              <p className="text-sm text-muted">Start receiving leads fast</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
