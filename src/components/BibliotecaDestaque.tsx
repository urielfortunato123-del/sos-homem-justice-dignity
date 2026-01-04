import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scale, Download, FileText, ArrowRight, BookOpen } from "lucide-react";

const BibliotecaDestaque = () => {
  const handleDownload = () => {
    const docUrl = "/documentos/Anteprojeto-Lei-Programa-SOS-Homem.docx";
    const link = document.createElement("a");
    link.href = docUrl;
    link.download = "Anteprojeto-Lei-Programa-SOS-Homem.docx";
    link.click();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Scale className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Biblioteca Jurídica</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Anteprojeto de Lei
                <span className="block text-primary">Programa SOS Homem</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Documento cidadão e institucional para criação de políticas públicas 
                que garantam proteção equilibrada a todas as vítimas de violência, 
                independentemente de gênero.
              </p>

              <ul className="space-y-3">
                {[
                  "Proteção contra violência psicológica",
                  "Defesa do direito à honra e imagem",
                  "Orientação jurídica preventiva",
                  "Base para proposição legislativa",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={handleDownload} size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Baixar Documento
                </Button>
                <Link to="/biblioteca-juridica">
                  <Button variant="outline" size="lg" className="gap-2">
                    Ver Biblioteca Completa
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card Visual */}
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl relative z-10">
                {/* Ícone do documento */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex flex-col items-center justify-center shadow-lg relative">
                    <FileText className="h-12 w-12 text-white" />
                    <span className="text-white text-xs font-bold mt-2">.DOCX</span>
                    {/* Ribbon */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                      <BookOpen className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="font-bold text-lg text-foreground">
                    Programa Nacional de Proteção
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Escuta, Prevenção e Defesa do Homem em Situação de 
                    Violência Psicológica, Social e Digital
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      Uso público
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      Institucional
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      Gratuito
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm italic text-muted-foreground">
                    "Dignidade não tem gênero. Justiça não pode ser seletiva."
                  </p>
                </div>
              </div>

              {/* Decoração atrás do card */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BibliotecaDestaque;
