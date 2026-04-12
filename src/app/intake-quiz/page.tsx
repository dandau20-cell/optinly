"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FormData {
  industry: string;
  volume: string;
  states: string;
  budget: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  tcpaConsent: boolean;
}

const TOTAL_STEPS = 6;

const INDUSTRY_OPTIONS = [
  "Life Insurance",
  "Debt Relief",
  "Medicare",
  "Final Expense",
  "Auto Insurance",
  "Other",
];

const VOLUME_OPTIONS = ["10-25", "25-50", "50-100", "100-250", "250+"];

const BUDGET_OPTIONS = [
  "Under $500",
  "$500-$1,000",
  "$1,000-$2,500",
  "$2,500-$5,000",
  "$5,000+",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function IntakeQuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    industry: "",
    volume: "",
    states: "",
    budget: "",
    fullName: "",
    email: "",
    phone: "",
    company: "",
    tcpaConsent: false,
  });

  /* Helpers */
  const goTo = useCallback(
    (next: number) => {
      setDirection(next > step ? "forward" : "back");
      setStep(next);
    },
    [step]
  );

  const selectOption = useCallback(
    (field: keyof FormData, value: string, nextStep: number) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setTimeout(() => goTo(nextStep), 250);
    },
    [goTo]
  );

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.phone) return;
    if (!formData.tcpaConsent) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      router.push("/success");
    } catch {
      setIsSubmitting(false);
    }
  };

  /* Progress */
  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  /* Shared card wrapper classes */
  const animClass =
    direction === "forward"
      ? "animate-fade-in-right"
      : "animate-fade-in-left";

  return (
    <>
      {/* SEO handled via metadata export in layout or head */}
      <title>Intake Quiz | Optinly</title>
      <meta
        name="description"
        content="Answer a few quick questions to get matched with exclusive, TCPA-compliant leads delivered in real-time. Pre-qualify now with Optinly."
      />

      <Header />

      <main className="min-h-screen bg-[#FAFAF8] pb-24 pt-8">
        {/* Progress bar */}
        <div className="mx-auto max-w-2xl px-4">
          <div className="mb-2 flex items-center justify-between text-sm text-[#4A4A45]">
            <span>Step {step} of {TOTAL_STEPS}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#E8E6E1]">
            <div
              className="h-full rounded-full bg-[#2D6A4F] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-10 max-w-2xl px-4">
          {/* ---- Step 1: Welcome ---- */}
          {step === 1 && (
            <div key="step-1" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h1 className="font-serif text-3xl leading-tight text-[#1A1A18] sm:text-4xl">
                  Get Pre-Qualified Leads Delivered&nbsp;to&nbsp;You
                </h1>
                <p className="mt-4 text-lg text-[#4A4A45]">
                  Answer a few quick questions so we can match you with the
                  right leads for your business.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Exclusive, TCPA-compliant leads",
                    "Delivered in real-time to your CRM",
                    "You only pay for leads that match your criteria",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#2D6A4F]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#1A1A18]">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => goTo(2)}
                  className="mt-10 inline-flex items-center rounded-xl bg-[#2D6A4F] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#245A43]"
                >
                  Get Started
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* ---- Step 2: Industry ---- */}
          {step === 2 && (
            <div key="step-2" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl">
                  What type of leads are you looking&nbsp;for?
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {INDUSTRY_OPTIONS.map((option) => (
                    <OptionCard
                      key={option}
                      label={option}
                      selected={formData.industry === option}
                      onClick={() => selectOption("industry", option, 3)}
                    />
                  ))}
                </div>

                <BackButton onClick={() => goTo(1)} />
              </div>
            </div>
          )}

          {/* ---- Step 3: Volume ---- */}
          {step === 3 && (
            <div key="step-3" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl">
                  How many leads do you need per&nbsp;month?
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {VOLUME_OPTIONS.map((option) => (
                    <OptionCard
                      key={option}
                      label={option}
                      selected={formData.volume === option}
                      onClick={() => selectOption("volume", option, 4)}
                    />
                  ))}
                </div>

                <BackButton onClick={() => goTo(2)} />
              </div>
            </div>
          )}

          {/* ---- Step 4: States ---- */}
          {step === 4 && (
            <div key="step-4" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl">
                  Which states are you licensed&nbsp;in?
                </h2>

                <input
                  type="text"
                  value={formData.states}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      states: e.target.value,
                    }))
                  }
                  placeholder="e.g. California, Texas, Florida..."
                  className="mt-8 w-full rounded-xl border-2 border-[#E8E6E1] bg-white px-5 py-3.5 text-[#1A1A18] placeholder-[#4A4A45]/50 outline-none transition-colors focus:border-[#2D6A4F]"
                />

                <div className="mt-8 flex items-center justify-between">
                  <BackButton onClick={() => goTo(3)} inline />
                  <button
                    onClick={() => goTo(5)}
                    disabled={!formData.states.trim()}
                    className="inline-flex items-center rounded-xl bg-[#2D6A4F] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#245A43] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ---- Step 5: Budget ---- */}
          {step === 5 && (
            <div key="step-5" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl">
                  What&apos;s your monthly budget for&nbsp;leads?
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {BUDGET_OPTIONS.map((option) => (
                    <OptionCard
                      key={option}
                      label={option}
                      selected={formData.budget === option}
                      onClick={() => selectOption("budget", option, 6)}
                    />
                  ))}
                </div>

                <BackButton onClick={() => goTo(4)} />
              </div>
            </div>
          )}

          {/* ---- Step 6: Contact Info ---- */}
          {step === 6 && (
            <div key="step-6" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl">
                  Almost done! Where should we send your lead&nbsp;details?
                </h2>

                <div className="mt-8 space-y-5">
                  <InputField
                    label="Full Name"
                    required
                    value={formData.fullName}
                    onChange={(v) =>
                      setFormData((prev) => ({ ...prev, fullName: v }))
                    }
                    placeholder="John Smith"
                  />
                  <InputField
                    label="Work Email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(v) =>
                      setFormData((prev) => ({ ...prev, email: v }))
                    }
                    placeholder="john@agency.com"
                  />
                  <InputField
                    label="Phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(v) =>
                      setFormData((prev) => ({ ...prev, phone: v }))
                    }
                    placeholder="(555) 123-4567"
                  />
                  <InputField
                    label="Company Name"
                    value={formData.company}
                    onChange={(v) =>
                      setFormData((prev) => ({ ...prev, company: v }))
                    }
                    placeholder="Acme Insurance (optional)"
                  />

                  {/* TCPA Consent */}
                  <label className="mt-2 flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={formData.tcpaConsent}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          tcpaConsent: e.target.checked,
                        }))
                      }
                      className="mt-1 h-4 w-4 shrink-0 accent-[#2D6A4F]"
                    />
                    <span className="text-sm leading-relaxed text-[#4A4A45]">
                      I authorize Optinly and its partners to contact me by
                      email, phone, and SMS regarding lead generation services.
                      Consent is not required to make a purchase.
                    </span>
                  </label>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <BackButton onClick={() => goTo(5)} inline />
                  <button
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting ||
                      !formData.fullName ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.tcpaConsent
                    }
                    className="inline-flex items-center rounded-xl bg-[#2D6A4F] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#245A43] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit &amp; Get Your Leads
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Inline animation styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right { animation: fadeInRight 0.35s ease-out both; }
        .animate-fade-in-left { animation: fadeInLeft 0.35s ease-out both; }
      `}} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function OptionCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-between rounded-xl border-2 px-5 py-4 text-left text-base font-medium transition-all ${
        selected
          ? "border-[#2D6A4F] bg-[#2D6A4F]/10 text-[#1A1A18]"
          : "border-[#E8E6E1] bg-white text-[#1A1A18] hover:border-[#2D6A4F] hover:bg-[#2D6A4F]/5"
      }`}
    >
      {label}
      {selected && (
        <svg
          className="h-5 w-5 shrink-0 text-[#2D6A4F]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
  );
}

function BackButton({
  onClick,
  inline,
}: {
  onClick: () => void;
  inline?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center text-sm font-medium text-[#4A4A45] transition-colors hover:text-[#2D6A4F] ${
        inline ? "" : "mt-6"
      }`}
    >
      <svg
        className="mr-1.5 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </button>
  );
}

function InputField({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#1A1A18]">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-[#E8E6E1] bg-white px-5 py-3 text-[#1A1A18] placeholder-[#4A4A45]/50 outline-none transition-colors focus:border-[#2D6A4F]"
      />
    </div>
  );
}
