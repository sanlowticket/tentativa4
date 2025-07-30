import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import TargetAudienceSection from "@/components/target-audience-section";
import CategoriesSection from "@/components/categories-section";
import BonusSection from "@/components/bonus-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import CTAButton from "@/components/cta-button";
import PurchaseNotifications from "@/components/purchase-notifications";

export default function Home() {
  return (
    <>
      <Header />
      <PurchaseNotifications />
      <HeroSection />
      <BenefitsSection />
      
      {/* CTA 1 - Acima da seção "Para quem é este produto" */}
      <CTAButton />
      
      <TargetAudienceSection />
      <CategoriesSection />
      
      {/* CTA 2 - Acima da seção "Galeria de inspirações" */}
      <CTAButton />
      
      <GallerySection />
      
      {/* CTA 3 - Acima da seção "7 bônus exclusivos" */}
      <CTAButton />
      
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      
      {/* CTA 4 - Acima do rodapé */}
      <CTAButton />
      
      {/* Rodapé simples */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-300">
            &copy; 2025 Moldes Pet. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
