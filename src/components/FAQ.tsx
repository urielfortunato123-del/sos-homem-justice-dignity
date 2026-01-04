import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Homem pode ser vítima de violência doméstica?",
    answer: "Sim. Violência doméstica não escolhe gênero. Homens podem sofrer violência psicológica, emocional, patrimonial e até física dentro de casa. A diferença é que, culturalmente, esse sofrimento é invisibilizado e minimizado. O SOS Homem existe para romper esse silêncio."
  },
  {
    question: "A Lei Maria da Penha protege homens?",
    answer: "A Lei Maria da Penha foi criada especificamente para proteger mulheres vítimas de violência. O SOS Homem defende que os mesmos PRINCÍPIOS de proteção sejam aplicáveis quando houver violência comprovada contra homens — com análise judicial, prova mínima e direito de defesa."
  },
  {
    question: "O que é alienação parental e como ela afeta os pais?",
    answer: "Alienação parental ocorre quando um dos genitores manipula o filho para rejeitar o outro genitor. É uma forma de violência psicológica que afeta tanto a criança quanto o pai alienado, podendo causar perda de vínculos familiares, depressão e isolamento social."
  },
  {
    question: "Fotos juntos ou mensagens criam união estável automaticamente?",
    answer: "NÃO. Isso é um mito. Fotos, encontros, viagens, mensagens carinhosas NÃO criam, sozinhos, direito a bens ou pensão. O Judiciário exige: convivência pública como casal, contínua e duradoura, com objetivo de constituir família. Sem esses elementos juntos, não há união estável."
  },
  {
    question: "Acessar o celular do parceiro sem permissão é crime?",
    answer: "Em muitos casos, SIM. Pode configurar violação de intimidade, invasão de dispositivo informático e produção ilícita de prova. Prova obtida por meio ilícito é, em regra, inadmissível no processo judicial."
  },
  {
    question: "O que fazer se estou sendo difamado nas redes sociais pelo(a) ex?",
    answer: "Documente tudo: prints, links, datas, padrão de repetição. NÃO rebata em público. Preserve o silêncio estratégico. Busque orientação jurídica. Exposição reiterada, campanhas difamatórias e perseguição digital podem configurar crimes e gerar indenização por danos morais."
  },
  {
    question: "Como me proteger de falsas acusações?",
    answer: "Mantenha registros e documentação de suas interações. Seja coerente entre discurso e prática. Em situações de conflito, evite ficar sozinho com a pessoa. Procure orientação jurídica preventiva. Testemunhas e provas documentais são sua melhor defesa."
  },
  {
    question: "O SOS Homem é contra mulheres?",
    answer: "Absolutamente NÃO. O SOS Homem defende igualdade de proteção quando existe violência real. Não nega a violência contra mulheres, não defende agressores, não relativiza crimes. É proteção, equilíbrio, humanidade e justiça para todos."
  },
  {
    question: "Onde posso buscar ajuda psicológica com valores acessíveis?",
    answer: "O SOS Homem oferece parceria com profissionais de saúde mental com valores acessíveis para homens em situação de vulnerabilidade emocional. Entre em contato através do nosso WhatsApp ou ligue para o CVV (188) para apoio emocional imediato 24h."
  },
  {
    question: "O que fazer em caso de emergência emocional?",
    answer: "Se você está em crise, ligue imediatamente para o CVV: 188 (24 horas). É gratuito, sigiloso e funciona em todo o Brasil. Você não está sozinho. Se houver risco de vida, ligue 190 (Polícia) ou 192 (SAMU)."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Dúvidas sobre <span className="text-primary">Direitos Masculinos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Orientação jurídica clara e acessível. Informação é a primeira linha de defesa.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Tem mais dúvidas? Fale conosco pelo chat ou WhatsApp.
          </p>
          <a
            href="https://wa.me/5562992867271?text=Olá,%20vim%20pelo%20SOS%20Homem%20e%20tenho%20uma%20dúvida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tire suas dúvidas
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
