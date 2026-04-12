import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "TCPA Compliance for Lead Generation: What Every Agent Needs to Know",
  description:
    "Understand TCPA regulations for insurance and debt relief lead generation. Learn about consent requirements, penalties, and how to stay compliant.",
  alternates: { canonical: "https://optinly.io/blog/tcpa-compliance-lead-generation" },
  openGraph: {
    title: "TCPA Compliance for Lead Generation: What Every Agent Needs to Know | Optinly",
    description:
      "Understand TCPA regulations for insurance and debt relief lead generation. Learn about consent requirements, penalties, and how to stay compliant.",
    url: "https://optinly.io/blog/tcpa-compliance-lead-generation",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the TCPA one-to-one consent rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FCC's 2024 update to the TCPA requires one-to-one consent, meaning a consumer must give explicit written consent to each specific company that will contact them. Blanket consent shared across multiple sellers is no longer sufficient.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for TCPA violations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TCPA violations carry statutory damages of $500 per call or text message. If the violation is found to be willful or knowing, damages increase to $1,500 per call or text. Class action lawsuits can result in multi-million dollar settlements.",
      },
    },
    {
      "@type": "Question",
      name: "How can I verify that my lead vendor is TCPA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask your lead vendor to provide consent documentation with every lead, including opt-in timestamps, IP addresses, the exact consent language shown to the consumer, and proof that the consumer specifically consented to your company contacting them. A compliant vendor should be able to produce this documentation on demand.",
      },
    },
    {
      "@type": "Question",
      name: "Does the TCPA apply to both calls and text messages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The TCPA applies to telemarketing calls, auto-dialed calls, prerecorded or artificial voice calls, and text messages (which the FCC treats as calls under the statute). Both inbound and outbound communications are subject to consent requirements when used for marketing purposes.",
      },
    },
  ],
};

export default function TcpaComplianceLeadGenerationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted mb-4">April 12, 2026</p>
          <h1 className="text-4xl font-display text-foreground mb-8">
            TCPA Compliance for Lead Generation: What Every Agent Needs to Know
          </h1>

          <div className="prose prose-lg max-w-none text-muted space-y-6">
            <p>
              If you buy leads for insurance, debt relief, or any other
              consumer-facing industry, TCPA compliance is not optional. A single
              violation can cost you $500 to $1,500 per call or text, and class
              action lawsuits have bankrupted companies that ignored the rules.
              This guide covers what you need to know to protect your business.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              What Is the TCPA?
            </h2>
            <p>
              The Telephone Consumer Protection Act (TCPA) is a federal law
              enacted in 1991 that regulates telemarketing calls, auto-dialed
              calls, prerecorded voice messages, and text messages. It was
              created to protect consumers from unwanted communications and has
              been updated multiple times to keep pace with changes in
              technology and marketing practices.
            </p>
            <p>
              For lead buyers, the TCPA means one thing above all else: you must
              have documented proof that a consumer agreed to be contacted by
              your company before you pick up the phone or send a text.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              The One-to-One Consent Requirement (2024 FCC Update)
            </h2>
            <p>
              In January 2024, the FCC issued a major update to TCPA rules that
              fundamentally changed how consent works in lead generation. Under
              the new one-to-one consent requirement, a consumer must give
              explicit written consent to each specific company that will contact
              them.
            </p>
            <p>
              Before this change, many lead generators used broad consent
              language that allowed them to share a single opt-in across dozens
              of buyers. A consumer might fill out one form and unknowingly
              consent to calls from a long list of companies buried in fine
              print. That practice is no longer compliant.
            </p>
            <p>
              Under the updated rule, the consumer must clearly and specifically
              agree to be contacted by your company by name. This means the lead
              provider must present your company to the consumer at the point of
              consent, and the consumer must affirmatively agree.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Written Consent vs. Express Consent
            </h2>
            <p>
              The TCPA distinguishes between two levels of consent, and
              understanding the difference is critical for lead buyers.
            </p>
            <p>
              <strong className="text-foreground">Express consent</strong> is
              basic permission to be contacted. A consumer who voluntarily
              provides their phone number has given express consent for
              informational (non-marketing) calls.
            </p>
            <p>
              <strong className="text-foreground">Prior express written consent</strong> is
              the higher standard required for marketing calls and texts. It
              must include a clear disclosure that the consumer is agreeing to
              receive marketing communications, identify the specific company
              that will be calling, and be signed by the consumer (electronic
              signatures are valid). This is the standard that applies to
              virtually all lead-based outreach.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Penalties for Violations
            </h2>
            <p>
              The financial exposure from TCPA non-compliance is severe.
              Statutory damages are $500 per violation -- meaning per call or
              per text message. If the court finds the violation was willful or
              knowing, that figure triples to $1,500 per violation.
            </p>
            <p>
              These penalties compound quickly. An agent who makes 100 calls
              without proper consent faces potential liability of $50,000 to
              $150,000. Across a team or call center, the numbers grow into the
              millions. TCPA class action settlements have exceeded $75 million
              in some cases.
            </p>
            <p>
              Beyond lawsuits, the FCC can impose its own fines and enforcement
              actions. State attorneys general can also bring actions under
              state telemarketing laws, adding another layer of risk.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              How to Verify Your Lead Vendor Is Compliant
            </h2>
            <p>
              As a lead buyer, you bear liability for the calls you make. If
              your lead vendor provided bad consent, that is your problem in
              court, not just theirs. Here is what to demand from any vendor:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Consent documentation with every lead:</strong>{" "}
                Each lead should include the timestamp of the opt-in, the
                consumer&apos;s IP address, and the exact consent language that was
                displayed.
              </li>
              <li>
                <strong className="text-foreground">Proof of one-to-one consent:</strong>{" "}
                Your company name must appear in the consent disclosure the
                consumer agreed to. Ask to see the actual form or flow.
              </li>
              <li>
                <strong className="text-foreground">Conversation transcripts:</strong>{" "}
                For conversational or AI-generated leads, full transcripts of
                the interaction provide evidence of voluntary participation.
              </li>
              <li>
                <strong className="text-foreground">Willingness to be audited:</strong>{" "}
                A compliant vendor welcomes scrutiny. If a vendor is evasive
                about their consent process, that is a red flag.
              </li>
            </ul>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              Consent Documentation Best Practices
            </h2>
            <p>
              Even with a compliant lead vendor, your own documentation
              practices matter. Keep these records for every lead you contact:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The original consent record provided by your lead vendor,
                stored in a way that cannot be altered after the fact.
              </li>
              <li>
                A log of every call and text you make to each lead, including
                date, time, duration, and outcome.
              </li>
              <li>
                Records of any opt-out or do-not-call requests, and evidence
                that you honored them promptly.
              </li>
              <li>
                Your internal TCPA compliance policy, reviewed and updated
                regularly.
              </li>
            </ul>
            <p>
              Maintain these records for at least five years. The statute of
              limitations for TCPA claims is four years, and you want a buffer.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              The Do Not Call Registry
            </h2>
            <p>
              The National Do Not Call (DNC) Registry is a separate but related
              compliance requirement. Consumers can register their phone number
              to opt out of telemarketing calls, and businesses are required to
              scrub their call lists against the registry at least every 31
              days.
            </p>
            <p>
              Having prior express written consent generally overrides a DNC
              listing, but only for the specific company the consumer consented
              to. Once a consumer revokes consent or asks to be placed on your
              internal do-not-call list, you must stop calling immediately. Many
              businesses scrub against both the national registry and their own
              internal DNC list before every campaign.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              State-Level Regulations
            </h2>
            <p>
              The TCPA is a federal floor, not a ceiling. Many states have their
              own telemarketing laws that impose additional requirements. For
              example:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Florida</strong> enacted
                the Florida Telephone Solicitation Act with stricter calling
                hour restrictions and higher penalties.
              </li>
              <li>
                <strong className="text-foreground">California</strong> has
                broad consumer privacy protections under the CCPA that affect
                how lead data can be collected and shared.
              </li>
              <li>
                <strong className="text-foreground">Oklahoma</strong> and other
                states maintain their own state-level do-not-call lists with
                separate registration and scrubbing requirements.
              </li>
            </ul>
            <p>
              If you operate across state lines -- and most lead buyers do --
              you need to understand the regulations in every state where your
              consumers are located, not just where your business is based.
            </p>

            <h2 className="text-2xl font-display text-foreground mt-10 mb-4">
              The Bottom Line
            </h2>
            <p>
              TCPA compliance is a business necessity. The penalties are too
              steep and the enforcement too active to treat it as an
              afterthought. Every lead you buy should come with complete consent
              documentation, every call you make should be logged, and every
              opt-out should be honored immediately. The agents and businesses
              that treat compliance as a competitive advantage -- rather than a
              burden -- are the ones that build sustainable operations.
            </p>

            <div className="mt-12 p-8 bg-sage-50 rounded-xl border border-border">
              <h3 className="text-xl font-display text-foreground mb-3">
                Every Optinly Lead Is Fully Documented
              </h3>
              <p className="mb-4">
                Optinly provides complete TCPA consent records with every lead,
                including one-to-one consent documentation, opt-in timestamps,
                IP addresses, and full conversation transcripts. Compliance is
                built into every lead we deliver.
              </p>
              <Link
                href="/book-demo"
                className="inline-flex items-center text-sage-500 font-medium hover:text-sage-600 transition-colors"
              >
                Book a demo &rarr;
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-display text-foreground mb-4">
                Related Articles
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog/compliance-in-lead-generation"
                    className="text-sage-500 hover:text-sage-600 transition-colors"
                  >
                    Compliance in Lead Generation: TCPA and Beyond &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/what-makes-a-qualified-lead"
                    className="text-sage-500 hover:text-sage-600 transition-colors"
                  >
                    What Makes a Qualified Lead? &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/how-to-buy-insurance-leads"
                    className="text-sage-500 hover:text-sage-600 transition-colors"
                  >
                    How to Buy Insurance Leads &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/exclusive-vs-shared-leads"
                    className="text-sage-500 hover:text-sage-600 transition-colors"
                  >
                    Exclusive vs. Shared Leads: Which Is Better? &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
