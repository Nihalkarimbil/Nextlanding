import AgencySection from "../components/agencySection";
import PayAndGetStarted from "../components/getStarted";
import Hero from "../components/hero";
import PortfolioSection from "../components/portFolio";
import LogoCarousel from "../components/socialCorosal";



export default function Home() {
  return (
    <div>
      <Hero/>
      <AgencySection/>
      <LogoCarousel/>
      <PayAndGetStarted/>
      <PortfolioSection/>
      
    </div>
  );
}
