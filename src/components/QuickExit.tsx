import { X } from "lucide-react";

const QuickExit = () => {
  const handleQuickExit = () => {
    // Replace current history entry with Google
    window.location.replace("https://www.google.com");
  };

  return (
    <button
      onClick={handleQuickExit}
      className="fixed top-4 right-4 z-[100] bg-destructive hover:bg-destructive/90 text-destructive-foreground px-4 py-2 rounded-lg shadow-elevated flex items-center gap-2 transition-all duration-200 hover:scale-105 font-medium text-sm"
      title="Sair rapidamente do site"
    >
      <X className="w-4 h-4" />
      <span className="hidden sm:inline">Sair Rápido</span>
      <span className="sm:hidden">ESC</span>
    </button>
  );
};

export default QuickExit;
