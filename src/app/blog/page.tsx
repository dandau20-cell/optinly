import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on lead generation, compliance, and best practices for insurance agents and debt relief companies.",
  alternates: { canonical: "https://optinly.io/blog" },
  openGraph: {
    title: "Blog | Optinly",
    description:
      "Insights on lead generation, compliance, and best practices for insurance agents and debt relief companies.",
    url: "https://optinly.io/blog",
  },
};

const articles = [
  {
    slug: "how-to-buy-insurance-leads",
    title: "How to Buy Insurance Leads: A Complete Guide",
    excerpt:
      "Learn what to look for when purchasing insurance leads, how to evaluate quality, and how to maximize your ROI.",
    date: "April 8, 2026",
  },
  {
    slug: "what-makes-a-qualified-lead",
    title: "What Makes a Qualified Lead?",
    excerpt:
      "Not all leads are created equal. Understand the difference between a name on a list and a truly qualified prospect.",
    date: "April 5, 2026",
  },
  {
    slug: "exclusive-vs-shared-leads",
    title: "Exclusive vs. Shared Leads: Which Is Better?",
    excerpt:
      "Compare the pros and cons of exclusive and shared leads to determine which model delivers the best results for your business.",
    date: "April 1, 2026",
  },
  {
    slug: "lead-generation-for-insurance-agents",
    title: "Lead Generation for Insurance Agents in 2026",
    excerpt:
      "The landscape of insurance lead generation is evolving. Here is what agents need to know to stay competitive.",
    date: "March 28, 2026",
  },
  {
    slug: "compliance-in-lead-generation",
    title: "Compliance in Lead Generation: TCPA and Beyond",
    excerpt:
      "Understanding TCPA compliance and other regulatory requirements is essential for any lead buyer. Here is what you need to know.",
    date: "March 24, 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-sage-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-display">Blog</h1>
            <p className="mt-4 text-lg text-sage-100">
              Insights on lead generation, compliance, and growing your
              business.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="border-b border-border pb-10 last:border-0"
                >
                  <p className="text-sm text-muted mb-2">{article.date}</p>
                  <h2 className="text-2xl font-display text-foreground mb-3">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-sage-500 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-sage-500 font-medium hover:text-sage-600 transition-colors"
                  >
                    Read more &rarr;
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
