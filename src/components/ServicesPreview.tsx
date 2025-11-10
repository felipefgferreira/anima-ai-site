import { Bot, TrendingUp, Headphones, Calendar, Building2, CreditCard } from "lucide-react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const services = [
  {
    icon: Bot,
    title: "IA para WhatsApp",
    description: "Chatbots inteligentes com linguagem natural e respostas automáticas 24/7",
  },
  {
    icon: TrendingUp,
    title: "IA para Vendas",
    description: "Agentes SDR e Closer que qualificam leads e aumentam conversões",
  },
  {
    icon: Headphones,
    title: "Suporte Automatizado",
    description: "Atendimento inteligente que resolve problemas sem intervenção humana",
  },
  {
    icon: Calendar,
    title: "Assistente Executivo",
    description: "Gerencia e-mails, agenda, planilhas e tarefas administrativas",
  },
  {
    icon: Building2,
    title: "IA para Imobiliárias",
    description: "Agente especializado em vendas e locação de imóveis",
  },
  {
    icon: CreditCard,
    title: "Concierge de Pagamentos",
    description: "Automatiza cobranças, envios de links e follow-up financeiro",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções de <span className="text-primary">IA</span> para seu Negócio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologia de ponta para automatizar processos e impulsionar resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/servicos">Ver Todos os Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
