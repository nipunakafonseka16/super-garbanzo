import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import ProductShowcase from "@/components/ProductShowcase";
import TechnologySection from "@/components/TechnologySection";
import PartnerSection from "@/components/PartnerSection";
import SMBSection from "@/components/SMBSection";
import PurposeSection from "@/components/PurposeSection";
import InsideCiscoSection from "@/components/InsideCiscoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuickLinksSection />
      <ProductShowcase />
      <TechnologySection />
      <PartnerSection />
      <SMBSection />
      <PurposeSection />
      <InsideCiscoSection />
      <Footer />
    </div>
  );
}
