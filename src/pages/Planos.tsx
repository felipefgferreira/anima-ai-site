import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, Zap, Crown } from "lucide-react";
import { motion } from "framer-motion";

/** 🔁 Fonte única de verdade dos caminhos do processo */
const paths = [
  {
    name: "Diagnóstico personalizado",
    icon: Sparkles,
    tagline: "Analisamos sua empresa e propomos o melhor caminho",
    description:
      "Avaliamos seus processos, metas e pontos de dor para identificar onde a IA gera mais impacto.",
    details: [
      "Entrevista e mapeamento de processos",
      "Levantamento de dados e integrações",
      "Hipóteses de uso de IA com estimativa de ROI",
      "Roadmap com quick wins e próximos passos",
      "Proposta técnica e comercial",
    ],
    cta: "Falar com Especialista",
    highlighted: false,
  },
  {
    name: "Cocriação/aprimoramento",
    icon: Zap,
    tagline: "Você traz a ideia, nós elevamos e implementamos",
    description:
      "Se você já tem um projeto em mente, refinamos a estratégia, definimos KPIs e colocamos em produção com testes rápidos e melhoria contínua.",
    details: [
      "Revisão técnica do seu projeto",
      "Arquitetura de solução e segurança",
      "MVP em semanas com ciclos ágeis",
      "Métricas e otimizações mensais",
      "Onboarding e treinamento da equipe",
    ],
    cta: "Aprimorar meu projeto",
    highlighted: true,
  },
  {
    name: "Soluções prontas",
    icon: Crown,
    tagline: "Comece rápido com produtos já validados",
    description:
      "Escolha entre nossos módulos prontos — WhatsApp, Vendas, Suporte e Assistente Executivo — e personalize para sua operação.",
    details: [
      "Configuração guiada e rápida",
      "Treinamento com dados do seu negócio",
      "Integrações com CRM/ERP",
      "Dashboards prontos de performance",
      "Suporte e evolução contínua",
    ],
    cta: "Fale conosco",
    highlighted: false,
  },
];

// ✨ Animações com Framer Motion
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
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

/** ✅ Seção reaproveitável (sem Navbar/Footer) para usar dentro do Index */
export const ProcessSection = () => {
  const hasContato = typeof document !== "undefined" && !!document.getElementById("contato");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-third">Como funciona</span> nosso processo
        </h2>
        <p className="text-xl text-muted-foreground">
          Três caminhos para chegar no melhor resultado para a sua empresa — do diagnóstico à implementação.
        </p>
      </div>

      {/* Process Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {paths.map((path, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="will-change-transform"
          >
            <Card
              className={`p-8 relative transition-shadow duration-300 ${
                path.highlighted
                  ? "border-primary border-2 shadow-lg shadow-primary/20"
                  : "border-border hover:shadow-xl"
              }`}
            >
              {path.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Procurado
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <path.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-1">{path.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{path.tagline}</p>
                <p className="text-muted-foreground text-sm">{path.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {path.details.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={path.highlighted ? "default" : "outline"}
                className={`w-full ${
                  !path.highlighted
                    ? "border-primary hover:bg-primary hover:text-primary-foreground"
                    : ""
                }`}
                onClick={(e) => {
                  const onLanding = typeof document !== "undefined" && !!document.getElementById("contato");
                  if (onLanding) {
                    e.preventDefault();
                    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                asChild={!hasContato}
              >
                {hasContato ? (
                  <a href="#contato">{path.cta}</a>
                ) : (
                  <Link to="/contato">{path.cta}</Link>
                )}
              </Button>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQ */}
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-center mb-12">
          Dúvidas <span className="text-primary">Frequentes</span>
        </h3>
        <motion.div className="space-y-6">
          {[{
            q: "Qual caminho devo escolher?",
            a: (
              <>
                Se você ainda não tem clareza, comece pelo <strong>Diagnóstico personalizado</strong>. Já tem uma ideia? Vá de <strong>Cocriação</strong>. Quer velocidade? Escolha <strong>Soluções prontas</strong>.
              </>
            ),
          },
          {
            q: "Quanto tempo leva para ir ao ar?",
            a: (
              <>
                Em geral, um MVP leva de <strong>7 a 14 dias</strong> nas soluções prontas e de <strong>2 a 6 semanas</strong> em projetos de cocriação, variando conforme integrações e escopo.
              </>
            ),
          },
          {
            q: "Vocês personalizam as soluções prontas?",
            a: (
              <>
                Sim. Ajustamos fluxos, linguagem, dados de treino e integrações para refletir sua operação e branding.
              </>
            ),
          }].map((faq, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="will-change-transform"
            >
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

/** 🌐 Página completa /processo com Navbar/Footer (substitui /planos) */
const Processo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Como funciona</span> nosso processo
            </h1>
            <p className="text-xl text-muted-foreground">
              Escolha o melhor caminho para o seu momento — nós cuidamos do resto.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <ProcessSection />
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export { ProcessSection as PricingSection };
export default Processo;