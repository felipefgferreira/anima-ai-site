import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  Zap,
  Target,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

// 👉 importa seções reutilizáveis
import { ProcessSection } from "@/pages/Planos";
import { ServicesSection } from "@/pages/Servicos";
import { AboutSection } from "@/pages/Sobre";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    message: "",
  });

  const benefits = [
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Reduza custos operacionais em até 70% com processos automatizados",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      company: "",
      whatsapp: "",
      email: "",
      message: "",
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as soluções de IA da Ânima AI.");
    window.open(`https://wa.me/5511987654321?text=${message}`, "_blank");
  };

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
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
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

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos prontos para transformar seu negócio com Inteligência Artificial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Fale Conosco</h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe de especialistas está pronta para entender suas necessidades
                e apresentar a melhor solução de IA para o seu negócio.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-muted-foreground">E-mail</h4>
                    <p className="text-white">animaai@animaaagencia.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-muted-foreground">Telefone / WhatsApp</h4>
                    <p className="text-white">(44) 99853-7443</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-muted-foreground">Localização</h4>
                    <p className="text-white">Florianópolis, SC - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                
              </div>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="(44) 99853-7443"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre suas necessidades..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2" size={18} />
                  Quero Automatizar meu Negócio
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
