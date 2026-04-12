import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Optinly generates, verifies, and delivers qualified leads in real time to insurance agents and debt relief companies.",
  alternates: { canonical: "https://optinly.io/how-it-works" },
  openGraph: {
    title: "How It Works | Optinly",
    description:
      "Learn how Optinly generates, verifies, and delivers qualified leads in real time to insurance agents and debt relief companies.",
    url: "https://optinly.io/how-it-works",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How are Optinly leads generated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leads are generated when consumers engage with our educational platforms, Covian.io for life insurance and CovianDebt.com for debt relief. They participate in an interactive chat and voluntarily share their contact information and needs.",
      },
    },
    {
      "@type": "Question",
      name: "How are leads verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every lead undergoes identity verification, phone and email validation, and consent confirmation. We maintain full TCPA compliance records and conversation transcripts for every lead.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly are leads delivered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leads are delivered in real time, typically within seconds of the consumer completing their session. Delivery is available via API, email, or direct CRM integration.",
      },
    },
    {
      "@type": "Question",
      name: "What delivery methods does Optinly support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optinly supports real-time delivery via API integration, email notification, and direct CRM push to platforms like Salesforce, HubSpot, and other popular CRM systems.",
      },
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-sage-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display leading-tight">
                How It Works
              </h1>
              <p className="mt-6 text-lg text-sage-100 leading-relaxed">
                From consumer intent to your pipeline in seconds. Here is
                exactly how Optinly delivers qualified leads to your business.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Lead Generated",
                  desc: "A consumer visits one of our educational platforms -- Covian.io for life insurance or CovianDebt.com for debt relief. They engage with an interactive chat experience that educates them about their options and collects their information voluntarily. No bait-and-switch, no misleading offers.",
                },
                {
                  step: "02",
                  title: "Identity Verified",
                  desc: "Before any lead reaches you, we verify the consumer's identity. Phone numbers and email addresses are validated. TCPA consent is confirmed and recorded. A lead score is calculated based on engagement depth, data completeness, and intent signals.",
                },
                {
                  step: "03",
                  title: "Delivered Real-Time",
                  desc: "Verified leads are delivered to you within seconds of completion. Choose your preferred delivery method: API integration for instant push to your systems, email notification for quick access, or direct CRM integration with Salesforce, HubSpot, and other platforms.",
                },
                {
                  step: "04",
                  title: "You Close",
                  desc: "You receive a complete lead package including full contact details, conversation transcript, consent records, and lead score. With fresh intent and verified data, you can focus on what you do best -- closing the deal.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-sage-500 text-white font-display text-lg flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-display text-foreground mb-3">
                      {item.title}
                    </h2>
                    <p className="text-muted leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Guarantees */}
        <section className="py-20 bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                Quality Guarantees
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "100% Exclusive",
                  desc: "Every lead is sold to one buyer only. You never share a prospect with another agent.",
                },
                {
                  title: "TCPA Compliant",
                  desc: "Full consent records, opt-in timestamps, and conversation transcripts accompany every lead.",
                },
                {
                  title: "Replacement Guarantee",
                  desc: "If a lead does not meet our quality standards, we replace it at no additional cost.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface border border-border rounded-xl p-8"
                >
                  <h3 className="text-xl font-display text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-sage-500 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display">
              See It in Action
            </h2>
            <p className="mt-4 text-sage-100 text-lg">
              Book a demo and we will walk you through a live lead delivery.
            </p>
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-lg bg-amber-300 text-foreground font-medium hover:bg-amber-400 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
