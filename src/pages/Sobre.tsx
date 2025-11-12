import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lightbulb, Target, Shield, Rocket } from "lucide-react";

// Dados únicos da seção Sobre
const values = [
  {
    icon: Lightbulb,
    title: "Inovação e Proatividade",
    description:
      "Buscamos constantemente as mais avançadas tecnologias de IA para entregar soluções de ponta.",
  },
  {
    icon: Target,
    title: "Automação Humanizada",
    description:
      "Combinamos eficiência tecnológica com empatia e compreensão das necessidades humanas.",
  },
  {
    icon: Shield,
    title: "Ética e Transparência",
    description:
      "Desenvolvemos IA responsável, segura e alinhada com valores empresariais sólidos.",
  },
  {
    icon: Rocket,
    title: "Alta Performance",
    description:
      "Focamos em resultados mensuráveis que impactam diretamente o crescimento do seu negócio.",
  },
];

// Variantes de animação
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeCard = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ✅ Seção reutilizável (sem Navbar/Footer)
export const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Missão */}
      <motion.div
        className="max-w-4xl mx-auto mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          variants={fadeCard}
        >
          Sobre a <span className="text-third">Ânima AI</span>
        </motion.h2>

        <motion.div variants={fadeCard}>
          <Card className="relative p-8 md:p-12 bg-card border-primary/20 transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_40px] hover:shadow-primary/35">
            {/* Glow interno sutil */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 ring-1 ring-primary/30" />
            <h3 className="text-2xl font-bold mb-6 text-center">Nossa Missão</h3>
            <p className="text-lg text-muted-foreground text-center mb-6">
              <strong className="text-third">
                Tornar a Inteligência Artificial acessível, eficiente e lucrativa para empresas reais.
              </strong>
            </p>
            <p className="text-muted-foreground text-center">
              Acreditamos que toda empresa, independente do tamanho, merece ter acesso às tecnologias mais avançadas de IA.
              Nossa missão é tornar o uso da Inteligência Artificial acessível, oferecendo soluções que geram resultados
              práticos e mensuráveis.
            </p>
          </Card>
        </motion.div>
      </motion.div>

      {/* Valores */}
      <div className="max-w-5xl mx-auto">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          variants={fadeCard}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Nossos <span className="text-third">Valores</span>
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeCard}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="will-change-transform"
            >
              <Card className="relative p-6 bg-card border border-primary/20 transition-all duration-300 hover:border-primary/90 hover:shadow-[0_0_40px] hover:shadow-primary/45">
                {/* Glow interno sutil */}
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 ring-1 ring-primary/40" />
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* História */}
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3 className="text-2xl md:text-3xl font-bold text-center mb-12" variants={fadeCard}>
          Nossa <span className="text-third">História</span>
        </motion.h3>

        <motion.div className="space-y-6 text-muted-foreground" variants={fadeCard}>
          <p>
            A Ânima AI nasceu da visão de que a Inteligência Artificial pode ser muito mais do que uma tecnologia
            complexa e inacessível. Fundada por entusiastas de IA e negócios que se especializaram na área, nossa
            empresa surgiu para preencher a lacuna entre o potencial da IA e sua aplicação prática no mundo empresarial.
          </p>
          <p>
            Desde o início, focamos em desenvolver soluções que entregam resultados reais: aumento de vendas, redução
            de custos, melhoria no atendimento ao cliente e otimização de processos. Cada projeto é uma oportunidade
            de provar que a IA, quando bem implementada, transforma negócios.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

// 🌐 Página completa /sobre com Navbar/Footer
const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-primary">Ânima AI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tecnologia com propósito: IA acessível, eficiente e orientada a resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Seção reutilizável */}
      <section className="py-20 bg-background">
        <AboutSection />
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
