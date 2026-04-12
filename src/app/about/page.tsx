import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Optinly is a B2B lead marketplace by MediaStock LLC. Our mission is making lead generation transparent, compliant, and results-driven.",
  alternates: { canonical: "https://optinly.io/about" },
  openGraph: {
    title: "About | Optinly",
    description:
      "Optinly is a B2B lead marketplace by MediaStock LLC. Our mission is making lead generation transparent, compliant, and results-driven.",
    url: "https://optinly.io/about",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who owns Optinly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optinly is operated by MediaStock LLC, a company registered in the state of Delaware.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Covian family of brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Covian family includes Covian.io (life insurance education), CovianDebt.com (debt relief education), and Optinly.io (B2B lead marketplace). Together, they form a vertically integrated lead generation ecosystem.",
      },
    },
    {
      "@type": "Question",
      name: "What is Optinly's mission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optinly's mission is to make lead generation transparent, compliant, and results-driven by connecting businesses with consumers who have genuine intent and documented consent.",
      },
    },
    {
      "@type": "Question",
      name: "Where is MediaStock LLC registered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MediaStock LLC is registered in the state of Delaware, United States.",
      },
    },
  ],
};

export default function AboutPage() {
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
                About Optinly
              </h1>
              <p className="mt-6 text-lg text-sage-100 leading-relaxed">
                Making lead generation transparent, compliant, and
                results-driven.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display text-foreground mb-6">
              MediaStock LLC
            </h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                Optinly is operated by MediaStock LLC, a Delaware-registered
                company focused on building ethical, technology-driven lead
                generation platforms. We believe that both consumers and
                businesses deserve better than the status quo of misleading ads,
                recycled leads, and questionable compliance.
              </p>
              <p>
                Our approach is different. We own the entire lead generation
                pipeline -- from the consumer-facing educational platforms to the
                B2B marketplace. This vertical integration allows us to maintain
                quality and compliance at every step.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              We are on a mission to make lead generation transparent and
              compliant. Every lead we deliver comes with documented consent,
              verified identity, and a full engagement record. No guesswork, no
              grey areas -- just qualified prospects who have expressed genuine
              interest.
            </p>
          </div>
        </section>

        {/* Covian Family */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display text-foreground text-center mb-12">
              The Covian Family of Brands
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-surface border border-border rounded-xl p-8">
                <h3 className="text-xl font-display text-foreground mb-3">
                  Covian.io
                </h3>
                <p className="text-muted leading-relaxed">
                  A consumer-facing educational platform where people explore
                  life insurance options through an interactive chat experience.
                  Generates qualified life insurance leads.
                </p>
              </div>
              <div className="bg-surface border border-border rounded-xl p-8">
                <h3 className="text-xl font-display text-foreground mb-3">
                  CovianDebt.com
                </h3>
                <p className="text-muted leading-relaxed">
                  A consumer-facing platform focused on debt relief education.
                  Helps consumers understand their options and generates
                  qualified debt relief leads.
                </p>
              </div>
              <div className="bg-surface border border-border rounded-xl p-8">
                <h3 className="text-xl font-display text-foreground mb-3">
                  Optinly.io
                </h3>
                <p className="text-muted leading-relaxed">
                  The B2B lead marketplace. Connects the qualified leads from
                  Covian and CovianDebt with insurance agents and debt relief
                  companies on a pay-per-lead basis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-sage-500 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display">
              Partner with Optinly
            </h2>
            <p className="mt-4 text-sage-100 text-lg">
              Learn how our vertically integrated platform can deliver qualified
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
