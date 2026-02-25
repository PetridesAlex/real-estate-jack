import PageContainer from "@/components/layout/PageContainer";
import AgentsSection from "@/components/sections/AgentsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import ContactCTASection from "@/components/sections/ContactCTASection";
import FAQSection from "@/components/sections/FAQSection";
import FeaturedPropertiesSection from "@/components/sections/FeaturedPropertiesSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustSection from "@/components/sections/TrustSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PageContainer>
      <StatsSection />
      <FeaturedPropertiesSection />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
      <AgentsSection />
      <FAQSection />
      <NewsletterSection />
      <BlogPreviewSection />
      <ContactCTASection />
      </PageContainer>
    </>
  );
}
