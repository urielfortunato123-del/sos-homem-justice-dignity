import { Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-primary-foreground">
                SOS Homem
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Programa de Proteção Integral, Escuta e Justiça ao Homem. Porque dignidade não tem gênero.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {["Pilares", "Direitos", "Como Funciona", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Atendimento 24 horas</li>
              <li>soshomem@soshomem.com.br</li>
              <li>Sigiloso e Gratuito</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 SOS Homem. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2 text-primary-foreground/60 text-sm">
            Feito com <Heart className="w-4 h-4 text-secondary fill-secondary" /> por justiça e equidade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
