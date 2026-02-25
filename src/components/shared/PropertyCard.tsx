import Link from "next/link";
import Image from "next/image";
import { Property } from "@/types";
import { formatCurrency } from "@/utils/format";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} aria-label={`Open property ${property.title}`}>
      <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card h-full">
        <Image src={property.images[0]} alt={property.title} width={800} height={500} className="w-full h-52 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-slate-900">{property.title}</h3>
          <p className="text-slate-500 mt-1">
            {property.location} · {property.type}
          </p>
          <p className="text-brand text-xl font-bold mt-2">{formatCurrency(property.price)}</p>
          <p className="text-slate-600 mt-2">
            {property.beds > 0 ? `${property.beds} Beds · ` : ""}
            {property.baths} Baths · {property.areaSqm} sqm
          </p>
        </div>
      </article>
    </Link>
  );
}
