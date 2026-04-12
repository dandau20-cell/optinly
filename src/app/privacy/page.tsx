import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Optinly.io, operated by MediaStock LLC. Learn how we collect, use, and protect your information.",
  alternates: { canonical: "https://optinly.io/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted mb-6">
            Last updated: April 11, 2026
          </p>

          <div className="prose prose-lg max-w-none text-muted space-y-8">
            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                1. Introduction
              </h2>
              <p>
                This Privacy Policy describes how MediaStock LLC (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), operating as Optinly.io, collects, uses,
                and shares information in connection with our website and
                services at optinly.io (the &quot;Service&quot;). MediaStock LLC is
                registered in the state of Delaware, United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-display text-foreground mt-6 mb-3">
                2.1 Information from Lead Buyers
              </h3>
              <p>
                When you register as a lead buyer or request a demo, we collect
                your name, email address, phone number, company name, and
                business details. We may also collect billing and payment
                information necessary to process transactions.
              </p>
              <h3 className="text-xl font-display text-foreground mt-6 mb-3">
                2.2 Information from Consumers (Lead Data)
              </h3>
              <p>
                Through our affiliated platforms (Covian.io and CovianDebt.com),
                consumers voluntarily provide personal information including
                name, email, phone number, state of residence, and details
                relevant to their insurance or debt relief needs. This
                information is collected with explicit TCPA consent and is shared
                with lead buyers who have purchased the lead.
              </p>
              <h3 className="text-xl font-display text-foreground mt-6 mb-3">
                2.3 Automatically Collected Information
              </h3>
              <p>
                We automatically collect certain information when you visit our
                website, including IP address, browser type, operating system,
                referring URL, pages visited, and time spent on pages. We use
                cookies and similar technologies for analytics and to improve
                your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                3. How We Use Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and deliver leads to buyers</li>
                <li>Communicate with you about our services, updates, and promotions</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Detect and prevent fraud or misuse</li>
                <li>Analyze usage patterns to improve our platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                4. Information Sharing
              </h2>
              <p>
                We share consumer lead data with lead buyers who have purchased
                that specific lead. Each lead is sold exclusively to one buyer.
                We do not sell, rent, or share personal information with third
                parties for their own marketing purposes, except as described in
                this policy.
              </p>
              <p className="mt-3">
                We may share information with service providers who assist in
                operating our business (payment processors, hosting providers,
                analytics services), and as required by law or to protect our
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                5. TCPA Compliance
              </h2>
              <p>
                All consumer data collected through our affiliated platforms is
                obtained with explicit prior express written consent as required
                by the Telephone Consumer Protection Act (TCPA). Consent records,
                timestamps, and conversation transcripts are maintained and
                provided to lead buyers as part of the lead package.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                6. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission or storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                7. Data Retention
              </h2>
              <p>
                We retain personal information for as long as necessary to
                provide our services and fulfill the purposes described in this
                policy. Lead data and consent records are retained for a minimum
                of five years to support compliance and dispute resolution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                8. Your Rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have the right to access,
                correct, delete, or restrict the processing of your personal
                information. To exercise these rights, contact us at
                privacy@optinly.io.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                9. California Privacy Rights
              </h2>
              <p>
                If you are a California resident, you have additional rights
                under the California Consumer Privacy Act (CCPA), including the
                right to know what personal information we collect, the right to
                delete, and the right to opt out of the sale of personal
                information. Contact us at privacy@optinly.io to exercise these
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by posting the updated policy on
                this page with a revised &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mt-8 mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <p className="mt-3">
                MediaStock LLC<br />
                Email: privacy@optinly.io
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
