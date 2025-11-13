import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToSection } from "@/lib/scrollToSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Sobre", path: "#sobre" },
    { name: "Serviços", path: "#servicos" },
    { name: "Planos", path: "#planos" },
    { name: "Contato", path: "#contato" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    scrollToSection(e, path);
    setIsOpen(false);
  };

  /** Controle de esconder/mostrar navbar ao rolar */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // rolando para baixo
        setShowNavbar(false);
      } else {
        // rolando para cima
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 
        w-[95%] max-w-7xl 
        transition-all duration-300 z-50
        ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
      `}
    >
      <div
        className="
          bg-dark-graphite/70 
          backdrop-blur-lg 
          border border-white/10
          rounded-2xl
          px-4 sm:px-6 lg:px-8
          shadow-lg 
          transition-all
        "
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold text-primary">Ânima</span>
            <span className="text-2xl font-bold text-white">AI</span>
          </a>

          {/* Menu Desktop */}
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
              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, "#contato")}
              >
                Falar com Especialista
              </a>
            </Button>
          </div>

          {/* Botão Menu Mobile (Acessível) */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 space-y-3 animate-fade-in"
          >
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
              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, "#contato")}
              >
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
