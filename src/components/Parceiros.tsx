import { Scale, Heart, Users, Building } from "lucide-react";

const parceiros = [
  {
    categoria: "Advogados Parceiros",
    icon: Scale,
    lista: [
      { nome: "Dr. Ricardo Mendes", especialidade: "Direito de Família", localizacao: "São Paulo, SP" },
      { nome: "Dra. Ana Paula Costa", especialidade: "Direito Criminal", localizacao: "Rio de Janeiro, RJ" },
      { nome: "Dr. Fernando Lima", especialidade: "Direito Civil", localizacao: "Belo Horizonte, MG" },
    ],
  },
  {
    categoria: "Psicólogos e Terapeutas",
    icon: Heart,
    lista: [
      { nome: "Psicóloga Maya", especialidade: "Valores Acessíveis", localizacao: "Goiânia, GO" },
      { nome: "Dr. Paulo Henrique", especialidade: "Terapia Masculina", localizacao: "São Paulo, SP" },
      { nome: "Dra. Carla Santos", especialidade: "Trauma e Recuperação", localizacao: "Curitiba, PR" },
    ],
  },
  {
    categoria: "ONGs e Associações",
    icon: Users,
    lista: [
      { nome: "Instituto Noos", especialidade: "Grupos Reflexivos", localizacao: "Nacional" },
      { nome: "Associação de Pais Separados", especialidade: "Guarda Compartilhada", localizacao: "Nacional" },
      { nome: "ABRAPAI", especialidade: "Alienação Parental", localizacao: "Nacional" },
    ],
  },
  {
    categoria: "Instituições Públicas",
    icon: Building,
    lista: [
      { nome: "Defensoria Pública", especialidade: "Assistência Jurídica Gratuita", localizacao: "Todos os Estados" },
      { nome: "CRAS", especialidade: "Assistência Social", localizacao: "Todos os Municípios" },
      { nome: "CAPS", especialidade: "Saúde Mental", localizacao: "Todos os Municípios" },
    ],
  },
];

const Parceiros = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossa Rede
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parceiros e Colaboradores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissionais e organizações comprometidos com a causa masculina
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {parceiros.map((categoria, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <categoria.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {categoria.categoria}
                </h3>
              </div>

              <div className="space-y-4">
                {categoria.lista.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <h4 className="font-semibold text-foreground">{item.nome}</h4>
                    <p className="text-sm text-secondary">{item.especialidade}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.localizacao}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Quer ser um parceiro do SOS Homem?{" "}
            <a href="#contato" className="text-secondary hover:underline font-medium">
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
