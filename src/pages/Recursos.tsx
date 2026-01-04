import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  Scale, 
  Heart, 
  Users, 
  Shield,
  ArrowLeft,
  Gavel,
  Baby,
  Home,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const recursos = [
  {
    categoria: "Direitos Legais",
    icon: Scale,
    items: [
      {
        titulo: "Guia Completo: Guarda Compartilhada",
        descricao: "Entenda seus direitos como pai e como funciona a guarda compartilhada no Brasil.",
        tipo: "PDF",
        link: "#"
      },
      {
        titulo: "Alienação Parental: O Que Fazer",
        descricao: "Manual prático sobre como identificar e combater a alienação parental.",
        tipo: "PDF",
        link: "#"
      },
      {
        titulo: "Pensão Alimentícia: Direitos e Deveres",
        descricao: "Tudo sobre cálculo, revisão e seus direitos quanto à pensão.",
        tipo: "Artigo",
        link: "#"
      }
    ]
  },
  {
    categoria: "Saúde Mental",
    icon: Heart,
    items: [
      {
        titulo: "Depressão Masculina: Sinais e Ajuda",
        descricao: "Reconheça os sinais e saiba onde buscar apoio profissional.",
        tipo: "Artigo",
        link: "#"
      },
      {
        titulo: "Lidando com o Divórcio",
        descricao: "Estratégias emocionais para superar o processo de separação.",
        tipo: "Guia",
        link: "#"
      },
      {
        titulo: "Paternidade e Bem-Estar",
        descricao: "Como manter sua saúde mental enquanto luta por seus direitos.",
        tipo: "Vídeo",
        link: "#"
      }
    ]
  },
  {
    categoria: "Violência Doméstica",
    icon: Shield,
    items: [
      {
        titulo: "Homens Também São Vítimas",
        descricao: "Entenda que violência doméstica não tem gênero e como buscar ajuda.",
        tipo: "Artigo",
        link: "#"
      },
      {
        titulo: "Como Denunciar Agressões",
        descricao: "Passo a passo para registrar ocorrência e buscar proteção legal.",
        tipo: "Guia",
        link: "#"
      },
      {
        titulo: "Rede de Apoio Masculina",
        descricao: "Onde encontrar suporte e acolhimento como homem vítima de violência.",
        tipo: "Lista",
        link: "#"
      }
    ]
  },
  {
    categoria: "Paternidade",
    icon: Baby,
    items: [
      {
        titulo: "Direitos do Pai na Maternidade",
        descricao: "Seus direitos durante a gestação, parto e pós-parto.",
        tipo: "Artigo",
        link: "#"
      },
      {
        titulo: "Licença Paternidade Estendida",
        descricao: "Como solicitar e empresas que oferecem benefícios estendidos.",
        tipo: "Guia",
        link: "#"
      },
      {
        titulo: "Pai Solo: Manual de Sobrevivência",
        descricao: "Dicas práticas para pais que criam filhos sozinhos.",
        tipo: "E-book",
        link: "#"
      }
    ]
  }
];

const linksUteis = [
  {
    nome: "Defensoria Pública",
    descricao: "Assistência jurídica gratuita",
    icon: Gavel,
    url: "https://www.defensoria.sp.def.br/"
  },
  {
    nome: "CVV - Centro de Valorização da Vida",
    descricao: "Apoio emocional 24h - Ligue 188",
    icon: Heart,
    url: "https://www.cvv.org.br/"
  },
  {
    nome: "IBDFAM",
    descricao: "Instituto Brasileiro de Direito de Família",
    icon: Users,
    url: "https://ibdfam.org.br/"
  },
  {
    nome: "Conselho Nacional de Justiça",
    descricao: "Informações sobre processos de família",
    icon: Scale,
    url: "https://www.cnj.jus.br/"
  }
];

const Recursos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Recursos e Materiais
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Conteúdos educativos sobre direitos masculinos, saúde mental, paternidade 
            e orientação jurídica. Conhecimento é poder.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-16">
        {/* Categorias de Recursos */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Materiais por Categoria
          </h2>
          
          <div className="grid gap-8">
            {recursos.map((categoria) => (
              <div key={categoria.categoria} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <categoria.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {categoria.categoria}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {categoria.items.map((item) => (
                    <Card key={item.titulo} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg leading-tight">
                            {item.titulo}
                          </CardTitle>
                          <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                            {item.tipo}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">
                          {item.descricao}
                        </CardDescription>
                        <Button variant="outline" size="sm" className="w-full">
                          {item.tipo === "PDF" || item.tipo === "E-book" ? (
                            <>
                              <Download className="w-4 h-4 mr-2" />
                              Baixar
                            </>
                          ) : item.tipo === "Vídeo" ? (
                            <>
                              <Video className="w-4 h-4 mr-2" />
                              Assistir
                            </>
                          ) : (
                            <>
                              <BookOpen className="w-4 h-4 mr-2" />
                              Ler
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Links Úteis */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Links Úteis
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {linksUteis.map((link) => (
              <a
                key={link.nome}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full hover:shadow-md hover:border-secondary/30 transition-all">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <link.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                      {link.nome}
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.descricao}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Precisa de Ajuda Agora?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Nossa equipe está pronta para oferecer suporte jurídico e emocional. 
            Não enfrente isso sozinho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/#contato">Falar com Especialista</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://wa.me/5562992867271?text=Olá,%20vim%20pelo%20SOS%20Homem%20e%20preciso%20de%20ajuda."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Direto
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-8">
        <div className="container px-4 text-center">
          <Link to="/" className="text-secondary hover:text-secondary/80 font-medium">
            ← Voltar para SOS Homem
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Recursos;
