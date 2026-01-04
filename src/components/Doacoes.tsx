import { Heart, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Doacoes = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "contato@soshomem.org.br"; // Chave PIX exemplo

  const copyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    toast({
      title: "Chave PIX copiada!",
      description: "Cole no seu aplicativo de banco para doar.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-16 bg-warm-gradient">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-background/20 flex items-center justify-center">
            <Heart className="w-8 h-8 text-background" />
          </div>
          
          <h2 className="font-display text-2xl md:text-3xl font-bold text-background mb-4">
            Apoie Nossa Causa
          </h2>
          <p className="text-background/90 mb-8 max-w-xl mx-auto">
            Sua doação ajuda a manter nossos serviços gratuitos e a expandir o apoio a homens em situação de vulnerabilidade
          </p>

          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 max-w-md mx-auto">
            <p className="text-background font-medium mb-4">Doe via PIX</p>
            
            <div className="bg-background rounded-xl p-4 mb-4">
              <p className="text-muted-foreground text-sm mb-1">Chave PIX (E-mail)</p>
              <p className="text-foreground font-mono font-medium break-all">{pixKey}</p>
            </div>

            <Button
              onClick={copyPix}
              variant="outline"
              className="w-full bg-background hover:bg-background/90"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Chave PIX
                </>
              )}
            </Button>

            <p className="text-background/70 text-xs mt-4">
              O SOS Homem é um projeto sem fins lucrativos. Toda doação é bem-vinda.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto text-background/90">
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs">Gratuito</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24h</div>
              <div className="text-xs">Atendimento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-xs">Atendidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doacoes;
