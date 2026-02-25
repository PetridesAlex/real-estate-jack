import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";
import AgentCard from "@/components/shared/AgentCard";
import MapPreview from "@/components/shared/MapPreview";
import PropertyCard from "@/components/shared/PropertyCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { agents } from "@/data/agents";
import { properties } from "@/data/properties";
import { formatCurrency } from "@/utils/format";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = properties.find((item) => item.id === resolvedParams.id);
  if (!property) return notFound();

  const agent = agents.find((item) => item.id === property.agentId);
  const similarProperties = properties
    .filter((item) => item.id !== resolvedParams.id && item.type === property.type)
    .slice(0, 3);

  return (
    <PageContainer>
      <section className="mt-8">
        <SectionTitle eyebrow="Property Detail" title={property.title} subtitle={`${property.location} · ${property.type}`} />

        <div className="grid grid-flow-col auto-cols-[320px] gap-3 overflow-x-auto pb-2">
          {property.images.map((image) => (
            <Image
              key={image}
              src={image}
              alt={property.title}
              width={320}
              height={220}
              className="w-[320px] h-[220px] rounded-2xl object-cover"
            />
          ))}
        </div>

        <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-card mt-6">
          <div className="flex flex-wrap gap-4">
            <p className="text-brand text-2xl font-bold">{formatCurrency(property.price)}</p>
            <p className="text-slate-700">{property.beds} beds</p>
            <p className="text-slate-700">{property.baths} baths</p>
            <p className="text-slate-700">{property.areaSqm} sqm</p>
          </div>
          <p className="text-slate-600 mt-4 leading-7">{property.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {property.amenities.map((amenity) => (
              <span key={amenity} className="bg-slate-100 rounded-full px-3 py-1 text-slate-700">
                {amenity}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <button className="rounded-xl px-5 py-3 min-h-12 font-semibold bg-brand text-white">Request viewing</button>
            <a
              href="https://wa.me/15551002000"
              target="_blank"
              className="rounded-xl px-5 py-3 min-h-12 font-semibold bg-white border border-slate-300 text-slate-900"
            >
              WhatsApp
            </a>
          </div>
        </article>

        <section className="mt-8">
          <SectionTitle eyebrow="Location" title="Map" />
          <MapPreview />
        </section>

        {agent ? (
          <section className="mt-8">
            <SectionTitle eyebrow="Agent" title="Your Property Advisor" />
            <AgentCard agent={agent} />
          </section>
        ) : null}

        <section className="mt-10">
          <SectionTitle eyebrow="Similar Properties" title="You may also like" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
            {similarProperties.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </section>

        <div className="mt-8">
          <Link href="/properties" className="text-brand font-semibold">
            ← Back to properties
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}
