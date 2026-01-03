import { Headphones, Scale, Brain, ShieldCheck } from "lucide-react";

const pilares = [
  {
    icon: Headphones,
    title: "Escuta sem Julgamento",
    description: "Atendimento humano, respeitoso e sigiloso. Você pode falar sem medo de ser ridicularizado ou invalidado.",
    delay: "0s",
  },
  {
    icon: Scale,
    title: "Orientação Jurídica",
    description: "Explicação clara dos seus direitos. Orientação sobre o que fazer e encaminhamento para defensoria ou advogados.",
    delay: "0.1s",
  },
  {
    icon: Brain,
    title: "Apoio Psicológico",
    description: "Acolhimento emocional imediato com foco em estabilização, preservação da saúde mental e reconstrução.",
    delay: "0.2s",
  },
  {
    icon: ShieldCheck,
    title: "Proteção Legal",
    description: "Defesa do seu direito à ampla defesa, contraditório e orientação sobre documentação e provas.",
    delay: "0.3s",
  },
];

const Pilares = () => {
  return (
    <section id="pilares" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-4">
            Nossa Atuação
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Os Quatro Pilares
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atuamos em frentes complementares para oferecer proteção integral
          </p>
        </div>

        {/* Pilares grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((pilar, index) => (
            <div
              key={index}
              className="animate-fade-up group relative p-8 rounded-2xl bg-card-gradient border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-elevated"
              style={{ animationDelay: pilar.delay }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <pilar.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {pilar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pilar.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 transform rotate-45 translate-x-10 -translate-y-10 group-hover:bg-secondary/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pilares;
