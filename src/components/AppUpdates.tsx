import { useState } from "react";
import { Bell, CheckCircle, AlertTriangle, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface UpdateInfo {
  version: string;
  releaseDate: string;
  status: "stable" | "beta" | "maintenance";
  highlights: string[];
  security: string[];
  fixes: string[];
}

const currentUpdate: UpdateInfo = {
  version: "1.2.0",
  releaseDate: "04 de Janeiro de 2026",
  status: "stable",
  highlights: [
    "Novo chat de apoio com IA para suporte emocional 24h",
    "Calculadora de pensão alimentícia atualizada",
    "Mapa interativo com pontos de apoio",
    "Botões de WhatsApp para contato direto com profissionais",
  ],
  security: [
    "Criptografia de ponta a ponta nas conversas",
    "Botão de saída rápida para sua segurança",
    "Nenhum dado pessoal é armazenado",
  ],
  fixes: [
    "Melhorias na responsividade mobile",
    "Correções de layout nos indicadores",
    "Otimização de performance geral",
  ],
};

const statusConfig = {
  stable: {
    label: "Estável",
    color: "bg-green-500",
    icon: CheckCircle,
    description: "O app está funcionando normalmente",
  },
  beta: {
    label: "Beta",
    color: "bg-yellow-500",
    icon: AlertTriangle,
    description: "Versão de testes - pode haver instabilidades",
  },
  maintenance: {
    label: "Manutenção",
    color: "bg-orange-500",
    icon: AlertTriangle,
    description: "Algumas funcionalidades podem estar indisponíveis",
  },
};

const AppUpdates = () => {
  const [open, setOpen] = useState(false);
  const status = statusConfig[currentUpdate.status];
  const StatusIcon = status.icon;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10"
        >
          <Bell className="w-4 h-4" />
          <span className="hidden sm:inline">Atualizações</span>
          <Badge variant="secondary" className="text-xs px-1.5 py-0">
            v{currentUpdate.version}
          </Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Atualizações do SOS Homem
          </DialogTitle>
          <DialogDescription>
            Confira as novidades e o status atual do aplicativo
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Version and Status */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <div>
              <p className="text-sm text-muted-foreground">Versão atual</p>
              <p className="text-2xl font-bold text-foreground">
                {currentUpdate.version}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {currentUpdate.releaseDate}
              </p>
            </div>
            <div className="text-right">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${status.color} text-white text-sm font-medium`}>
                <StatusIcon className="w-4 h-4" />
                {status.label}
              </div>
              <p className="text-xs text-muted-foreground mt-2 max-w-[140px]">
                {status.description}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              Novidades
            </h4>
            <ul className="space-y-2">
              {currentUpdate.highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Security */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-foreground">
              <Shield className="w-4 h-4 text-blue-500" />
              Segurança
            </h4>
            <ul className="space-y-2">
              {currentUpdate.security.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Fixes */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-foreground">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Correções
            </h4>
            <ul className="space-y-2">
              {currentUpdate.fixes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-center text-muted-foreground">
              O SOS Homem está em constante evolução para melhor atendê-lo.
              <br />
              Obrigado por fazer parte desta comunidade! 💙
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppUpdates;
