import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Smartphone, Share, Plus, MoreVertical, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Instalar = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Instale o SOS Homem
            </h1>
            <p className="text-lg text-muted-foreground">
              Tenha acesso rápido ao apoio que você precisa, direto na tela inicial do seu celular.
            </p>
          </div>

          {isInstalled ? (
            <Card className="border-green-500 bg-green-50 dark:bg-green-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-400">
                  App Instalado!
                </CardTitle>
                <CardDescription>
                  O SOS Homem já está instalado no seu dispositivo.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : isIOS ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Como instalar no iPhone/iPad
                </CardTitle>
                <CardDescription>
                  Siga os passos abaixo para adicionar o app à sua tela inicial
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Share className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">1. Toque em Compartilhar</h3>
                    <p className="text-sm text-muted-foreground">
                      No Safari, toque no ícone de compartilhar (quadrado com seta para cima) na barra inferior.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Plus className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">2. Adicionar à Tela de Início</h3>
                    <p className="text-sm text-muted-foreground">
                      Role para baixo e toque em "Adicionar à Tela de Início".
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">3. Confirmar</h3>
                    <p className="text-sm text-muted-foreground">
                      Toque em "Adicionar" no canto superior direito para confirmar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : deferredPrompt ? (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Download className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Pronto para instalar</CardTitle>
                <CardDescription>
                  Clique no botão abaixo para adicionar o SOS Homem à sua tela inicial.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button size="lg" onClick={handleInstallClick} className="gap-2">
                  <Download className="w-5 h-5" />
                  Instalar Agora
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Como instalar no Android
                </CardTitle>
                <CardDescription>
                  Siga os passos abaixo para adicionar o app à sua tela inicial
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MoreVertical className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">1. Abra o menu do navegador</h3>
                    <p className="text-sm text-muted-foreground">
                      No Chrome, toque nos três pontos no canto superior direito.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Plus className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">2. Adicionar à tela inicial</h3>
                    <p className="text-sm text-muted-foreground">
                      Toque em "Adicionar à tela inicial" ou "Instalar app".
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">3. Confirmar</h3>
                    <p className="text-sm text-muted-foreground">
                      Toque em "Adicionar" para confirmar a instalação.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Por que instalar?
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-card">
                <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-foreground">Acesso Rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Direto na sua tela inicial
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card">
                <Download className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-foreground">Funciona Offline</h3>
                <p className="text-sm text-muted-foreground">
                  Acesse mesmo sem internet
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card">
                <Check className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-medium text-foreground">Sem Download</h3>
                <p className="text-sm text-muted-foreground">
                  Não ocupa espaço da loja
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Instalar;
