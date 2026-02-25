import { Property } from "@/types";

export const properties: Property[] = [
  {
    id: "p1",
    title: "Skyline Luxury Apartment",
    price: 580000,
    location: "Limassol",
    type: "Apartment",
    beds: 3,
    baths: 2,
    areaSqm: 145,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600"
    ],
    description: "Modern city apartment with premium finishes and panoramic skyline views.",
    amenities: ["Gym", "Pool", "Parking", "24/7 Security", "Concierge"],
    agentId: "a1",
    featured: true,
    createdAt: "2026-01-10"
  },
  {
    id: "p2",
    title: "Palm View Villa",
    price: 1250000,
    location: "Paphos",
    type: "Villa",
    beds: 5,
    baths: 4,
    areaSqm: 360,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
    ],
    description: "Private villa featuring a landscaped garden and expansive open-plan living.",
    amenities: ["Garden", "Garage", "Private Pool", "Home Office"],
    agentId: "a3",
    featured: true,
    createdAt: "2026-01-22"
  },
  {
    id: "p3",
    title: "Harbor District Penthouse",
    price: 980000,
    location: "Larnaka",
    type: "Penthouse",
    beds: 4,
    baths: 3,
    areaSqm: 220,
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600"
    ],
    description: "High-floor penthouse with floor-to-ceiling windows and sea-facing terrace.",
    amenities: ["Terrace", "Smart Home", "2 Parking Spots", "Storage Room"],
    agentId: "a1",
    featured: true,
    createdAt: "2026-01-30"
  },
  {
    id: "p4",
    title: "Executive Office Suite",
    price: 420000,
    location: "Nicosia",
    type: "Office",
    beds: 0,
    baths: 2,
    areaSqm: 180,
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1600"
    ],
    description: "Grade-A office suite in a prime commercial tower with concierge lobby.",
    amenities: ["Meeting Rooms", "Reception", "High-Speed Internet"],
    agentId: "a2",
    featured: false,
    createdAt: "2026-02-01"
  },
  {
    id: "p5",
    title: "City Garden Apartment",
    price: 495000,
    location: "Limassol",
    type: "Apartment",
    beds: 2,
    baths: 2,
    areaSqm: 118,
    images: [
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1600",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600"
    ],
    description: "Bright apartment overlooking landscaped courtyards in a central location.",
    amenities: ["Gym", "Kids Area", "Parking"],
    agentId: "a2",
    featured: true,
    createdAt: "2026-02-03"
  },
  {
    id: "p6",
    title: "Riverside Family Villa",
    price: 890000,
    location: "Famaqusta",
    type: "Villa",
    beds: 4,
    baths: 3,
    areaSqm: 280,
    images: [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1600",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600"
    ],
    description: "Family villa with private garden, modern kitchen and elegant interiors.",
    amenities: ["Private Garden", "Maid Room", "2-Car Garage"],
    agentId: "a3",
    featured: false,
    createdAt: "2026-02-05"
  }
];
