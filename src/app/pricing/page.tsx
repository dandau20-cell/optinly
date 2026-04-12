import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pay per lead with no subscriptions, no minimums, and no retainers. Volume discounts available. Get custom pricing for your business.",
  alternates: { canonical: "https://optinly.io/pricing" },
  openGraph: {
    title: "Pricing | Optinly",
    description:
      "Pay per lead with no subscriptions, no minimums, and no retainers. Volume discounts available.",
    url: "https://optinly.io/pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do Optinly leads cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing varies by vertical, state, and volume. Contact us for custom pricing tailored to your business needs.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a monthly subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Optinly operates on a pay-per-lead model with no monthly fees, retainers, or minimum commitments.",
      },
    },
    {
      "@type": "Question",
      name: "Are volume discounts available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer volume-based pricing tiers for buyers purchasing larger quantities of leads. Contact us for details.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I receive a bad lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a replacement guarantee for leads that do not meet our quality standards. If a lead has invalid contact information or does not match the criteria, we replace it at no cost.",
      },
    },
  ],
};

export default function PricingPage() {
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
                Pay Per Lead. No Subscriptions. No Minimums.
              </h1>
              <p className="mt-6 text-lg text-sage-100 leading-relaxed">
                Simple, transparent pricing. You pay only for the leads you
                receive. No hidden fees, no long-term contracts.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Details */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display text-foreground mb-4">
                  Life Insurance Leads
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Pricing varies by state and volume. Each lead is exclusive,
                  verified, and delivered in real time with full consent records.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Exclusive to one buyer",
                    "Real-time delivery",
                    "State-level targeting",
                    "Full conversation transcript",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <svg
                        className="w-4 h-4 text-sage-500 flex-shrink-0"
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
                <Link
                  href="/book-demo"
                  className="inline-flex items-center text-sage-500 font-medium hover:text-sage-600 transition-colors"
                >
                  Get pricing &rarr;
                </Link>
              </div>

              <div className="bg-surface border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display text-foreground mb-4">
                  Debt Relief Leads
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Pricing varies by state and volume. Each lead includes debt
                  details, verified contact information, and TCPA consent
                  documentation.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Exclusive to one buyer",
                    "Real-time delivery",
                    "Debt amount and type included",
                    "Full conversation transcript",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <svg
                        className="w-4 h-4 text-sage-500 flex-shrink-0"
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
                <Link
                  href="/book-demo"
                  className="inline-flex items-center text-sage-500 font-medium hover:text-sage-600 transition-colors"
                >
                  Get pricing &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Volume Discounts */}
        <section className="py-20 bg-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
              Volume Discounts Available
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Purchasing leads at scale? We offer tiered pricing for higher
              volumes. The more leads you buy, the lower your cost per lead.
              Contact us for a custom quote based on your needs.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { label: "Starter", desc: "1-50 leads/month", note: "Standard pricing" },
                { label: "Growth", desc: "51-200 leads/month", note: "Volume discount" },
                { label: "Enterprise", desc: "200+ leads/month", note: "Custom pricing" },
              ].map((tier) => (
                <div
                  key={tier.label}
                  className="bg-surface border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-display text-foreground">
                    {tier.label}
                  </h3>
                  <p className="text-sm text-muted mt-1">{tier.desc}</p>
                  <p className="text-sm text-sage-500 font-medium mt-3">
                    {tier.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-sage-500 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display">
              Get Custom Pricing
            </h2>
            <p className="mt-4 text-sage-100 text-lg">
              Tell us about your business and we will put together a pricing
              plan that fits.
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
