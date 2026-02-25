import SectionTitle from "@/components/shared/SectionTitle";
import TestimonialCard from "@/components/shared/TestimonialCard";

const testimonials = [
  {
    quote: "From first visit to closing, their process was smooth and professional.",
    name: "Sophia Lane",
    role: "Home Buyer"
  },
  {
    quote: "They improved occupancy and reduced maintenance response times significantly.",
    name: "Michael Hart",
    role: "Property Owner"
  },
  {
    quote: "Clear communication, strong market advice and exceptional execution.",
    name: "Amina Yusuf",
    role: "Investor"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Testimonials" title="What Clients Say" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} quote={item.quote} name={item.name} role={item.role} />
        ))}
      </div>
    </section>
  );
}
