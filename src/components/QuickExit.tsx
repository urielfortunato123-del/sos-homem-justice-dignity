import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const QuickExit = () => {
  const [position, setPosition] = useState({ x: 16, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleQuickExit = () => {
    if (!isDragging) {
      window.location.replace("https://www.google.com");
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
      buttonRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging && buttonRef.current) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      // Limitar dentro da tela
      const buttonWidth = buttonRef.current.offsetWidth;
      const buttonHeight = buttonRef.current.offsetHeight;
      const maxX = window.innerWidth - buttonWidth - 8;
      const maxY = window.innerHeight - buttonHeight - 8;

      setPosition({
        x: Math.max(8, Math.min(newX, maxX)),
        y: Math.max(8, Math.min(newY, maxY)),
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (buttonRef.current) {
      buttonRef.current.releasePointerCapture(e.pointerId);
    }
    // Pequeno delay para evitar que o click seja acionado após arrastar
    setTimeout(() => setIsDragging(false), 100);
  };

  // Salvar posição no localStorage
  useEffect(() => {
    const saved = localStorage.getItem("quickExitPosition");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPosition(parsed);
      } catch {
        // Usar posição padrão se houver erro
      }
    }
  }, []);

  useEffect(() => {
    if (!isDragging) {
      localStorage.setItem("quickExitPosition", JSON.stringify(position));
    }
  }, [position, isDragging]);

  return (
    <button
      ref={buttonRef}
      onClick={handleQuickExit}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        left: position.x,
        top: position.y,
        touchAction: "none",
      }}
      className={`fixed z-[40] bg-destructive hover:bg-destructive/90 text-destructive-foreground w-14 h-14 rounded-full shadow-elevated flex items-center justify-center transition-transform duration-200 font-bold text-sm select-none ${
        isDragging ? "scale-110 cursor-grabbing opacity-80" : "cursor-grab hover:scale-105"
      }`}
      title="Arraste para mover • Clique para sair rapidamente"
    >
      <div className="flex flex-col items-center">
        <X className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">ESC</span>
      </div>
    </button>
  );
};

export default QuickExit;
