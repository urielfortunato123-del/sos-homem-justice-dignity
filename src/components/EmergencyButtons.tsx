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
            <a
              href="https://wa.me/5562992867271?text=Olá,%20vim%20pelo%20SOS%20Homem%20e%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Psicóloga Maya — Valores Acessíveis
            </a>
            <p className="text-xs text-muted-foreground mt-3">
              Atendimento especializado para homens em situação de vulnerabilidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyButtons;
