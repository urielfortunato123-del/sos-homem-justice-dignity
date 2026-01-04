import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmergencyButtons from "@/components/EmergencyButtons";
import Pilares from "@/components/Pilares";
import OQueDefendemos from "@/components/OQueDefendemos";
import ComoFunciona from "@/components/ComoFunciona";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EmergencyButtons />
      <Pilares />
      <OQueDefendemos />
      <ComoFunciona />
      <FAQ />
      <CTA />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;
