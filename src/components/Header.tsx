import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import AppUpdates from "./AppUpdates";

const navLinks = [
  { label: "Pilares", href: "#pilares" },
  { label: "Direitos", href: "#direitos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Recursos", href: "/recursos", isPage: true },
  { label: "Biblioteca Jurídica", href: "/biblioteca-juridica", isPage: true },
  { label: "Blog", href: "/blog", isPage: true },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll quando menu aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? "bg-primary" : "bg-primary-foreground/20"
              }`}>
                <Shield className={`w-5 h-5 transition-colors duration-300 ${
                  isScrolled ? "text-primary-foreground" : "text-primary-foreground"
                }`} />
              </div>
              <span className={`font-display text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
                SOS Homem
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                      isScrolled ? "text-foreground" : "text-primary-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                      isScrolled ? "text-foreground" : "text-primary-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>

            {/* Theme Toggle, Updates & CTA Button */}
            <div className="hidden md:flex items-center gap-2">
              <AppUpdates />
              <ThemeToggle isScrolled={isScrolled} />
              <Button
                variant={isScrolled ? "default" : "hero"}
                size="sm"
              >
                Preciso de Ajuda
              </Button>
            </div>

            {/* Mobile: Theme, Updates & Menu Button */}
            <div className="md:hidden flex items-center gap-1">
              <ThemeToggle isScrolled={isScrolled} />
              <AppUpdates />
              <button
                className="p-2 z-[70]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay (fora do header) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 w-full h-full z-[100] bg-background overflow-y-auto">
          {/* Header do menu */}
          <div className="sticky top-0 flex items-center justify-between px-4 py-5 border-b border-border bg-background">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                SOS Homem
              </span>
            </div>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Links do menu */}
          <nav className="px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground text-lg font-medium py-4 px-4 rounded-xl hover:bg-muted transition-colors border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground text-lg font-medium py-4 px-4 rounded-xl hover:bg-muted transition-colors border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            
            <div className="mt-6 flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Tema</span>
              <ThemeToggle isScrolled={true} />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Atualizações</span>
              <AppUpdates />
            </div>

            <Button variant="default" size="lg" className="mt-6 w-full">
              Preciso de Ajuda
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
