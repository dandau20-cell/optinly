import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Schedule a demo call to see how Optinly delivers qualified, exclusive leads for insurance agents and debt relief companies.",
  alternates: { canonical: "https://optinly.io/book-demo" },
  openGraph: {
    title: "Book a Demo | Optinly",
    description:
      "Schedule a demo call to see how Optinly delivers qualified, exclusive leads for insurance agents and debt relief companies.",
    url: "https://optinly.io/book-demo",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens during an Optinly demo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During the demo, we walk you through how our lead generation process works, show you sample leads, discuss pricing for your specific needs, and set up your delivery preferences.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the demo call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most demo calls take about 20-30 minutes. We cover how leads are generated, what data you receive, pricing, and delivery setup.",
      },
    },
    {
      "@type": "Question",
      name: "Is there any obligation after booking a demo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The demo is free and there is no obligation. We want to make sure Optinly is the right fit for your business before you commit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start buying leads immediately after the demo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you decide Optinly is right for you, we can set up your account and start delivering leads within 24 hours of your demo call.",
      },
    },
  ],
};

export default function BookDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

          <div className="rounded-xl border border-border overflow-hidden bg-white">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/qnYnomEPvz4vFovJQkor"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="qnYnomEPvz4vFovJQkor_1776105991628"
              title="Book a Demo - Optinly"
              height="700"
            />
          </div>

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
