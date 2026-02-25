import { Property } from "@/types";

export type PropertyFilters = {
  location: string;
  type: string;
  beds: string;
  maxPrice: string;
  sort: "newest" | "priceAsc" | "priceDesc";
};

export const defaultFilters: PropertyFilters = {
  location: "All",
  type: "All",
  beds: "Any",
  maxPrice: "Any",
  sort: "newest"
};

export const applyPropertyFilters = (list: Property[], filters: PropertyFilters) => {
  let output = [...list];

  if (filters.location !== "All") output = output.filter((p) => p.location === filters.location);
  if (filters.type !== "All") output = output.filter((p) => p.type === filters.type);
  if (filters.beds !== "Any") output = output.filter((p) => p.beds >= Number(filters.beds));
  if (filters.maxPrice !== "Any") output = output.filter((p) => p.price <= Number(filters.maxPrice));

  if (filters.sort === "newest") output.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
  if (filters.sort === "priceAsc") output.sort((a, b) => a.price - b.price);
  if (filters.sort === "priceDesc") output.sort((a, b) => b.price - a.price);

  return output;
};
