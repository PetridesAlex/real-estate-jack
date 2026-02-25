import PageContainer from "@/components/layout/PageContainer";
import SectionTitle from "@/components/shared/SectionTitle";

export default function AboutPage() {
  return (
    <PageContainer>
      <section className="mt-8">
        <SectionTitle
          eyebrow="About"
          title="Built on trust. Driven by results."
          subtitle="We combine local market expertise with institutional-grade service quality."
        />

        <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-card">
          <p className="text-slate-700 leading-7">
            EstateJack is a full-service real estate and property management company helping owners, buyers and tenants
            make better property decisions. Our team focuses on transparent communication, strong execution and
            long-term value creation.
          </p>
        </article>
      </section>
    </PageContainer>
  );
}
