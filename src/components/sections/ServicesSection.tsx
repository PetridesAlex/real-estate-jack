import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  s1: "/images/claning-services/building-management.webp",
  s2: "/images/claning-services/cleaning-maintenance.webp",
  s3: "/images/claning-services/rennovation.webp",
  s4: "/images/claning-services/all-day-support.webp"
};

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
              className="rounded-2xl bg-white overflow-hidden border border-slate-100 shadow-sm hover:shadow-card transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-40">
                <Image
                  src={serviceImages[service.id]}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className="absolute left-4 bottom-4 h-10 w-10 rounded-xl bg-white/90 text-brand flex items-center justify-center text-xl shadow-sm">
                  {service.icon}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-muted">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mt-3">{service.title}</h3>
                <p className="text-slate-600 mt-2 leading-6 text-sm">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
