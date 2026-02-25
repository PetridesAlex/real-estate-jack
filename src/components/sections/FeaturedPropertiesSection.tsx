import Link from "next/link";
import PropertyCard from "@/components/shared/PropertyCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { properties } from "@/data/properties";

export default function FeaturedPropertiesSection() {
  const featured = properties.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Featured Properties" title="Explore Exclusive Listings" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {featured.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="mt-6">
        <Link href="/properties" className="rounded-xl px-5 py-3 min-h-12 font-semibold bg-brand text-white inline-block">
          View all
        </Link>
      </div>
    </section>
  );
}
