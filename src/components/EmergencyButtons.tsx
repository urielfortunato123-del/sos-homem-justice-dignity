import { Phone, Heart, Shield, Flame, HeadphonesIcon } from "lucide-react";

const emergencyNumbers = [
  {
    number: "188",
    name: "CVV - Apoio Emocional",
    description: "Prevenção ao suicídio 24h",
    icon: Heart,
    color: "bg-amber-500 hover:bg-amber-600",
    priority: true,
  },
  {
    number: "190",
    name: "Polícia Militar",
    description: "Emergência policial",
    icon: Shield,
    color: "bg-primary hover:bg-primary/90",
  },
  {
    number: "192",
    name: "SAMU",
    description: "Emergência médica",
    icon: HeadphonesIcon,
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    number: "193",
    name: "Bombeiros",
    description: "Emergência e resgate",
    icon: Flame,
    color: "bg-orange-500 hover:bg-orange-600",
  },
];

const EmergencyButtons = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            Ligação de Emergência
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Precisa de Ajuda <span className="text-primary">Agora?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Se você está em crise ou precisa de apoio imediato, ligue para um destes números. 
            Você não está sozinho.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {emergencyNumbers.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.number}
                href={`tel:${item.number}`}
                className={`${item.color} rounded-2xl p-6 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl group ${
                  item.priority ? "ring-2 ring-amber-300 ring-offset-2 ring-offset-background" : ""
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-3xl md:text-4xl font-bold block">{item.number}</span>
                    <span className="text-sm font-medium opacity-90 block mt-1">{item.name}</span>
                    <span className="text-xs opacity-75 block">{item.description}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs opacity-75">
                    <Phone className="w-3 h-3" />
                    <span>Toque para ligar</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Atendimento Psicológico Acessível
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Oferecemos parceria com profissionais de saúde mental com valores acessíveis 
              para homens em situação de vulnerabilidade emocional.
            </p>
            <p className="text-xs text-muted-foreground">
              Em breve: contato de psicóloga especializada disponível
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyButtons;
