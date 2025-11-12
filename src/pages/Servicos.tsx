import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Bot,
  TrendingUp,
  Headphones,
  Calendar,
  Building2,
  CreditCard,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

/** Dados únicos dos serviços */
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

// ✨ Variantes para animação
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** ✅ Seção reutilizável de Serviços (sem Navbar/Footer) */
export const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Nossas <span className="text-primary">Soluções de IA</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Tecnologias avançadas para automatizar e potencializar seu negócio
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="will-change-transform"
          >
            <Card
              className="
                relative p-8 transition-all duration-300
                border border-border bg-card
                hover:border-primary/90
                hover:shadow-[0_0_40px] hover:shadow-primary/50
                shadow-sm
              "
            >
              {/* Glow sutil interno (neon) */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-xl
                  opacity-0 hover:opacity-100 transition-opacity duration-300
                  ring-1 ring-primary/40
                "
              />

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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

/** 🌐 Página completa /servicos com Navbar/Footer */
const Servicos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossas <span className="text-primary">Soluções de IA</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tecnologias avançadas para automatizar e potencializar seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (reutilizável) */}
      <section className="py-20 bg-background">
        <ServicesSection />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Pronto para <span className="text-primary">Automatizar</span> seu Negócio?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Fale com nossos especialistas e descubra qual solução é ideal para você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contato">Falar com Especialista</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/planos">Ver Planos e Preços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicos;
