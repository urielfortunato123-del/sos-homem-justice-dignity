import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Loader2, Shield, Search, MessageSquare, ExternalLink } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type SearchEngine = "google" | "duckduckgo";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-sos-homem`;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"chat" | "search">("chat");
  const [searchEngine, setSearchEngine] = useState<SearchEngine>("duckduckgo");
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const streamChat = async (userMessage: string) => {
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || "Erro ao conectar com o assistente");
      }

      if (!resp.body) throw new Error("No response body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantContent = "";
      let streamDone = false;

      // Add empty assistant message
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: "assistant", content: assistantContent };
                return updated;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: error instanceof Error ? error.message : "Desculpe, ocorreu um erro. Por favor, tente novamente.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const message = input.trim();
    setInput("");
    streamChat(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-warm-gradient shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Abrir chat de apoio"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[95vw] max-w-md h-[600px] max-h-[80vh] rounded-2xl bg-background border border-border shadow-elevated flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-hero-gradient px-4 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              {mode === "chat" ? (
                <Shield className="w-5 h-5 text-primary-foreground" />
              ) : (
                <Search className="w-5 h-5 text-primary-foreground" />
              )}
            </div>
            <div>
              <h3 className="font-display font-semibold text-primary-foreground">
                {mode === "chat" ? "SOS Homem" : searchEngine === "google" ? "Google" : "DuckDuckGo"}
              </h3>
              <p className="text-xs text-primary-foreground/70">
                {mode === "chat" ? "Assistente de Apoio" : searchEngine === "duckduckgo" ? "Pesquisa privada" : "Buscar informações"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {mode === "search" && (
              <button
                onClick={() => setSearchEngine(searchEngine === "google" ? "duckduckgo" : "google")}
                className="px-2 py-1 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors text-xs text-primary-foreground font-medium"
                aria-label={searchEngine === "google" ? "Mudar para DuckDuckGo" : "Mudar para Google"}
                title={searchEngine === "google" ? "Mudar para DuckDuckGo (mais privado)" : "Mudar para Google"}
              >
                {searchEngine === "google" ? "🦆 DDG" : "🔍 Google"}
              </button>
            )}
            <button
              onClick={() => setMode(mode === "chat" ? "search" : "chat")}
              className="w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label={mode === "chat" ? "Abrir pesquisa" : "Voltar ao chat"}
              title={mode === "chat" ? "Abrir pesquisa" : "Voltar ao chat"}
            >
              {mode === "chat" ? (
                <Search className="w-5 h-5 text-primary-foreground" />
              ) : (
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>

        {mode === "chat" ? (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    Olá, estou aqui para ajudar
                  </h4>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Conte sua situação. Esta conversa é sigilosa e você será ouvido com respeito.
                  </p>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                    <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border flex-shrink-0">
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 min-h-[48px] max-h-32"
                  rows={1}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="icon"
                  className="h-12 w-12 rounded-xl flex-shrink-0"
                  disabled={!input.trim() || isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Conversa 100% sigilosa e confidencial
              </p>
            </form>
          </>
        ) : (
          /* Search Mode - with search input */
          <div className="flex-1 flex flex-col p-4">
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                {searchEngine === "duckduckgo" ? (
                  <span className="text-3xl">🦆</span>
                ) : (
                  <Search className="w-8 h-8 text-secondary" />
                )}
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">
                Pesquisa {searchEngine === "google" ? "Google" : "DuckDuckGo"}
              </h4>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-6">
                {searchEngine === "duckduckgo" 
                  ? "Navegação privada - sem rastreamento" 
                  : "Busque informações de forma rápida"}
              </p>
            </div>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  const url = searchEngine === "google" 
                    ? `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`
                    : `https://duckduckgo.com/?q=${encodeURIComponent(searchQuery)}`;
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              }} 
              className="space-y-3"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="O que você quer pesquisar?"
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="icon"
                  className="h-12 w-12 rounded-xl flex-shrink-0"
                  disabled={!searchQuery.trim()}
                >
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Abre em nova aba • {searchEngine === "duckduckgo" ? "Privado e seguro" : "Resultados completos"}
              </p>
            </form>

            {/* Quick search suggestions */}
            <div className="mt-6 space-y-2">
              <p className="text-xs text-muted-foreground font-medium">Sugestões rápidas:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Lei Maria da Penha homens",
                  "Alienação parental",
                  "Guarda compartilhada",
                  "Violência doméstica masculina"
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => {
                      const url = searchEngine === "google" 
                        ? `https://www.google.com/search?q=${encodeURIComponent(suggestion)}`
                        : `https://duckduckgo.com/?q=${encodeURIComponent(suggestion)}`;
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
