import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section id="contato" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <h2 className="animate-fade-up font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Precisando de ajuda?
            <br />
            <span className="text-gradient">Estamos aqui.</span>
          </h2>
          
          <p className="animate-fade-up text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto" style={{ animationDelay: '0.1s' }}>
            Atendimento 24 horas, sigiloso e gratuito. O primeiro passo é o mais importante.
          </p>

          {/* Contact options */}
          <div className="animate-fade-up grid sm:grid-cols-3 gap-4 mb-10" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full group"
              onClick={() => window.location.href = 'tel:188'}
            >
              <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
              Ligar Agora
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="w-full group"
              onClick={() => window.open('https://wa.me/5562992867271?text=Olá,%20preciso%20de%20ajuda', '_blank')}
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              Chat Online
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="w-full group"
              onClick={() => window.location.href = 'mailto:soshomem@soshomem.com.br?subject=Preciso%20de%20Ajuda'}
            >
              <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              Email
            </Button>
          </div>

          {/* Trust message */}
          <p className="animate-fade-up text-primary-foreground/60 text-sm" style={{ animationDelay: '0.3s' }}>
            Todas as conversas são confidenciais. Sua privacidade é nossa prioridade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
