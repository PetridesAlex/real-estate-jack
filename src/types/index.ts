export type PropertyType = "Apartment" | "Villa" | "Office" | "Penthouse";

export type Agent = {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
};

export type Property = {
  id: string;
  title: string;
  price: number;
  location: string;
  type: PropertyType;
  beds: number;
  baths: number;
  areaSqm: number;
  images: string[];
  description: string;
  amenities: string[];
  agentId: string;
  featured: boolean;
  createdAt: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};
