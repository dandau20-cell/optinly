import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-1.5 mb-4">
              <span className="text-sage-50 text-2xl font-bold">&#10003;</span>
              <span className="text-xl font-display text-white">Optinly</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Customer acquisition platform for insurance, legal, and debt
              relief. Branded funnels, AI qualification, live warm transfers.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#verticals"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Verticals
                </Link>
              </li>
              <li>
                <Link
                  href="/intake-quiz"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Schedule a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Verticals
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/life-insurance-leads"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/#verticals"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/debt-relief-leads"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Debt Relief
                </Link>
              </li>
            </ul>
          </div>

          {/* Company / Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; 2026 Optinly. A MediaStock LLC company.
          </p>
        </div>
      </div>
    </footer>
  );
}
