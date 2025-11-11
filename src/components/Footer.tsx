import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-graphite text-foreground py-12 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">Ânima</span>
              <span className="text-2xl font-bold">AI</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Soluções de Inteligência Artificial que automatizam, escalam e geram lucro para o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-muted-foreground hover:text-primary transition-colors">
                  Planos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={16} />
                <span className="text-sm">animaai@animaaagencia.com.br</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={16} />
                <span className="text-sm">(44) 99853-7443</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin size={16} />
                <span className="text-sm">Florianópolis, SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Ânima AI. CNPJ: 52.980.213/0001-20. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
