import { TrendingUp, Users, Heart, Scale } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "78%",
    label: "dos homens não denunciam violência doméstica",
    source: "DataSenado, 2022",
  },
  {
    icon: Heart,
    value: "4x",
    label: "mais homens cometem suicídio que mulheres",
    source: "OMS, 2023",
  },
  {
    icon: Scale,
    value: "97%",
    label: "das guardas unilaterais são dadas às mães",
    source: "IBGE, 2021",
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "aumento em denúncias de alienação parental",
    source: "CNJ, 2023",
  },
];

const Estatisticas = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            Dados Importantes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            A Realidade em Números
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Estatísticas que mostram a importância de apoiar homens em situações de vulnerabilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <p className="text-primary-foreground/90 font-medium mb-2">
                {stat.label}
              </p>
              <p className="text-primary-foreground/60 text-sm">
                {stat.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estatisticas;
