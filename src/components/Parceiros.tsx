import { Scale, Heart, Users, Building, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const parceiros = [
  {
    categoria: "Advogados Parceiros",
    icon: Scale,
    lista: [
      { 
        nome: "Dra. Ináh Confolonieri", 
        especialidade: "Defesa de Homens e Pais", 
        localizacao: "BA",
        whatsapp: "5573998101900",
        tiktok: "https://www.tiktok.com/@advogadaonline"
      },
      { 
        nome: "Dra. Jamily Wenceslau", 
        especialidade: "Direito de Família", 
        localizacao: "SP",
        whatsapp: "5511910247841",
        tiktok: "https://www.tiktok.com/@jamilywenceslau"
      },
      { 
        nome: "Dra. Tatiane", 
        especialidade: "Advogada para Homens", 
        localizacao: "RS",
        whatsapp: "5551984938082",
        tiktok: "https://www.tiktok.com/@tatiane_advparahomens"
      },
    ],
  },
  {
    categoria: "Psicólogos e Terapeutas",
    icon: Heart,
    lista: [
      { nome: "Psicóloga Maya", especialidade: "Valores Acessíveis", localizacao: "Goiânia, GO", whatsapp: "5562999999999" },
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
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">{item.nome}</h4>
                      {"tiktok" in item && item.tiktok && (
                        <a
                          href={item.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-secondary hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          TikTok
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-secondary">{item.especialidade}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.localizacao}</p>
                    
                    {"whatsapp" in item && item.whatsapp && (
                      <a
                        href={`https://wa.me/${item.whatsapp}?text=Olá! Vim pelo SOS Homem e gostaria de mais informações.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-xs font-medium transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Chamar no WhatsApp
                      </a>
                    )}
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
