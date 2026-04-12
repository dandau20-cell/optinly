"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [verticalsOpen, setVerticalsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-sage-500 text-2xl font-bold">&#10003;</span>
            <span className="text-xl font-display text-foreground">
              Optinly
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-foreground hover:text-sage-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm text-foreground hover:text-sage-500 transition-colors"
            >
              How It Works
            </Link>
            <div className="relative group">
              <button className="text-sm text-foreground hover:text-sage-500 transition-colors flex items-center gap-1">
                Verticals
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-surface border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                  <Link
                    href="/life-insurance-leads"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-sage-50 hover:text-sage-500"
                  >
                    Life Insurance Leads
                  </Link>
                  <Link
                    href="/debt-relief-leads"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-sage-50 hover:text-sage-500"
                  >
                    Debt Relief Leads
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="text-sm text-foreground hover:text-sage-500 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm text-foreground hover:text-sage-500 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/book-demo"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-sage-500 text-white text-sm font-medium hover:bg-sage-600 transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-foreground hover:text-sage-500"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-foreground hover:text-sage-500"
                onClick={() => setMobileOpen(false)}
              >
                How It Works
              </Link>
              <button
                onClick={() => setVerticalsOpen(!verticalsOpen)}
                className="text-sm text-foreground hover:text-sage-500 text-left flex items-center gap-1"
              >
                Verticals
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${verticalsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {verticalsOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/life-insurance-leads"
                    className="text-sm text-muted hover:text-sage-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    Life Insurance Leads
                  </Link>
                  <Link
                    href="/debt-relief-leads"
                    className="text-sm text-muted hover:text-sage-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    Debt Relief Leads
                  </Link>
                </div>
              )}
              <Link
                href="/pricing"
                className="text-sm text-foreground hover:text-sage-500"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-sm text-foreground hover:text-sage-500"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-sage-500 text-white text-sm font-medium hover:bg-sage-600 transition-colors mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Book a Demo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
