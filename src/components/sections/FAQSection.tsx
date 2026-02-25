import SectionTitle from "@/components/shared/SectionTitle";

const faqs = [
  {
    question: "Do you handle residential and commercial properties?",
    answer: "Yes. We offer brokerage and management services for both residential and commercial assets."
  },
  {
    question: "Can I schedule a virtual property viewing?",
    answer: "Absolutely. We support virtual and on-site viewings depending on your preference."
  },
  {
    question: "Do you provide post-purchase management?",
    answer: "Yes. Our property management packages include maintenance, leasing, and tenant support."
  }
];

export default function FAQSection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
      <div className="grid gap-3">
        {faqs.map((faq) => (
          <article key={faq.question} className="bg-white border border-slate-100 rounded-2xl p-5">
            <h3 className="text-slate-900 font-semibold">{faq.question}</h3>
            <p className="text-slate-600 mt-2">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
