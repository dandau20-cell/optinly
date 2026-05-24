import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Optinly | Customer Acquisition Platform for Insurance, Legal & Debt Relief",
  description:
    "From ad to call — Optinly builds branded funnels, qualifies with AI, and warm-transfers ready-to-buy customers directly to your phone. Powered by Customer Intent Calibration™.",
  alternates: { canonical: "https://optinly.io" },
  openGraph: {
    title: "Optinly | Customer Acquisition Platform",
    description:
      "From ad to call — branded funnels, AI qualification, and live warm transfers across insurance, legal, and debt relief.",
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
        text: "Optinly is a customer acquisition platform for insurance agencies, law firms, and debt relief companies. We run branded funnels, qualify customers with AI, and warm-transfer ready-to-buy callers directly to your phone.",
      },
    },
    {
      "@type": "Question",
      name: "What is Customer Intent Calibration™?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Customer Intent Calibration™ is our proprietary process: consumers engage with our branded platforms, AI measures purchase intent through interactive quiz funnels, identity and phone are verified, and qualified customers are warm-transferred to our clients live on the phone.",
      },
    },
    {
      "@type": "Question",
      name: "Which verticals does Optinly serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Insurance (TopInsuranceMatch.com — Final Expense and Life Insurance), Legal (TopLegalMatch.com — Personal Injury and MVA), and Debt Relief (CovianDebt.com — Debt Consolidation).",
      },
    },
    {
      "@type": "Question",
      name: "How are customers delivered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Customers are delivered as live warm transfers — phone-verified, AI-qualified, and on the line ready to buy. You only pay for results.",
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
        <section className="relative bg-foreground text-white overflow-hidden">
          {/* Subtle gradient accents — pure CSS, no images */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 20% 0%, rgba(45,106,79,0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(244,162,97,0.10), transparent 60%)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-[0.18em] text-sage-100/90 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                Customer Acquisition Platform
              </span>
              <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight">
                We Unleash Your Customer Acquisition Potential
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
                From ad to call — we build branded funnels, qualify with AI,
                and warm-transfer ready-to-buy customers directly to your phone.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/intake-quiz"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-amber-300 text-foreground font-medium hover:bg-amber-400 transition-colors"
                >
                  Schedule a Demo
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/25 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* As Featured In */}
        <section className="border-y border-border bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                As Featured In
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
                <span className="font-display text-lg md:text-xl text-foreground/70">
                  CEO Times
                </span>
                <span className="font-display text-lg md:text-xl text-foreground/70">
                  USA News
                </span>
                <span className="font-display text-lg md:text-xl text-foreground/70">
                  BizWeekly
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Intent Calibration */}
        <section id="how-it-works" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.2em] text-sage-500 font-medium">
                Proprietary Process
              </span>
              <h2 className="mt-4 text-balance text-3xl md:text-5xl font-display text-foreground leading-tight">
                Powered by Customer Intent Calibration™
              </h2>
              <p className="mt-5 text-muted text-lg">
                A four-stage system that turns consumer intent into live,
                ready-to-buy conversations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Capture",
                  desc: "Consumers engage with our branded platforms.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 7h18M3 12h18M3 17h18"
                    />
                  ),
                },
                {
                  step: "02",
                  title: "Calibrate",
                  desc: "AI measures purchase intent through interactive quiz funnels.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 17v-6m3 6V7m3 10v-4M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  ),
                },
                {
                  step: "03",
                  title: "Verify",
                  desc: "Phone verification + identity confirmation.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  ),
                },
                {
                  step: "04",
                  title: "Transfer",
                  desc: "Warm call transfer — pre-qualified, ready to convert.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.8a2 2 0 01-.45 1.95l-1.27 1.27a16 16 0 006.27 6.27l1.27-1.27a2 2 0 011.95-.45l2.8.7A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group relative bg-surface border border-border rounded-2xl p-7 hover:border-sage-500/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sage-50 text-sage-500">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-muted tracking-wider">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verticals */}
        <section id="verticals" className="py-24 bg-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.2em] text-sage-500 font-medium">
                Verticals
              </span>
              <h2 className="mt-4 text-balance text-3xl md:text-5xl font-display text-foreground leading-tight">
                Three Verticals. One System.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  vertical: "Insurance",
                  brand: "TopInsuranceMatch.com",
                  products: "Final Expense, Life Insurance",
                },
                {
                  vertical: "Legal",
                  brand: "TopLegalMatch.com",
                  products: "Personal Injury, MVA",
                },
                {
                  vertical: "Debt Relief",
                  brand: "CovianDebt.com",
                  products: "Debt Consolidation",
                },
              ].map((item) => (
                <div
                  key={item.vertical}
                  className="bg-surface border border-border rounded-2xl p-8 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-sage-500 font-medium">
                    {item.vertical}
                  </span>
                  <h3 className="mt-3 text-2xl font-display text-foreground">
                    {item.brand}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed">
                    {item.products}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Calls */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-sage-500 font-medium">
                  Live Calls, Not Leads
                </span>
                <h2 className="mt-4 text-balance text-3xl md:text-5xl font-display text-foreground leading-tight">
                  Forget Leads. We Deliver Live Calls.
                </h2>
                <p className="mt-6 text-muted text-lg leading-relaxed">
                  Form fills go cold. Our customers are on the phone, qualified,
                  and ready to buy — the moment you pick up.
                </p>
              </div>
              <ul className="space-y-5">
                {[
                  "Every customer is AI-qualified before transfer",
                  "Phone-verified — no fake numbers",
                  "Warm transfer — they're on the line, ready to buy",
                  "You only pay for results",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-sage-500 text-white mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-foreground text-lg leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-foreground text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
              {[
                { value: "50", label: "States Covered" },
                { value: "3", label: "Verticals" },
                { value: "AI", label: "Powered" },
                { value: "Live", label: "Warm Transfers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-display text-amber-300">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm md:text-base text-white/70 uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-foreground text-white px-8 py-16 md:px-16 md:py-20 text-center">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(45,106,79,0.45), transparent 65%)",
                }}
              />
              <div className="relative">
                <h2 className="text-balance text-3xl md:text-5xl font-display leading-tight">
                  Ready to Unleash Your Customer Acquisition?
                </h2>
                <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto">
                  See how Customer Intent Calibration™ delivers live,
                  ready-to-buy customers to your phone.
                </p>
                <Link
                  href="/intake-quiz"
                  className="inline-flex items-center justify-center mt-10 px-8 py-3.5 rounded-lg bg-amber-300 text-foreground font-medium hover:bg-amber-400 transition-colors"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
