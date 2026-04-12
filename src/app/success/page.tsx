import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Thank You | Optinly",
  description:
    "Thanks for completing the intake quiz. A lead specialist will contact you within 24 hours to set up your account.",
  alternates: { canonical: "https://optinly.io/success" },
  openGraph: {
    title: "Thank You | Optinly",
    description:
      "Thanks for completing the intake quiz. A lead specialist will contact you within 24 hours to set up your account.",
    url: "https://optinly.io/success",
  },
};

const steps = [
  "We review your criteria and match you with the right lead sources",
  "A lead specialist contacts you to finalize pricing and delivery",
  "You start receiving pre-qualified leads in your inbox or CRM",
];

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAF8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E8E6E1] p-8 sm:p-12 text-center">
            {/* Checkmark icon */}
            <div className="flex justify-center mb-6">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="36" cy="36" r="36" fill="#2D6A4F" />
                <path
                  d="M22 36L32 46L50 28"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] mb-4">
              You&apos;re All Set!
            </h1>

            {/* Subtext */}
            <p className="text-[#4A4A45] text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-10">
              Thanks for completing the quiz. One of our lead specialists will
              reach out within 24 hours to set up your account and get your first
              leads flowing.
            </p>

            {/* What happens next */}
            <div className="text-left border-t border-[#E8E6E1] pt-8 mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-[#1A1A18] mb-6 text-center">
                What happens next?
              </h2>
              <ol className="space-y-5">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D6A4F] text-white text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-[#4A4A45] text-base leading-relaxed pt-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA box */}
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E1] p-6 sm:p-8">
              <p className="text-[#1A1A18] font-medium text-base sm:text-lg mb-4">
                Want to get started faster? Book a call now.
              </p>
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#F4A261] hover:bg-[#e8943a] text-[#1A1A18] font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                Book a Call &rarr;
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
