import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Sobre", path: "#sobre" },
    { name: "Serviços", path: "#servicos" },
    { name: "Planos", path: "#planos" },
    { name: "Contato", path: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-dark-graphite/95 backdrop-blur-sm z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Ânima</span>
            <span className="text-2xl font-bold text-white">AI</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-sm font-medium text-white transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" size="sm" asChild>
              <a href="#contato" onClick={(e) => handleNavClick(e, "#contato")}>
                Falar com Especialista
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="block py-2 text-sm font-medium text-white transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="w-full" asChild>
              <a href="#contato" onClick={(e) => handleNavClick(e, "#contato")}>
                Falar com Especialista
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
