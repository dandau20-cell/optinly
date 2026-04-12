import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Optinly.io lead buyers. Understand the terms governing lead purchases from MediaStock LLC.",
  alternates: { canonical: "https://optinly.io/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display text-foreground mb-8">
            Terms of Service
          </h1>
          <p className="text-muted mb-6">
            Last updated: April 11, 2026
          </p>

          <div className="prose prose-lg max-w-none text-muted space-y-8">
            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using the services provided by MediaStock LLC
                (&quot;Company&quot;), operating as Optinly.io (&quot;Service&quot;), you agree to
                be bound by these Terms of Service (&quot;Terms&quot;). If you do not
                agree to these Terms, you may not use the Service. MediaStock LLC
                is registered in the state of Delaware, United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                2. Description of Service
              </h2>
              <p>
                Optinly.io is a B2B lead marketplace that connects lead buyers
                (insurance agents, debt relief companies, and other qualified
                businesses) with consumer leads generated through our affiliated
                platforms. Leads are sold on a pay-per-lead basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                3. Account Registration
              </h2>
              <p>
                To purchase leads, you must register for an account and provide
                accurate, complete information. You are responsible for
                maintaining the confidentiality of your account credentials and
                for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                4. Lead Purchases and Payment
              </h2>
              <p>
                Lead pricing varies by vertical, state, and volume. Pricing will
                be communicated to you before any purchase is made. Payment is
                due upon delivery of leads unless otherwise agreed in writing.
                All sales are final except as provided in our replacement policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                5. Lead Quality and Replacement
              </h2>
              <p>
                We strive to deliver high-quality, verified leads. If a lead
                does not meet our stated quality standards (invalid contact
                information, duplicate, or does not match specified criteria),
                you may request a replacement within 72 hours of delivery. We
                will review and, if the claim is valid, provide a replacement
                lead at no additional cost.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                6. Permitted Use of Leads
              </h2>
              <p>
                Leads purchased through Optinly.io are for your internal
                business use only. You may not resell, redistribute, or share
                lead data with third parties. You agree to contact leads only
                for the purpose related to their expressed interest and in
                compliance with all applicable laws, including the TCPA and
                state telemarketing regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                7. Compliance Obligations
              </h2>
              <p>
                You are solely responsible for ensuring your outreach to leads
                complies with all applicable federal, state, and local laws and
                regulations, including but not limited to the TCPA, CAN-SPAM
                Act, and state-specific telemarketing and licensing requirements.
                We provide TCPA consent documentation with each lead, but your
                use of that data must comply with all applicable regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                8. Exclusivity
              </h2>
              <p>
                Unless otherwise specified, all leads are sold exclusively to
                one buyer. Once a lead has been delivered to you, it will not be
                sold to another buyer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                9. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, MediaStock LLC shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, arising from your use of the
                Service or any leads purchased. Our total liability shall not
                exceed the amount you paid for the specific leads giving rise to
                the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                10. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless MediaStock LLC, its
                officers, directors, employees, and agents from any claims,
                damages, losses, or expenses arising from your use of leads
                purchased through the Service, including any violation of
                applicable laws or regulations in your outreach activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                11. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your account at any
                time if we believe you have violated these Terms or are using
                leads in a manner that is harmful, fraudulent, or non-compliant
                with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                12. Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of the State of Delaware, without regard to its conflict of
                law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                13. Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify you
                of material changes by posting the updated Terms on this page.
                Your continued use of the Service after changes are posted
                constitutes your acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                14. Contact Us
              </h2>
              <p>
                If you have questions about these Terms of Service, contact us
                at:
              </p>
              <p className="mt-3">
                MediaStock LLC<br />
                Email: legal@optinly.io
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
