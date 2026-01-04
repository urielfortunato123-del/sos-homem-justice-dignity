import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulated submission - in production, connect to your backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas atualizações em breve.",
    });
  };

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/20 flex items-center justify-center">
            <Mail className="w-8 h-8 text-secondary" />
          </div>
          
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Fique por Dentro
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Receba atualizações sobre direitos masculinos, mudanças na legislação e eventos do SOS Homem
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-green-600 dark:text-green-400 animate-scale-in">
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">Obrigado! Você está inscrito.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12"
              />
              <Button type="submit" disabled={isLoading} className="h-12 px-8">
                {isLoading ? "Enviando..." : "Inscrever"}
              </Button>
            </form>
          )}

          <p className="text-muted-foreground text-xs mt-4">
            Prometemos não enviar spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
