import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, Zap, Crown } from "lucide-react";

const Planos = () => {
  const plans = [
    {
      name: "Start",
      icon: Sparkles,
      price: "R$ 497",
      period: "/mês",
      description: "Ideal para pequenos negócios que querem começar com IA",
      features: [
        "IA para WhatsApp (até 1.000 conversas/mês)",
        "Suporte básico por e-mail",
        "Dashboard de métricas",
        "Treinamento inicial da IA",
        "1 integração incluída",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      icon: Zap,
      price: "R$ 1.497",
      period: "/mês",
      description: "Solução completa para empresas em crescimento",
      features: [
        "Todos os recursos do plano Start",
        "IA para Vendas (SDR + Closer)",
        "Follow-up inteligente automatizado",
        "Conversas ilimitadas",
        "Suporte prioritário via WhatsApp",
        "Dashboard avançado de performance",
        "Até 5 integrações",
        "Reuniões mensais de otimização",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Sob consulta",
      period: "",
      description: "Soluções personalizadas para grandes operações",
      features: [
        "Todos os recursos do plano Pro",
        "Assistente Executivo com IA",
        "Soluções 100% personalizadas",
        "Integrações ilimitadas",
        "API dedicada",
        "Suporte 24/7 com SLA garantido",
        "Gerente de conta dedicado",
        "Treinamento contínuo da equipe",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Planos</span> e Preços
            </h1>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para o crescimento do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.highlighted
                    ? "border-primary border-2 shadow-lg shadow-primary/20"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className={`w-full ${
                    !plan.highlighted ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" : ""
                  }`}
                  asChild
                >
                  <Link to="/contato">
                    {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Agora"}
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Dúvidas <span className="text-primary">Frequentes</span>
            </h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Posso mudar de plano depois?</h3>
                <p className="text-muted-foreground">
                  Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                  As mudanças entram em vigor no próximo ciclo de faturamento.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Existe período de teste?</h3>
                <p className="text-muted-foreground">
                  Oferecemos demonstração gratuita para você conhecer nossas soluções antes de contratar. 
                  Entre em contato para agendar.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como funciona a implementação?</h3>
                <p className="text-muted-foreground">
                  Nossa equipe cuida de todo o processo: desde a configuração inicial até o treinamento da IA 
                  com os dados do seu negócio. O prazo médio é de 7 a 14 dias.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Planos;
