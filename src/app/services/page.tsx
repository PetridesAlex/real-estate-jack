import PageContainer from "@/components/layout/PageContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <PageContainer>
      <section className="mt-8">
        <SectionTitle
          eyebrow="What We Do"
          title="Services"
          subtitle="Comprehensive management and brokerage services tailored for modern portfolios."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
          {services.map((service) => (
            <article key={service.id} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-card">
              <p className="text-2xl">{service.icon}</p>
              <h3 className="text-lg font-semibold text-slate-900 mt-3">{service.title}</h3>
              <p className="text-slate-600 mt-2">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
