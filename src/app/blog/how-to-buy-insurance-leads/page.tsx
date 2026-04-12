import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "How to Buy Insurance Leads: A Complete Guide",
  description:
    "Learn what to look for when purchasing insurance leads, how to evaluate quality, and how to maximize your ROI on lead purchases.",
  alternates: { canonical: "https://optinly.io/blog/how-to-buy-insurance-leads" },
  openGraph: {
    title: "How to Buy Insurance Leads: A Complete Guide | Optinly",
    description:
      "Learn what to look for when purchasing insurance leads, how to evaluate quality, and how to maximize your ROI.",
    url: "https://optinly.io/blog/how-to-buy-insurance-leads",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I look for when buying insurance leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for leads that are exclusive, verified, delivered in real time, and include TCPA consent documentation. The lead source and generation method should be transparent.",
      },
    },
    {
      "@type": "Question",
      name: "How much do insurance leads cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Insurance lead pricing varies by type (life, health, auto), state, exclusivity, and quality. Exclusive, verified leads typically cost more but deliver significantly higher conversion rates.",
      },
    },
    {
      "@type": "Question",
      name: "Are exclusive leads worth the higher price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, yes. Exclusive leads mean you are the only agent contacting the prospect, which leads to higher contact rates, better conversations, and stronger conversion rates compared to shared leads.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly should I follow up on a purchased lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Speed matters. Research shows that contacting a lead within 5 minutes of generation increases conversion rates dramatically. Real-time lead delivery makes this possible.",
      },
    },
  ],
};

export default function HowToBuyInsuranceLeadsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted mb-4">April 8, 2026</p>
          <h1 className="text-4xl font-display text-foreground mb-8">
            How to Buy Insurance Leads: A Complete Guide
          </h1>

          <div className="prose prose-lg max-w-none text-muted space-y-6">
            <p>
              Buying leads is one of the fastest ways to grow an insurance
              business, but not all leads are worth your money. The difference
              between a profitable lead purchase and a wasted one comes down to
              understanding what makes a lead valuable and choosing the right
              source.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              What Makes a Good Insurance Lead?
            </h2>
            <p>
              A good insurance lead has several characteristics: the consumer has
              expressed genuine interest, their contact information is accurate
              and verified, consent to be contacted is documented, and the lead
              is fresh. Stale leads with recycled data lead to voicemail boxes
              and frustration.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Exclusive vs. Shared: The Critical Choice
            </h2>
            <p>
              The single most important factor in lead quality is exclusivity.
              When you buy a shared lead, you are one of several agents racing to
              reach the same consumer. This drives down contact rates and creates
              a poor experience for everyone involved.
            </p>
            <p>
              Exclusive leads cost more per lead, but the math works in your
              favor. Higher contact rates, better conversations, and stronger
              conversion rates typically result in a lower cost per acquisition.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              The Importance of Speed
            </h2>
            <p>
              Research consistently shows that the odds of connecting with a lead
              drop dramatically after the first five minutes. This is why
              real-time delivery matters. If your leads arrive hours or days
              after the consumer expressed interest, you have already lost the
              advantage.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Compliance Documentation
            </h2>
            <p>
              Any reputable lead provider should include TCPA consent records
              with every lead. This protects you legally and ensures you are
              contacting consumers who have agreed to hear from you. If a
              provider cannot show you their consent flow, that is a red flag.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Choosing the Right Provider
            </h2>
            <p>
              Look for providers who are transparent about their lead generation
              methods, offer exclusive leads with real-time delivery, include
              compliance documentation, and have a clear replacement policy for
              leads that do not meet quality standards.
            </p>

            <div className="mt-12 p-8 bg-sage-50 rounded-xl border border-border">
              <h3 className="text-xl font-display text-foreground mb-3">
                Ready to try Optinly?
              </h3>
              <p className="mb-4">
                We deliver exclusive, verified insurance leads in real time with
                full TCPA compliance documentation.
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
