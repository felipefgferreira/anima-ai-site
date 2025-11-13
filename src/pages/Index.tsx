import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/Hero";
import { ProcessSection } from "@/pages/Planos";
import { ServicesSection } from "@/pages/Servicos";
import { AboutSection } from "@/pages/Sobre";
import { ContactSection } from "@/pages/Contato";
import { Zap, Target, TrendingUp } from "lucide-react";

const Index = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Automação Inteligente",
      description:
        "Reduza custos operacionais em até 70% com processos automatizados",
    },
    {
      icon: Target,
      title: "Alta Precisão",
      description: "IA treinada especificamente para o seu modelo de negócio",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      description: "Cresça sem aumentar proporcionalmente sua equipe",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-graphite">
      <Navbar />
      <div id="home">
        <Hero />
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-graphite border-y border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section (reutilizando a seção da página Sobre) */}
      <section id="sobre" className="py-20 bg-background">
        <AboutSection />
      </section>

      {/* Serviços Section (reutilizando a seção da página Serviços) */}
      <section id="servicos" className="py-20 bg-dark-graphite">
        <ServicesSection />
      </section>

      {/* Processo/Planos Section (reutilizando a seção da página Processo/Planos) */}
      <section id="planos" className="py-20 bg-background">
        <ProcessSection />
      </section>

      {/* Contato Section (reutilizando a seção da página Contato) */}
      <section id="contato" className="py-20 bg-dark-graphite">
        <ContactSection />
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
