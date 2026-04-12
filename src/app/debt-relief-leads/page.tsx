import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Debt Relief Leads",
  description:
    "Buy exclusive, real-time debt relief leads generated through CovianDebt.com. Verified, TCPA compliant, and delivered instantly.",
  alternates: { canonical: "https://optinly.io/debt-relief-leads" },
  openGraph: {
    title: "Debt Relief Leads | Optinly",
    description:
      "Buy exclusive, real-time debt relief leads generated through CovianDebt.com. Verified, TCPA compliant, and delivered instantly.",
    url: "https://optinly.io/debt-relief-leads",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What information is included in each debt relief lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each lead includes name, email, phone number, state, total debt amount, types of debt, and a full conversation transcript with TCPA consent records.",
      },
    },
    {
      "@type": "Question",
      name: "How are debt relief leads generated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leads are generated through CovianDebt.com, where consumers seeking debt relief engage with educational content, explore their options, and voluntarily provide their information.",
      },
    },
    {
      "@type": "Question",
      name: "What types of debt do these leads typically have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leads may include consumers with credit card debt, medical debt, personal loans, student loans, and other unsecured debt types. Debt type details are included with each lead.",
      },
    },
    {
      "@type": "Question",
      name: "Are debt relief leads sold exclusively?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every debt relief lead is sold to one buyer only, ensuring you are the only company reaching out to that consumer.",
      },
    },
  ],
};

export default function DebtReliefLeadsPage() {
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
                Debt Relief Leads
              </h1>
              <p className="mt-6 text-lg text-sage-100 leading-relaxed">
                Exclusive, verified leads from consumers actively seeking debt
                relief solutions. Generated through CovianDebt.com and delivered
                in real time.
              </p>
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-lg bg-amber-300 text-foreground font-medium hover:bg-amber-400 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* What's in each lead */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-foreground text-center mb-14">
              What You Get with Every Lead
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Full Name",
                "Email Address",
                "Phone Number",
                "State",
                "Total Debt Amount",
                "Debt Types",
                "Employment Status",
                "Monthly Income",
                "Lead Score",
                "Conversation Transcript",
                "TCPA Consent Record",
                "Opt-In Timestamp",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-surface border border-border rounded-lg px-5 py-4"
                >
                  <svg
                    className="w-5 h-5 text-sage-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How leads are generated */}
        <section className="py-20 bg-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-foreground text-center mb-8">
              How These Leads Are Generated
            </h2>
            <div className="prose prose-lg max-w-none text-muted">
              <p className="leading-relaxed">
                Every debt relief lead originates from{" "}
                <strong className="text-foreground">CovianDebt.com</strong>, an
                educational platform where consumers explore debt relief options
                and learn about solutions available to them.
              </p>
              <p className="leading-relaxed mt-4">
                Through an interactive experience, consumers provide details
                about their debt situation -- including total amount owed, types
                of debt, and their financial circumstances. They voluntarily
                share their contact information for follow-up.
              </p>
              <p className="leading-relaxed mt-4">
                This intent-driven approach produces leads that are genuinely
                interested in finding a solution, with{" "}
                <strong className="text-foreground">
                  full documentation of consent and engagement
                </strong>{" "}
                to support your outreach.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display text-foreground mb-6">
                  TCPA Compliant. Consent-Verified.
                </h2>
                <p className="text-muted leading-relaxed text-lg">
                  Every debt relief lead includes documented proof of consumer
                  consent. Full conversation transcripts, timestamps, and opt-in
                  records give you confidence in your outreach.
                </p>
              </div>
              <div className="bg-sage-50 border border-border rounded-xl p-8">
                <h3 className="text-lg font-display text-foreground mb-4">
                  Included with every lead:
                </h3>
                <ul className="space-y-3">
                  {[
                    "TCPA consent confirmation",
                    "Opt-in timestamp",
                    "IP address record",
                    "Full conversation transcript",
                    "Lead source attribution",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-sage-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-sage-500 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display">
              Start Receiving Debt Relief Leads
            </h2>
            <p className="mt-4 text-sage-100 text-lg">
              Book a demo to see sample leads and configure your delivery
              preferences.
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
