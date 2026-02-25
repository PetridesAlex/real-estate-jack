"use client";

import { useMemo, useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import PrimaryButton from "@/components/shared/PrimaryButton";
import PropertyCard from "@/components/shared/PropertyCard";
import SectionTitle from "@/components/shared/SectionTitle";
import Select from "@/components/shared/Select";
import { properties } from "@/data/properties";
import { useBreakpoints } from "@/utils/breakpoints";
import { applyPropertyFilters, defaultFilters, PropertyFilters } from "@/utils/propertyFilters";

function Filters({
  filters,
  setFilters
}: {
  filters: PropertyFilters;
  setFilters: (filters: PropertyFilters) => void;
}) {
  const locations = ["All", ...Array.from(new Set(properties.map((property) => property.location)))];
  return (
    <div>
      <Select
        label="Location"
        value={filters.location}
        onChange={(value) => setFilters({ ...filters, location: value })}
        options={locations.map((location) => ({ label: location, value: location }))}
      />
      <Select
        label="Property Type"
        value={filters.type}
        onChange={(value) => setFilters({ ...filters, type: value })}
        options={["All", "Apartment", "Villa", "Office", "Penthouse"].map((type) => ({ label: type, value: type }))}
      />
      <Select
        label="Beds"
        value={filters.beds}
        onChange={(value) => setFilters({ ...filters, beds: value })}
        options={["Any", "1", "2", "3", "4", "5"].map((beds) => ({ label: beds, value: beds }))}
      />
      <Select
        label="Max Price"
        value={filters.maxPrice}
        onChange={(value) => setFilters({ ...filters, maxPrice: value })}
        options={[
          { label: "Any", value: "Any" },
          { label: "$500,000", value: "500000" },
          { label: "$800,000", value: "800000" },
          { label: "$1,200,000", value: "1200000" },
          { label: "$2,000,000", value: "2000000" }
        ]}
      />
      <Select
        label="Sort By"
        value={filters.sort}
        onChange={(value) => setFilters({ ...filters, sort: value as PropertyFilters["sort"] })}
        options={[
          { label: "Newest", value: "newest" },
          { label: "Price: Low to High", value: "priceAsc" },
          { label: "Price: High to Low", value: "priceDesc" }
        ]}
      />
    </div>
  );
}

export default function PropertiesPage() {
  const { isDesktop, columns } = useBreakpoints();
  const [filters, setFilters] = useState<PropertyFilters>(defaultFilters);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const filteredProperties = useMemo(() => applyPropertyFilters(properties, filters), [filters]);

  return (
    <PageContainer>
      <section className="mt-8">
        <SectionTitle eyebrow="Properties" title="Browse Properties" />

        {isDesktop ? (
          <div className="grid grid-cols-[300px_1fr] gap-4">
            <aside className="bg-white rounded-2xl border border-slate-100 p-4 h-fit">
              <Filters filters={filters} setFilters={setFilters} />
              <PrimaryButton variant="secondary" fullWidth onClick={() => setFilters(defaultFilters)}>
                Reset filters
              </PrimaryButton>
            </aside>
            <div className={`grid gap-3 ${columns === 3 ? "xl:grid-cols-3 md:grid-cols-2" : "md:grid-cols-2"}`}>
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <PrimaryButton onClick={() => setMobileFilterOpen(true)}>Open Filters</PrimaryButton>
            <div className={`grid gap-3 mt-4 ${columns > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {mobileFilterOpen ? (
              <div className="fixed inset-0 bg-black/30 z-50">
                <div className="ml-auto w-[86%] max-w-[380px] h-full bg-white p-4 overflow-auto">
                  <h3 className="text-2xl text-brand font-bold mb-4">Filters</h3>
                  <Filters filters={filters} setFilters={setFilters} />
                  <PrimaryButton fullWidth onClick={() => setMobileFilterOpen(false)}>
                    Apply filters
                  </PrimaryButton>
                  <div className="mt-3">
                    <PrimaryButton variant="secondary" fullWidth onClick={() => setFilters(defaultFilters)}>
                      Reset filters
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </section>
    </PageContainer>
  );
}
