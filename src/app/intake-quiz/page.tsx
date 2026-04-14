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
  improvements: string[];
  revenue: string;
  website: string;
  fullName: string;
  email: string;
  phone: string;
  tcpaConsent: boolean;
}

const TOTAL_STEPS = 7;

const INDUSTRY_OPTIONS = [
  { label: "Insurance", icon: "shield" },
  { label: "Debt Relief", icon: "chart" },
  { label: "MVA", icon: "scale" },
];

const IMPROVEMENT_OPTIONS = [
  {
    id: "lead-gen",
    label: "Lead Generation",
    desc: "Generate More Qualified Leads",
  },
  {
    id: "sales",
    label: "Sales",
    desc: "Convert More Leads Into Sales",
  },
  {
    id: "lead-quality",
    label: "Improve Lead Quality",
    desc: "Increase Contact and Conversion Rate",
  },
  {
    id: "digital",
    label: "Digital Presence",
    desc: "Get discovered by people looking for your services online",
  },
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
    improvements: [],
    revenue: "",
    website: "",
    fullName: "",
    email: "",
    phone: "",
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
      const params = new URLSearchParams({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      });
      router.push(`/book-demo?${params.toString()}`);
    } catch {
      setIsSubmitting(false);
    }
  };

  const toggleImprovement = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      improvements: prev.improvements.includes(id)
        ? prev.improvements.filter((i) => i !== id)
        : [...prev.improvements, id],
    }));
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
      <title>Get Leads | Optinly</title>
      <meta
        name="description"
        content="Answer a few quick questions to get matched with exclusive, verified leads delivered in real-time. Get started with Optinly."
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
                  Want more qualified customers?
                </h1>
                <p className="mt-4 text-lg text-[#4A4A45]">
                  Simply set your ideal client criteria, and{" "}
                  <strong>get new leads in less than 24hrs.</strong>
                </p>

                <ul className="mt-8 space-y-5">
                  {[
                    {
                      title: "Access High Quality Leads On Demand",
                      desc: "Get pre-qualified leads delivered to you wherever you want in real-time",
                    },
                    {
                      title: "We Pay For Your Marketing",
                      desc: "You pay us only for prospects that are fit for your business",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
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
                      <div>
                        <span className="font-semibold text-[#1A1A18]">
                          {item.title}
                        </span>
                        <p className="text-sm text-[#4A4A45] mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => goTo(2)}
                  className="mt-10 inline-flex w-full items-center justify-center rounded-xl bg-[#2D6A4F] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#245A43] sm:w-auto"
                >
                  Next
                  <svg
                    className="ml-2 h-5 w-5"
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
                  What industry do you need the leads&nbsp;for?
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {INDUSTRY_OPTIONS.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          industry: option.label,
                        }));
                        setTimeout(() => goTo(3), 250);
                      }}
                      className={`relative flex flex-col items-center justify-center rounded-xl border-2 px-5 py-8 text-center transition-all ${
                        formData.industry === option.label
                          ? "border-[#2D6A4F] bg-[#2D6A4F]/10 text-[#1A1A18]"
                          : "border-[#E8E6E1] bg-white text-[#1A1A18] hover:border-[#2D6A4F] hover:bg-[#2D6A4F]/5"
                      }`}
                    >
                      {/* Icon */}
                      <div className="mb-3">
                        {option.icon === "shield" && (
                          <svg className="h-10 w-10 text-[#2D6A4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        )}
                        {option.icon === "chart" && (
                          <svg className="h-10 w-10 text-[#2D6A4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        )}
                        {option.icon === "scale" && (
                          <svg className="h-10 w-10 text-[#2D6A4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                          </svg>
                        )}
                      </div>
                      <span className="text-lg font-semibold">{option.label}</span>
                    </button>
                  ))}
                </div>

                <BackButton onClick={() => goTo(1)} />
              </div>
            </div>
          )}

          {/* ---- Step 3: Where can you improve ---- */}
          {step === 3 && (
            <div key="step-3" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl">
                  Where do you feel your firm can improve and do&nbsp;better?
                </h2>
                <p className="mt-2 text-sm text-[#4A4A45]">
                  Select all that apply
                </p>

                <div className="mt-8 space-y-3">
                  {IMPROVEMENT_OPTIONS.map((option) => (
                    <label
                      key={option.id}
                      className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 px-5 py-4 transition-all ${
                        formData.improvements.includes(option.id)
                          ? "border-[#2D6A4F] bg-[#2D6A4F]/10"
                          : "border-[#E8E6E1] bg-white hover:border-[#2D6A4F]/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.improvements.includes(option.id)}
                        onChange={() => toggleImprovement(option.id)}
                        className="mt-1 h-5 w-5 shrink-0 accent-[#2D6A4F] rounded"
                      />
                      <div>
                        <span className="font-semibold text-[#1A1A18]">
                          {option.label}:
                        </span>{" "}
                        <span className="text-[#4A4A45]">{option.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>

                <NavButtons
                  onBack={() => goTo(2)}
                  onNext={() => goTo(4)}
                  nextDisabled={formData.improvements.length === 0}
                />
              </div>
            </div>
          )}

          {/* ---- Step 4: Revenue ---- */}
          {step === 4 && (
            <div key="step-4" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl">
                  How much revenue do you generate per&nbsp;year?
                </h2>
                <p className="mt-2 text-sm text-[#4A4A45]">
                  It helps us determine what type of partnership will be the most
                  useful for you
                </p>

                <div className="mt-8 flex items-center rounded-xl border-2 border-[#E8E6E1] bg-white transition-colors focus-within:border-[#2D6A4F]">
                  <span className="pl-5 text-lg font-medium text-[#4A4A45]">
                    $
                  </span>
                  <input
                    type="text"
                    value={formData.revenue}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        revenue: e.target.value,
                      }))
                    }
                    placeholder="Annual Revenue"
                    className="w-full bg-transparent px-3 py-3.5 text-[#1A1A18] placeholder-[#4A4A45]/50 outline-none"
                  />
                </div>

                <NavButtons
                  onBack={() => goTo(3)}
                  onNext={() => goTo(5)}
                  nextDisabled={!formData.revenue.trim()}
                />
              </div>
            </div>
          )}

          {/* ---- Step 5: Website ---- */}
          {step === 5 && (
            <div key="step-5" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl">
                  What&apos;s your company website?
                </h2>
                <p className="mt-2 text-sm text-[#4A4A45]">
                  If you don&apos;t have a website skip this question
                </p>

                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      website: e.target.value,
                    }))
                  }
                  placeholder="companysite.com"
                  className="mt-8 w-full rounded-xl border-2 border-[#E8E6E1] bg-white px-5 py-3.5 text-[#1A1A18] placeholder-[#4A4A45]/50 outline-none transition-colors focus:border-[#2D6A4F]"
                />

                <NavButtons
                  onBack={() => goTo(4)}
                  onNext={() => goTo(6)}
                  nextDisabled={false}
                />
              </div>
            </div>
          )}

          {/* ---- Step 6: Contact Info ---- */}
          {step === 6 && (
            <div key="step-6" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl">
                  How can we connect with you?
                </h2>
                <p className="mt-2 text-[#4A4A45]">
                  To get your personalized offer and pricing, please enter your
                  details
                </p>

                <div className="mt-8 space-y-5">
                  <InputField
                    label="Full Name"
                    required
                    value={formData.fullName}
                    onChange={(v) =>
                      setFormData((prev) => ({ ...prev, fullName: v }))
                    }
                    placeholder="Full Name"
                  />
                  <InputField
                    label="Work Email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(v) =>
                      setFormData((prev) => ({ ...prev, email: v }))
                    }
                    placeholder="Work Email"
                  />
                  <InputField
                    label="Phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(v) =>
                      setFormData((prev) => ({ ...prev, phone: v }))
                    }
                    placeholder="Phone"
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
                      By submitting this form, you consent to the processing of
                      your personal data. I authorize Optinly and its partners
                      to contact me by email, phone, and SMS regarding lead
                      generation services. Consent is not required to make a
                      purchase.
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
                        Submit &amp; Book a Call
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

          {/* ---- Step 7: Book a Call (Calendar) ---- */}
          {step === 7 && (
            <div key="step-7" className={`${animClass}`}>
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-8 shadow-sm sm:p-12">
                <h2 className="font-serif text-2xl text-[#1A1A18] sm:text-3xl text-center">
                  Book Your Strategy Call
                </h2>
                <p className="mt-2 text-center text-[#4A4A45]">
                  Pick a time that works for you and we&apos;ll walk you through
                  your personalized lead plan.
                </p>

                <div className="mt-8 rounded-xl overflow-hidden border border-[#E8E6E1]">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/qnYnomEPvz4vFovJQkor"
                    style={{ width: "100%", border: "none", overflow: "hidden" }}
                    scrolling="no"
                    id="qnYnomEPvz4vFovJQkor_1776105991628"
                    title="Book a Call - Optinly"
                    height="700"
                  />
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

function NavButtons({
  onBack,
  onNext,
  nextDisabled,
}: {
  onBack: () => void;
  onNext: () => void;
  nextDisabled: boolean;
}) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <BackButton onClick={onBack} inline />
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="inline-flex items-center rounded-xl bg-[#2D6A4F] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#245A43] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
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
