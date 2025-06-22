import AgencySection from "../components/agencySection";
import BenefitsSection from "../components/benefitsSection";
import FAQSection from "../components/faqSection";
import CTASection from "../components/footerSection";
import PayAndGetStarted from "../components/getStarted";
import Hero from "../components/hero";
import PortfolioSection from "../components/portFolio";
import PricingSection from "../components/pricingSection";
import TestimonialsSection from "../components/reviewSection";

import ServicesSection from "../components/serviceSection";
import LogoCarousel from "../components/socialCorosal";



export default function Home() {
  return (
    <div>
      <Hero/>
      <AgencySection/>
      <LogoCarousel/>
      <PayAndGetStarted/>
      <PortfolioSection/>
      <BenefitsSection/>
      <ServicesSection/>
      <PricingSection/>
      <FAQSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
