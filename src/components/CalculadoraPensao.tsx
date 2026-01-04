import { useState } from "react";
import { Calculator, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CalculadoraPensao = () => {
  const [rendaLiquida, setRendaLiquida] = useState("");
  const [numFilhos, setNumFilhos] = useState("1");
  const [resultado, setResultado] = useState<{ min: number; max: number } | null>(null);

  const calcular = () => {
    const renda = parseFloat(rendaLiquida.replace(/\D/g, "")) / 100;
    const filhos = parseInt(numFilhos);
    
    if (isNaN(renda) || renda <= 0 || isNaN(filhos) || filhos <= 0) {
      return;
    }

    // Cálculo baseado em jurisprudência comum
    // 1 filho: 20-30%, 2 filhos: 30-40%, 3+ filhos: 40-50%
    let minPercent, maxPercent;
    
    if (filhos === 1) {
      minPercent = 0.20;
      maxPercent = 0.30;
    } else if (filhos === 2) {
      minPercent = 0.30;
      maxPercent = 0.40;
    } else {
      minPercent = 0.40;
      maxPercent = 0.50;
    }

    setResultado({
      min: renda * minPercent,
      max: renda * maxPercent,
    });
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleRendaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formatted = (parseInt(value) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setRendaLiquida(value ? formatted : "");
  };

  return (
    <section id="calculadora" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Ferramenta
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calculadora de Pensão
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estime o valor aproximado da pensão alimentícia com base na jurisprudência brasileira
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Calcule a Estimativa</h3>
                <p className="text-sm text-muted-foreground">Valores aproximados</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="renda" className="text-foreground">
                  Sua Renda Líquida Mensal
                </Label>
                <Input
                  id="renda"
                  type="text"
                  placeholder="R$ 0,00"
                  value={rendaLiquida}
                  onChange={handleRendaChange}
                  className="mt-2 h-12"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Após descontos de INSS e IR
                </p>
              </div>

              <div>
                <Label htmlFor="filhos" className="text-foreground">
                  Número de Filhos
                </Label>
                <Input
                  id="filhos"
                  type="number"
                  min="1"
                  max="10"
                  value={numFilhos}
                  onChange={(e) => setNumFilhos(e.target.value)}
                  className="mt-2 h-12"
                />
              </div>

              <Button onClick={calcular} className="w-full h-12">
                <Calculator className="w-4 h-4 mr-2" />
                Calcular Estimativa
              </Button>

              {resultado && (
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 animate-scale-in">
                  <h4 className="font-semibold text-foreground mb-4 text-center">
                    Estimativa de Pensão Mensal
                  </h4>
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-primary">
                      {formatCurrency(resultado.min)} - {formatCurrency(resultado.max)}
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      Por {numFilhos} filho{parseInt(numFilhos) > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              )}

              <div className="p-4 rounded-xl bg-muted/50 flex gap-3">
                <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Importante:</p>
                  <p>
                    Esta é apenas uma estimativa baseada em parâmetros gerais da jurisprudência. 
                    O valor real pode variar conforme as necessidades do filho e a capacidade 
                    financeira do alimentante. Consulte um advogado para orientação específica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculadoraPensao;
