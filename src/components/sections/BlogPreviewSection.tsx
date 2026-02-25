import SectionTitle from "@/components/shared/SectionTitle";

const posts = [
  {
    title: "How to Evaluate Property ROI in 2026",
    excerpt: "A practical framework to compare returns across rental assets."
  },
  {
    title: "Design Upgrades That Add Resale Value",
    excerpt: "The renovation moves buyers notice first."
  },
  {
    title: "Neighborhood Signals Before Prices Move",
    excerpt: "What experienced investors monitor each quarter."
  }
];

export default function BlogPreviewSection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Insights" title="From Our Blog" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {posts.map((post) => (
          <article key={post.title} className="bg-white border border-slate-100 rounded-2xl p-5">
            <h3 className="text-slate-900 font-semibold">{post.title}</h3>
            <p className="text-slate-600 mt-2">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
