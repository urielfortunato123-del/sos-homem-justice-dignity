import { useState } from "react";
import { MapPin, Phone, Building, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const estados = [
  {
    uf: "SP",
    nome: "São Paulo",
    recursos: [
      { tipo: "Defensoria Pública", nome: "Defensoria Pública do Estado de SP", telefone: "0800-773-4340", endereco: "Rua Boa Vista, 200 - Centro" },
      { tipo: "Delegacia", nome: "Delegacia de Defesa da Mulher (atende homens também)", telefone: "(11) 3101-0001", endereco: "Múltiplas unidades" },
    ],
  },
  {
    uf: "RJ",
    nome: "Rio de Janeiro",
    recursos: [
      { tipo: "Defensoria Pública", nome: "Defensoria Pública do Estado do RJ", telefone: "129", endereco: "Av. Marechal Câmara, 314 - Centro" },
      { tipo: "CRAS", nome: "Centro de Referência de Assistência Social", telefone: "Ligue 121", endereco: "Múltiplas unidades" },
    ],
  },
  {
    uf: "MG",
    nome: "Minas Gerais",
    recursos: [
      { tipo: "Defensoria Pública", nome: "Defensoria Pública do Estado de MG", telefone: "129", endereco: "Rua Rio de Janeiro, 471 - Centro" },
      { tipo: "CVV", nome: "Centro de Valorização da Vida", telefone: "188", endereco: "Atendimento 24h" },
    ],
  },
  {
    uf: "RS",
    nome: "Rio Grande do Sul",
    recursos: [
      { tipo: "Defensoria Pública", nome: "Defensoria Pública do Estado do RS", telefone: "(51) 3211-2233", endereco: "Rua Sete de Setembro, 666 - Centro" },
    ],
  },
  {
    uf: "GO",
    nome: "Goiás",
    recursos: [
      { tipo: "Defensoria Pública", nome: "Defensoria Pública do Estado de GO", telefone: "(62) 3201-3000", endereco: "Av. Universitária, 1330 - Setor Universitário" },
      { tipo: "Apoio Psicológico", nome: "Psicóloga Maya (Valores acessíveis)", telefone: "(62) 9286-7271", endereco: "Atendimento via WhatsApp" },
    ],
  },
  {
    uf: "BA",
    nome: "Bahia",
    recursos: [
      { tipo: "Defensoria Pública", nome: "Defensoria Pública do Estado da BA", telefone: "(71) 3117-9550", endereco: "Av. Estados Unidos, 39 - Comércio" },
    ],
  },
];

const MapaApoio = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState(estados[0]);

  return (
    <section id="mapa-apoio" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Rede de Apoio
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Encontre Ajuda Perto de Você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecione seu estado para ver os recursos de apoio disponíveis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Lista de Estados */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-4 shadow-soft border border-border/50">
              <h3 className="font-semibold text-foreground mb-4 px-2">Selecione o Estado</h3>
              <div className="space-y-2">
                {estados.map((estado) => (
                  <button
                    key={estado.uf}
                    onClick={() => setEstadoSelecionado(estado)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                      estadoSelecionado.uf === estado.uf
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{estado.uf}</span>
                    <span className="text-sm opacity-80">- {estado.nome}</span>
                  </button>
                ))}
              </div>
              <p className="text-muted-foreground text-xs mt-4 px-2">
                Mais estados em breve...
              </p>
            </div>
          </div>

          {/* Recursos do Estado */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                Recursos em {estadoSelecionado.nome}
              </h3>
              
              <div className="space-y-4">
                {estadoSelecionado.recursos.map((recurso, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="inline-block px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium mb-2">
                          {recurso.tipo}
                        </span>
                        <h4 className="font-semibold text-foreground mb-2">{recurso.nome}</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {recurso.telefone}
                          </p>
                          <p className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            {recurso.endereco}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="shrink-0">
                        <Phone className="w-4 h-4 mr-2" />
                        Ligar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Ligação Nacional Gratuita:</strong> CVV 188 (24h) | Defensoria 129
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapaApoio;
