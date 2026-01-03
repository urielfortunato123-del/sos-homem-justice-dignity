import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pilares from "@/components/Pilares";
import OQueDefendemos from "@/components/OQueDefendemos";
import ComoFunciona from "@/components/ComoFunciona";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pilares />
      <OQueDefendemos />
      <ComoFunciona />
      <CTA />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;
