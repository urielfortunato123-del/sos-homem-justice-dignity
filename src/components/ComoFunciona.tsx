import { MessageCircle, UserCheck, HeartHandshake, Users } from "lucide-react";

const passos = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Você nos procura",
    description: "Entre em contato pelo chat, telefone ou formulário. É rápido, sigiloso e gratuito.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Escuta inicial",
    description: "Um profissional acolhe sua história com respeito, sem julgamentos prévios.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Orientação especializada",
    description: "Você recebe orientação jurídica e apoio psicológico de acordo com sua situação.",
  },
  {
    number: "04",
    icon: Users,
    title: "Rede de apoio",
    description: "É encaminhado para redes de apoio, defensoria ou serviços especializados se necessário.",
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-4">
            Processo Simples
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um fluxo simples e acolhedor para você receber o apoio que precisa
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-secondary/30 hidden md:block" />
          
          <div className="space-y-8 md:space-y-0">
            {passos.map((passo, index) => (
              <div
                key={index}
                className={`animate-fade-up relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                  <div className={`p-6 rounded-2xl bg-card border border-border hover:shadow-elevated transition-all duration-500 ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  } max-w-md`}>
                    <span className="text-5xl font-display font-bold text-secondary/30 block mb-2">
                      {passo.number}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {passo.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {passo.description}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-secondary flex items-center justify-center shadow-glow z-10">
                  <passo.icon className="w-7 h-7 text-secondary" />
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
