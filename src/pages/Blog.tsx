import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExit from "@/components/QuickExit";

const posts = [
  {
    id: 1,
    titulo: "Nova Lei de Guarda Compartilhada: O que muda em 2024",
    resumo: "Entenda as mudanças na legislação sobre guarda compartilhada e como elas afetam os direitos dos pais.",
    data: "15 Dez 2023",
    categoria: "Legislação",
    imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    titulo: "Como Identificar Alienação Parental: Sinais e Ações",
    resumo: "Aprenda a reconhecer os sinais de alienação parental e saiba como agir para proteger o vínculo com seus filhos.",
    data: "10 Dez 2023",
    categoria: "Direito de Família",
    imagem: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    titulo: "Saúde Mental Masculina: Quebrando o Tabu",
    resumo: "Por que homens têm dificuldade em buscar ajuda psicológica e como superar essa barreira.",
    data: "5 Dez 2023",
    categoria: "Saúde Mental",
    imagem: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    titulo: "Pensão Alimentícia: Direitos e Deveres do Alimentante",
    resumo: "Guia completo sobre como funciona a pensão alimentícia, cálculos e possibilidades de revisão.",
    data: "1 Dez 2023",
    categoria: "Legislação",
    imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    titulo: "Violência Doméstica Contra Homens: Uma Realidade Silenciada",
    resumo: "Dados, depoimentos e recursos para homens vítimas de violência doméstica.",
    data: "25 Nov 2023",
    categoria: "Violência Doméstica",
    imagem: "https://images.unsplash.com/photo-1495462911434-be47104d70fa?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    titulo: "Como se Preparar para uma Audiência de Guarda",
    resumo: "Dicas práticas para pais que enfrentarão audiências judiciais sobre guarda dos filhos.",
    data: "20 Nov 2023",
    categoria: "Direito de Família",
    imagem: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=600&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <QuickExit />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium mb-4">
              Blog & Notícias
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Informação e Conhecimento
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Artigos, atualizações sobre legislação e conteúdo educativo sobre direitos masculinos
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.imagem}
                    alt={post.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary/10 text-secondary text-xs font-medium">
                      <Tag className="w-3 h-3" />
                      {post.categoria}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      {post.data}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.titulo}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.resumo}
                  </p>
                  <button className="inline-flex items-center gap-2 text-secondary font-medium text-sm hover:gap-3 transition-all">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Mais artigos em breve. Assine nossa{" "}
              <Link to="/#newsletter" className="text-secondary hover:underline font-medium">
                newsletter
              </Link>{" "}
              para receber atualizações.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
