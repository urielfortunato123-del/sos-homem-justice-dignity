import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmergencyButtons from "@/components/EmergencyButtons";
import Pilares from "@/components/Pilares";
import OQueDefendemos from "@/components/OQueDefendemos";
import ComoFunciona from "@/components/ComoFunciona";
import Estatisticas from "@/components/Estatisticas";
import Depoimentos from "@/components/Depoimentos";
import MapaApoio from "@/components/MapaApoio";
import CalculadoraPensao from "@/components/CalculadoraPensao";
import Parceiros from "@/components/Parceiros";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Doacoes from "@/components/Doacoes";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import QuickExit from "@/components/QuickExit";
import SOSButton from "@/components/SOSButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <QuickExit />
      <SOSButton />
      <Hero />
      <EmergencyButtons />
      <Estatisticas />
      <Pilares />
      <OQueDefendemos />
      <ComoFunciona />
      <Depoimentos />
      <MapaApoio />
      <CalculadoraPensao />
      <Parceiros />
      <FAQ />
      <Newsletter />
      <Doacoes />
      <CTA />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;
