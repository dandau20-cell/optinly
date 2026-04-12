import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Optinly | Qualified B2B Leads for Insurance & Debt Relief",
  description:
    "Pay-per-lead marketplace for insurance agents and debt relief companies. Real-time, verified, exclusive leads with no monthly fees or retainers.",
  alternates: { canonical: "https://optinly.io" },
  openGraph: {
    title: "Optinly | Qualified B2B Leads for Insurance & Debt Relief",
    description:
      "Pay-per-lead marketplace for insurance agents and debt relief companies. Real-time, verified, exclusive leads with no monthly fees or retainers.",
    url: "https://optinly.io",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Optinly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optinly is a B2B lead marketplace that connects insurance agents and debt relief companies with real-time, verified, exclusive leads on a pay-per-lead basis.",
      },
    },
    {
      "@type": "Question",
      name: "How does Optinly generate leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leads are generated through Covian.io (life insurance) and CovianDebt.com (debt relief), where consumers engage with educational chat experiences and voluntarily share their information.",
      },
    },
    {
      "@type": "Question",
      name: "Are Optinly leads exclusive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every lead is sold exclusively to one buyer, ensuring you never compete with other agents for the same prospect.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a monthly subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Optinly operates on a pay-per-lead model with no monthly fees, retainers, or minimums.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-sage-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
                Qualified Leads. No Monthly Fees. No Retainers.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-sage-100 leading-relaxed">
                Pay only for results. Real-time, verified, exclusive leads for
                insurance agents and debt relief companies.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-300 text-foreground font-medium hover:bg-amber-400 transition-colors"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                Why Agents Choose Optinly
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-Time Delivery",
                  desc: "Leads are delivered the moment a consumer completes their session. No delays, no stale data. Connect while intent is highest.",
                  icon: (
                    <svg className="w-8 h-8 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  ),
                },
                {
                  title: "Verified & Compliant",
                  desc: "Every lead is identity-verified and TCPA compliant. Full consent records and conversation transcripts included with every lead.",
                  icon: (
                    <svg className="w-8 h-8 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  ),
                },
                {
                  title: "Exclusive Leads",
                  desc: "Every lead is sold to one buyer only. You never compete with other agents for the same prospect.",
                  icon: (
                    <svg className="w-8 h-8 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface border border-border rounded-xl p-8"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-display text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verticals */}
        <section className="py-20 bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                Lead Verticals
              </h2>
              <p className="mt-4 text-muted max-w-2xl mx-auto">
                We generate high-intent leads across two verticals, each powered
                by a dedicated consumer platform.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface border border-border rounded-xl p-8">
                <h3 className="text-2xl font-display text-foreground mb-3">
                  Life Insurance Leads
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  Generated through Covian.io, where consumers explore life
                  insurance education through an interactive chat experience and
                  voluntarily share their information.
                </p>
                <Link
                  href="/life-insurance-leads"
                  className="inline-flex items-center text-sage-500 font-medium hover:text-sage-600 transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
              <div className="bg-surface border border-border rounded-xl p-8">
                <h3 className="text-2xl font-display text-foreground mb-3">
                  Debt Relief Leads
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  Generated through CovianDebt.com, where consumers seeking debt
                  relief engage with educational content and provide their
                  details for follow-up.
                </p>
                <Link
                  href="/debt-relief-leads"
                  className="inline-flex items-center text-sage-500 font-medium hover:text-sage-600 transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                How It Works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "We Generate",
                  desc: "Consumers engage with our educational platforms (Covian.io & CovianDebt.com) and voluntarily share their information.",
                },
                {
                  step: "02",
                  title: "We Verify",
                  desc: "Every lead is identity-verified, consent-checked, and scored before delivery. Full TCPA compliance included.",
                },
                {
                  step: "03",
                  title: "You Close",
                  desc: "Leads are delivered to you in real time via API, email, or CRM integration. You pay only for leads you receive.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-500 text-white font-display text-lg mb-4">
                    {item.step}
                  </div>
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
              Ready to Grow Your Pipeline?
            </h2>
            <p className="mt-4 text-sage-100 text-lg">
              Schedule a demo call and learn how Optinly can deliver qualified
              leads to your business.
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
