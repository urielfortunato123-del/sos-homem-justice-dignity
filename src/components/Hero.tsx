import { Button } from "@/components/ui/button";
import { Shield, Heart, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        {/* Badge */}
        <div className="animate-fade-up mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium backdrop-blur-sm border border-primary-foreground/20">
            <Shield className="w-4 h-4" />
            Proteção Integral ao Homem
          </span>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-up font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 max-w-4xl leading-tight" style={{ animationDelay: '0.1s' }}>
          Você não está{" "}
          <span className="text-gradient">sozinho</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed font-body" style={{ animationDelay: '0.2s' }}>
          O SOS Homem é um programa de acolhimento, orientação jurídica, apoio psicológico e proteção para homens em situação de vulnerabilidade.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="lg" className="group">
            <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
            Preciso de Ajuda
          </Button>
          <Button variant="heroOutline" size="lg">
            <Heart className="w-5 h-5" />
            Quero Apoiar
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-up mt-16 grid grid-cols-3 gap-8 md:gap-16 text-primary-foreground/70" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">24h</p>
            <p className="text-sm mt-1">Atendimento</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">100%</p>
            <p className="text-sm mt-1">Sigiloso</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">Gratuito</p>
            <p className="text-sm mt-1">Sempre</p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
