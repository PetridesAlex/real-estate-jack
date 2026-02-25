import SectionTitle from "@/components/shared/SectionTitle";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="mt-20">
      <SectionTitle
        eyebrow="What We Do"
        title="Property Services"
        subtitle="Integrated support for owners and investors, from operations to long-term value optimization."
      />

      <div className="rounded-3xl bg-white/75 p-4 md:p-6 shadow-card">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-card transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
                <span className="text-xs tracking-[0.2em] text-muted">0{index + 1}</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mt-5">{service.title}</h3>
              <p className="text-slate-600 mt-2 leading-6">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
