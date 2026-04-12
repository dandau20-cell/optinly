import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "What Makes a Qualified Lead?",
  description:
    "Not all leads are created equal. Learn the difference between a name on a list and a truly qualified prospect ready to buy.",
  alternates: { canonical: "https://optinly.io/blog/what-makes-a-qualified-lead" },
  openGraph: {
    title: "What Makes a Qualified Lead? | Optinly",
    description:
      "Not all leads are created equal. Learn the difference between a name on a list and a truly qualified prospect.",
    url: "https://optinly.io/blog/what-makes-a-qualified-lead",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a qualified lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A qualified lead is a prospect who has demonstrated genuine interest in a product or service, provided accurate contact information, and given consent to be contacted. They meet specific criteria that make them likely to convert.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure lead quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lead quality can be measured by data completeness, contact accuracy, engagement depth, intent signals, recency, and consent documentation. Lead scoring models combine these factors into an overall quality rating.",
      },
    },
    {
      "@type": "Question",
      name: "What is a lead score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lead score is a numerical rating assigned to a lead based on various quality signals such as engagement depth, data completeness, and intent indicators. Higher scores indicate leads more likely to convert.",
      },
    },
    {
      "@type": "Question",
      name: "Why do some leads never answer the phone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common reasons include stale data (the lead is old), shared leads (the consumer is overwhelmed by calls), unverified phone numbers, or leads generated through misleading offers that did not create genuine interest.",
      },
    },
  ],
};

export default function WhatMakesAQualifiedLeadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted mb-4">April 5, 2026</p>
          <h1 className="text-4xl font-display text-foreground mb-8">
            What Makes a Qualified Lead?
          </h1>

          <div className="prose prose-lg max-w-none text-muted space-y-6">
            <p>
              If you have ever purchased leads, you know the frustration of
              calling a &quot;lead&quot; only to reach a wrong number, someone who never
              requested information, or a person who has already been contacted by
              five other agents. Not all leads are created equal, and
              understanding what separates a qualified lead from a name on a list
              is essential.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Intent Is Everything
            </h2>
            <p>
              The most important quality signal is intent. A qualified lead has
              actively sought out information about a product or service. They
              did not accidentally click an ad or fill out a form to enter a
              sweepstakes -- they engaged with content related to their actual
              need.
            </p>
            <p>
              At Optinly, leads are generated through educational chat
              experiences where consumers voluntarily explore their options. This
              creates genuine intent that translates to better conversations.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Data Completeness and Accuracy
            </h2>
            <p>
              A qualified lead comes with complete, accurate information. This
              means a valid phone number that rings, an email address that does
              not bounce, and detailed information about what the consumer is
              looking for. Incomplete data creates friction and wastes your time.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Documented Consent
            </h2>
            <p>
              A truly qualified lead includes proof that the consumer agreed to
              be contacted. This is not just a legal requirement -- it is a
              quality signal. When someone knowingly consents to follow-up, they
              expect your call. That expectation makes all the difference.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Lead Scoring
            </h2>
            <p>
              Lead scoring combines multiple quality signals into a single
              metric. Factors like engagement depth (how much time the consumer
              spent, how many questions they answered), data completeness, and
              verification results all feed into the score. Higher-scoring leads
              are more likely to convert.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Freshness Matters
            </h2>
            <p>
              A lead from five minutes ago is worth far more than a lead from
              five days ago. Real-time delivery ensures you reach consumers while
              the topic is still top of mind. Every hour of delay reduces your
              chances of making a connection.
            </p>

            <div className="mt-12 p-8 bg-sage-50 rounded-xl border border-border">
              <h3 className="text-xl font-display text-foreground mb-3">
                Get Qualified Leads from Optinly
              </h3>
              <p className="mb-4">
                Every Optinly lead is scored, verified, and delivered in real
                time with full consent documentation.
              </p>
              <Link
                href="/book-demo"
                className="inline-flex items-center text-sage-500 font-medium hover:text-sage-600 transition-colors"
              >
                Book a demo &rarr;
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
