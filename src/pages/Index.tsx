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
  Lightbulb,
  Shield,
  Rocket,
  Bot,
  Headphones,
  Calendar,
  Building2,
  CreditCard,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

// 👉 importa apenas a seção reutilizável (sem Navbar/Footer) da página de Planos
import { ProcessSection } from "@/pages/Planos";

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

  const values = [
    {
      icon: Lightbulb,
      title: "Inovação e Proatividade",
      description: "Buscamos constantemente as mais avançadas tecnologias de IA para entregar soluções de ponta",
    },
    {
      icon: Target,
      title: "Automação Humanizada",
      description: "Combinamos eficiência tecnológica com empatia e compreensão das necessidades humanas",
    },
    {
      icon: Shield,
      title: "Ética e Transparência",
      description: "Desenvolvemos IA responsável, segura e alinhada com valores empresariais sólidos",
    },
    {
      icon: Rocket,
      title: "Alta Performance",
      description: "Focamos em resultados mensuráveis que impactam diretamente o crescimento do seu negócio",
    },
  ];

  const services = [
    {
      icon: Bot,
      title: "IA para WhatsApp",
      description: "Chatbots inteligentes que atendem seus clientes 24 horas por dia, 7 dias por semana",
      features: [
        "Respostas automáticas em linguagem natural",
        "Análise de intenção do cliente",
        "Integração com catálogo de produtos",
        "Transferência inteligente para humanos",
      ],
    },
    {
      icon: TrendingUp,
      title: "IA para Vendas (SDR + Closer)",
      description: "Agentes de IA que qualificam leads e fecham vendas automaticamente",
      features: [
        "Agente SDR para qualificação de leads",
        "Agente Closer para negociações",
        "Follow-up automatizado",
        "Análise preditiva de conversão",
      ],
    },
    {
      icon: Headphones,
      title: "Agente de Suporte ao Cliente",
      description: "Atendimento inteligente que resolve problemas sem intervenção humana",
      features: [
        "Respostas baseadas em banco de dados",
        "Resolução automática de problemas comuns",
        "Escalação inteligente de tickets",
        "Disponível 24/7 sem custo adicional",
      ],
    },
    {
      icon: Calendar,
      title: "Assistente Executivo com IA",
      description: "Automatize tarefas administrativas e foque no que realmente importa",
      features: [
        "Gerenciamento de e-mails",
        "Organização de agenda e reuniões",
        "Criação automática de planilhas",
        "Geração de relatórios",
      ],
    },
    {
      icon: Building2,
      title: "IA para Imobiliárias",
      description: "Agente especializado em vendas e locação de imóveis",
      features: [
        "Atendimento personalizado de clientes",
        "Apresentação de imóveis por características",
        "Agendamento automático de visitas",
        "Informações sobre financiamento",
      ],
    },
    {
      icon: CreditCard,
      title: "Concierge de Pagamentos & Cobranças",
      description: "Automatize todo o processo de cobrança e pagamentos",
      features: [
        "Envio automático de links de pagamento",
        "Lembretes para inadimplentes",
        "Atualização de status no sistema",
        "Relatórios financeiros automáticos",
      ],
    },
    {
      icon: RefreshCw,
      title: "Follow-up Inteligente",
      description: "Nunca mais perca uma venda por falta de follow-up",
      features: [
        "Automatização de follow-up de vendas",
        "Acompanhamento de propostas",
        "Onboarding automatizado de clientes",
        "Notificações de engajamento",
      ],
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
              <div key={index} className="text-center animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
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

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Sobre a <span className="text-third">Ânima AI</span>
            </h2>
            <Card className="p-8 md:p-12 bg-card border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Nossa Missão</h3>
              <p className="text-lg text-muted-foreground text-center mb-6">
                <strong className="text-third">Tornar a Inteligência Artificial acessível, eficiente e lucrativa para empresas reais.</strong>
              </p>
              <p className="text-muted-foreground text-center">
                Acreditamos que toda empresa, independente do tamanho, merece ter acesso às tecnologias mais avançadas de IA.
                Nossa missão é tornar o uso da Inteligência Artificial acessível, oferecendo soluções que geram resultados práticos e mensuráveis.
              </p>
            </Card>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Nossos <span className="text-third">Valores</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card hover:border-primary/50 transition-all animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Nossa <span className="text-third">História</span>
            </h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                A Ânima AI nasceu da visão de que a Inteligência Artificial pode ser muito mais do que uma tecnologia complexa e inacessível.
                Fundada por entusiastas de IA e negócios que se especializaram na área, nossa empresa surgiu para preencher a lacuna entre o potencial da IA e sua aplicação prática no mundo empresarial.
              </p>
              <p>
                Desde o início, focamos em desenvolver soluções que entregam resultados reais: aumento de vendas, redução de custos,
                melhoria no atendimento ao cliente e otimização de processos. Cada projeto é uma oportunidade de provar que a IA,
                quando bem implementada, transforma negócios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nossas <span className="text-primary">Soluções de IA</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tecnologias avançadas para automatizar e potencializar seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos Section (reutilizando a seção da página Planos) */}
      <section id="planos" className="py-20 bg-background">
        <ProcessSection />
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos prontos para transformar seu negócio com Inteligência Artificial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
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
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">animaai@animaaagencia.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone / WhatsApp</h4>
                    <p className="text-muted-foreground">(44) 99853-7443</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localização</h4>
                    <p className="text-muted-foreground">Florianópolis, SC - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button onClick={handleWhatsAppClick} className="w-full sm:w-auto">
                  <Phone className="mr-2" size={18} />
                  Conversar no WhatsApp
                </Button>
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
