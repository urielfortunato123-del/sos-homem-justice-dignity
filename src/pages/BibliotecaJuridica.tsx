import { ArrowLeft, Download, FileText, Scale, Shield, BookOpen, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BibliotecaJuridica = () => {
  const handleDownload = () => {
    // TODO: Substituir pelo link real do documento quando disponível
    const docUrl = "/documentos/anteprojeto-sos-homem.docx";
    const link = document.createElement("a");
    link.href = docUrl;
    link.download = "Anteprojeto-Lei-Programa-SOS-Homem.docx";
    link.click();
  };

  const usosMateriais = [
    { icon: BookOpen, text: "Estudados por cidadãos" },
    { icon: Scale, text: "Utilizados por advogados" },
    { icon: FileText, text: "Encaminhados a vereadores, deputados e comissões legislativas" },
    { icon: Shield, text: "Adaptados tecnicamente para proposição de Projetos de Lei" },
  ];

  const temasAbordados = [
    "Violência psicológica pós-relacionamento",
    "Perseguição indireta e digital",
    "Difamação reiterada",
    "Isolamento social provocado",
    "Abuso narrativo",
    "Violação de privacidade",
    "Ausência de canais de escuta para homens",
  ];

  const garantias = [
    "Não substitui a atuação de advogados ou parlamentares",
    "Não possui caráter acusatório",
    "Não expõe pessoas físicas",
    "Não trata de casos concretos",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                Biblioteca Jurídica & Institucional
              </h1>
              <p className="text-sm text-muted-foreground">Documentos públicos e educativos</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Introdução */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                📘 Biblioteca Jurídica & Institucional
              </CardTitle>
              <CardDescription className="text-base max-w-2xl mx-auto">
                Este espaço reúne documentos públicos, educativos e institucionais, voltados à proteção 
                da dignidade humana, à prevenção da violência psicológica, social e digital e ao 
                aperfeiçoamento do sistema de justiça.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {usosMateriais.map((uso, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                    <uso.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{uso.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sobre o Documento */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                ⚖️ Sobre este documento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                O <strong className="text-foreground">Anteprojeto de Lei — Programa SOS Homem</strong> é uma proposta 
                cidadã e institucional, construída a partir de fatos sociais recorrentes, amplamente 
                observados no Brasil contemporâneo, envolvendo:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-2">
                {temasAbordados.map((tema, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{tema}</span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">O documento não é um ataque, não é ideológico e não se dirige a casos individuais.</strong>
                </p>
                <p className="text-sm text-foreground">
                  <strong>Seu objetivo é:</strong> oferecer base técnica para a criação de políticas públicas 
                  e legislação que garantam proteção equilibrada a todas as vítimas de violência, 
                  independentemente de gênero.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Download do Documento */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-primary bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">📥 Download do documento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-background rounded-xl p-6 text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center">
                  <FileText className="h-10 w-10 text-red-500" />
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-foreground">
                    📄 Anteprojeto de Lei — Programa SOS Homem
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Programa Nacional de Proteção, Escuta, Prevenção e Defesa do Homem em Situação 
                    de Violência Psicológica, Social e Digital
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                  <span className="px-3 py-1 bg-muted rounded-full">Formato: Word (.docx)</span>
                  <span className="px-3 py-1 bg-muted rounded-full">Uso: Estudo e orientação jurídica</span>
                  <span className="px-3 py-1 bg-muted rounded-full">Autor: Anteprojeto cidadão</span>
                </div>

                <Button 
                  onClick={handleDownload} 
                  size="lg" 
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  <Download className="h-5 w-5" />
                  ⬇️ Baixar PDF
                </Button>

                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  <em>Finalidade: Estudo, orientação jurídica e proposição legislativa</em>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Observação Importante */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-amber-500/30 bg-amber-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <AlertCircle className="h-5 w-5" />
                📌 Observação Importante
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Este documento:</p>
              <ul className="space-y-2">
                {garantias.map((garantia, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500">✗</span>
                    <span className="text-muted-foreground">{garantia}</span>
                  </li>
                ))}
              </ul>
              <Separator className="my-4" />
              <p className="text-sm text-foreground">
                Trata-se de um <strong>anteprojeto cidadão</strong>, que pode ser livremente compartilhado, 
                adaptado tecnicamente e encaminhado ao poder público para fins legislativos.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Nota Legal */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-muted/30">
            <CardContent className="py-6">
              <p className="text-xs text-muted-foreground text-center italic">
                Este documento é um anteprojeto cidadão, sem caráter acusatório ou individual, 
                destinado à reflexão, debate e eventual proposição legislativa por representantes do poder público.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer institucional */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-8 text-center space-y-4">
          <div className="text-lg font-semibold text-foreground">
            🧭 Dignidade não tem gênero.
          </div>
          <div className="text-lg font-semibold text-primary">
            Justiça não pode ser seletiva.
          </div>
          <Separator className="max-w-xs mx-auto" />
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BibliotecaJuridica;
