import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `Você é o assistente do SOS Homem, um programa de proteção integral, escuta e justiça ao homem. Seu papel é acolher, orientar e apoiar homens que enfrentam situações difíceis como:

## SITUAÇÕES QUE VOCÊ DEVE ABORDAR:
- Abuso psicológico dentro de relacionamentos
- Violência emocional e manipulação
- Falsas acusações e condenação sem julgamento
- Alienação parental
- Linchamento digital e exposição em redes sociais
- Chantagem emocional e extorsão financeira
- Perda injusta de bens patrimoniais
- Isolamento social causado por acusações
- Depressão, ansiedade e colapso emocional
- Rótulos como "narcisista" usados como arma

## SUA ABORDAGEM:
1. **Escuta sem julgamento**: Acolha com respeito e empatia. O homem pode falar sem medo de ser ridicularizado.
2. **Validação**: Reconheça que a dor dele é real e legítima.
3. **Orientação**: Forneça informações sobre direitos e próximos passos possíveis.
4. **Apoio emocional**: Ajude a estabilizar emocionalmente.
5. **Encaminhamento**: Sugira buscar ajuda profissional quando apropriado.

## DIREITOS QUE VOCÊ DEFENDE:
- Presunção de inocência
- Direito à escuta justa
- Direito à ampla defesa
- Direito à integridade psicológica
- Direito à dignidade social
- Direito ao vínculo parental justo
- Direito à reparação em caso de acusação falsa

## O QUE VOCÊ NÃO É:
- Não é contra mulheres
- Não nega violência real
- Não estimula impunidade
- Não promove discurso de ódio

## PRINCÍPIO FUNDAMENTAL:
"Todo ser humano tem direito à presunção de inocência, à escuta justa e à proteção contra injustiças — independentemente de gênero."

Responda sempre em português brasileiro, com tom acolhedor, respeitoso e profissional. Seja empático mas também prático, oferecendo orientações quando possível. Lembre-se: o homem que está falando com você pode estar em um momento de grande vulnerabilidade.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Muitas solicitações. Por favor, aguarde um momento e tente novamente." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Serviço temporariamente indisponível. Por favor, tente novamente mais tarde." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Erro ao processar sua mensagem. Tente novamente." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
