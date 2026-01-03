import { Check, X } from "lucide-react";

const defesas = [
  "Presunção de inocência real",
  "Direito à escuta justa",
  "Direito à ampla defesa",
  "Direito à integridade psicológica",
  "Direito à dignidade social",
  "Direito ao vínculo parental justo",
  "Direito à reparação em caso de acusação falsa",
];

const naoSomos = [
  "Não somos contra mulheres",
  "Não negamos violência real",
  "Não estimulamos impunidade",
  "Não promovemos discurso de ódio",
  "Não somos ideologia",
];

const somos = [
  "Somos justiça",
  "Somos equilíbrio",
  "Somos humanidade",
  "Somos proteção institucional",
];

const OQueDefendemos = () => {
  return (
    <section id="direitos" className="py-24 bg-muted/30">
      <div className="container px-4">
        {/* Main section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left - Direitos */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Direitos Defendidos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              O que defendemos
            </h2>
            <div className="space-y-4">
              {defesas.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-secondary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - O que somos e não somos */}
          <div className="space-y-10">
            {/* O que NÃO somos */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                O que <span className="text-destructive">NÃO</span> somos
              </h3>
              <div className="space-y-3">
                {naoSomos.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <X className="w-5 h-5 text-destructive/70 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* O que SOMOS */}
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                O que <span className="text-gradient">SOMOS</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {somos.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-primary/5 border border-primary/10 text-center hover:bg-primary/10 transition-colors duration-300"
                  >
                    <span className="font-display font-semibold text-foreground">
                      {item.replace("Somos ", "")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="animate-fade-up max-w-4xl mx-auto text-center p-10 rounded-3xl bg-primary/5 border border-primary/10" style={{ animationDelay: '0.4s' }}>
          <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-4">
            "Proteger o homem não é retroceder. É corrigir o rumo. É lembrar que justiça sem equilíbrio não é justiça — é força."
          </blockquote>
          <p className="text-muted-foreground font-medium">
            O SOS Homem não pede privilégio. Ele exige equidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OQueDefendemos;
