import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Shield, Rocket } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-primary">Ânima AI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transformando empresas através da Inteligência Artificial
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-card border-primary/20">
              <h2 className="text-3xl font-bold mb-6 text-center">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground text-center mb-6">
                <strong className="text-primary">Tornar a Inteligência Artificial acessível, eficiente e lucrativa para empresas reais.</strong>
              </p>
              <p className="text-muted-foreground text-center">
                Acreditamos que toda empresa, independente do tamanho, merece ter acesso às tecnologias mais avançadas de IA. 
                Nossa missão é democratizar o uso da Inteligência Artificial, oferecendo soluções que geram resultados práticos e mensuráveis.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Nossos <span className="text-primary">Valores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card hover:border-primary/50 transition-all">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossa História</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                A Ânima AI nasceu da visão de que a Inteligência Artificial poderia ser mais do que uma tecnologia complexa e inacessível. 
                Fundada por especialistas em IA e negócios, nossa empresa surgiu para preencher a lacuna entre o potencial da IA e sua aplicação prática no mundo empresarial.
              </p>
              <p>
                Desde o início, focamos em desenvolver soluções que entregam resultados reais: aumento de vendas, redução de custos, 
                melhoria no atendimento ao cliente e otimização de processos. Cada projeto é uma oportunidade de provar que a IA, 
                quando bem implementada, transforma negócios.
              </p>
              <p>
                Hoje, atendemos empresas de diversos segmentos, sempre com o compromisso de entregar tecnologia de ponta 
                aliada a um profundo entendimento das necessidades de cada cliente. Nossa jornada é guiada pela inovação constante 
                e pelo impacto positivo que geramos nos negócios dos nossos parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
