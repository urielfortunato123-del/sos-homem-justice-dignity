import { Quote } from "lucide-react";

const depoimentos = [
  {
    texto: "Depois de anos sofrendo em silêncio, finalmente encontrei apoio. Hoje tenho a guarda compartilhada dos meus filhos e reconstruí minha vida.",
    nome: "Carlos M.",
    idade: 42,
    situacao: "Guarda compartilhada",
  },
  {
    texto: "Achei que ninguém acreditaria em mim. O SOS Homem me ajudou a entender meus direitos e a sair de um relacionamento abusivo.",
    nome: "Roberto S.",
    idade: 35,
    situacao: "Violência doméstica",
  },
  {
    texto: "A orientação jurídica foi essencial. Consegui reverter uma acusação falsa e provar minha inocência. Eternamente grato.",
    nome: "Fernando L.",
    idade: 38,
    situacao: "Acusação falsa",
  },
  {
    texto: "Quando pensei em desistir de tudo, encontrei acolhimento aqui. A terapia e o grupo de apoio salvaram minha vida.",
    nome: "André P.",
    idade: 29,
    situacao: "Saúde mental",
  },
];

const Depoimentos = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Histórias Reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vozes que Superaram
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Depoimentos anônimos de homens que encontraram força para recomeçar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-secondary/30 mb-4" />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{depoimento.texto}"
              </p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-semibold text-foreground">{depoimento.nome}</p>
                  <p className="text-muted-foreground text-sm">{depoimento.idade} anos</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {depoimento.situacao}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12">
          * Nomes alterados para preservar a privacidade
        </p>
      </div>
    </section>
  );
};

export default Depoimentos;
