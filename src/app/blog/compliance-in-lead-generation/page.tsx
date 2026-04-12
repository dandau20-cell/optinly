import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Compliance in Lead Generation: TCPA and Beyond",
  description:
    "Understanding TCPA compliance and regulatory requirements in lead generation. Essential knowledge for every lead buyer.",
  alternates: { canonical: "https://optinly.io/blog/compliance-in-lead-generation" },
  openGraph: {
    title: "Compliance in Lead Generation: TCPA and Beyond | Optinly",
    description:
      "Understanding TCPA compliance and regulatory requirements in lead generation.",
    url: "https://optinly.io/blog/compliance-in-lead-generation",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the TCPA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Telephone Consumer Protection Act (TCPA) is a federal law that regulates telemarketing calls, auto-dialed calls, prerecorded calls, and text messages. It requires businesses to obtain prior express written consent before making marketing calls or sending marketing texts.",
      },
    },
    {
      "@type": "Question",
      name: "What is prior express written consent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prior express written consent is a consumer's agreement, in writing, to receive marketing calls or texts. It must clearly disclose that consent is being given, identify the company that will be calling, and include the consumer's signature (which can be electronic).",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for TCPA violations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TCPA violations can result in damages of $500 to $1,500 per call or text message. Class action lawsuits can result in multi-million dollar settlements. The risk makes compliance documentation essential for any lead buyer.",
      },
    },
    {
      "@type": "Question",
      name: "How does Optinly ensure TCPA compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optinly includes full TCPA consent records with every lead, including opt-in timestamps, IP address records, the exact consent language shown to the consumer, and a complete conversation transcript documenting voluntary participation.",
      },
    },
  ],
};

export default function ComplianceInLeadGenerationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted mb-4">March 24, 2026</p>
          <h1 className="text-4xl font-display text-foreground mb-8">
            Compliance in Lead Generation: TCPA and Beyond
          </h1>

          <div className="prose prose-lg max-w-none text-muted space-y-6">
            <p>
              Compliance is not optional in lead generation. The TCPA, CAN-SPAM
              Act, and state-level regulations create a complex regulatory
              environment that every lead buyer must navigate. Understanding
              these rules protects your business and builds trust with consumers.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Understanding the TCPA
            </h2>
            <p>
              The Telephone Consumer Protection Act is the cornerstone of
              telemarketing regulation in the United States. At its core, the
              TCPA requires that businesses obtain prior express written consent
              before making marketing calls or sending marketing texts to
              consumers.
            </p>
            <p>
              For lead buyers, this means every lead you call should come with
              documented proof that the consumer agreed to be contacted. Without
              this documentation, you are exposed to significant legal risk.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              What Good Consent Looks Like
            </h2>
            <p>
              Valid TCPA consent requires several elements: the consumer must be
              clearly informed that they are consenting to receive marketing
              communications, the specific company (or companies) that will be
              contacting them must be identified, and the consumer must provide
              their signature (electronic signatures count).
            </p>
            <p>
              The best lead providers go beyond the minimum requirements. They
              maintain complete records including timestamps, IP addresses, the
              exact consent language displayed, and a full record of the
              consumer&apos;s interaction.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              The Cost of Non-Compliance
            </h2>
            <p>
              TCPA violations carry penalties of $500 to $1,500 per call or text
              message. In class action lawsuits, these numbers add up quickly.
              Major settlements have reached tens of millions of dollars. Beyond
              the financial risk, non-compliance damages your reputation and
              erodes consumer trust.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Beyond the TCPA
            </h2>
            <p>
              The TCPA is not the only regulation to consider. The CAN-SPAM Act
              governs email marketing, state-level do-not-call lists add
              additional requirements, and industry-specific regulations (like
              state insurance licensing requirements) may apply to your outreach.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Choosing a Compliant Lead Provider
            </h2>
            <p>
              When evaluating lead providers, ask these questions: Can they show
              you their consent flow? Do they provide consent records with every
              lead? Do they maintain conversation transcripts? Are they
              transparent about how leads are generated? A provider who cannot
              answer these questions clearly is a risk to your business.
            </p>

            <div className="mt-12 p-8 bg-sage-50 rounded-xl border border-border">
              <h3 className="text-xl font-display text-foreground mb-3">
                Compliance Built In
              </h3>
              <p className="mb-4">
                Every Optinly lead includes full TCPA consent documentation,
                timestamps, and conversation transcripts. Compliance is not an
                add-on -- it is part of every lead.
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
