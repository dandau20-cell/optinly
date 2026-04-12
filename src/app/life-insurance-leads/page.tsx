import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Life Insurance Leads",
  description:
    "Buy exclusive, real-time life insurance leads generated through Covian.io. Verified, TCPA compliant, and delivered instantly.",
  alternates: { canonical: "https://optinly.io/life-insurance-leads" },
  openGraph: {
    title: "Life Insurance Leads | Optinly",
    description:
      "Buy exclusive, real-time life insurance leads generated through Covian.io. Verified, TCPA compliant, and delivered instantly.",
    url: "https://optinly.io/life-insurance-leads",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What information is included in each life insurance lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each lead includes name, email, phone number, state, age range, coverage interest, dependents, mortgage status, income range, lead score, and a full conversation transcript.",
      },
    },
    {
      "@type": "Question",
      name: "How are life insurance leads generated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leads are generated through Covian.io, an educational platform where consumers engage with an interactive chat about life insurance, explore their options, and voluntarily provide their information.",
      },
    },
    {
      "@type": "Question",
      name: "Are the life insurance leads TCPA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every lead includes full TCPA consent records, opt-in timestamps, and a complete conversation transcript documenting the consumer's voluntary participation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I filter life insurance leads by state?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can specify which states you are licensed in and only receive leads from those states. Geographic targeting ensures you only pay for leads you can serve.",
      },
    },
  ],
};

export default function LifeInsuranceLeadsPage() {
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
                Life Insurance Leads
              </h1>
              <p className="mt-6 text-lg text-sage-100 leading-relaxed">
                Exclusive, verified leads from consumers actively exploring life
                insurance options. Generated through Covian.io and delivered in
                real time.
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
                "Age Range",
                "Coverage Interest",
                "Number of Dependents",
                "Mortgage Status",
                "Income Range",
                "Lead Score",
                "Conversation Transcript",
                "TCPA Consent Record",
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
                Every life insurance lead originates from{" "}
                <strong className="text-foreground">Covian.io</strong>, an
                educational platform where consumers explore life insurance
                options through an interactive chat experience.
              </p>
              <p className="leading-relaxed mt-4">
                During the conversation, the consumer learns about different
                coverage types, estimates their needs, and voluntarily provides
                their contact information and details. There are no misleading
                offers or bait-and-switch tactics -- just transparent education
                that builds genuine intent.
              </p>
              <p className="leading-relaxed mt-4">
                This approach means every lead comes with{" "}
                <strong className="text-foreground">
                  documented consent, verified contact information, and a full
                  conversation transcript
                </strong>{" "}
                you can reference during your follow-up.
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
                  Compliance is not an afterthought. Every lead includes a
                  timestamped consent record and the full conversation transcript
                  from the consumer&apos;s session. You can confidently reach
                  out knowing the consumer opted in to be contacted.
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
              Start Receiving Life Insurance Leads
            </h2>
            <p className="mt-4 text-sage-100 text-lg">
              Book a demo to see sample leads and set up your delivery
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
