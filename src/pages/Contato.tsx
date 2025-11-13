import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// URL DO ENDPOINT DO FIREBASE FUNCTIONS (troque depois do deploy)
const SEND_EMAIL_URL =
  "https://southamerica-east1-anima-ai-site.cloudfunctions.net/sendContactEmail";

/** ✅ Seção Reutilizável de Contato */
export const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha nome, e-mail e WhatsApp.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro ao enviar e-mail");

      toast({
        title: "Mensagem enviada!",
        description: "Retornaremos o contato em breve.",
      });

      setFormData({
        name: "",
        company: "",
        whatsapp: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre as soluções de IA da Ânima AI."
    );
    window.open(`https://wa.me/5544998537443?text=${message}`, "_blank");
  };

  return (
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
        {/* Informações de contato */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Fale Conosco</h3>
          <p className="text-muted-foreground mb-8">
            Nossa equipe de especialistas está pronta para entender suas necessidades
            e apresentar a melhor solução de IA para o seu negócio.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-muted-foreground">E-mail</h4>
                <p className="text-white">animaai@animaaagencia.com.br</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-muted-foreground">WhatsApp</h4>
                <p className="text-white">(44) 99853-7443</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-muted-foreground">Localização</h4>
                <p className="text-white">Florianópolis, SC - Brasil</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button className="w-full sm:w-auto" onClick={handleWhatsAppClick}>
              <Phone className="mr-2" size={18} />
              Falar no WhatsApp
            </Button>
          </div>
        </div>

        {/* Formulário */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
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
                placeholder="Nome da sua empresa"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="whatsapp">WhatsApp *</Label>
              <Input
                id="whatsapp"
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
                rows={4}
                placeholder="Conte-nos sobre suas necessidades..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              <Send className="mr-2" size={18} />
              {loading ? "Enviando..." : "Quero Automatizar meu Negócio"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

/** 🌐 Página completa /contato */
const Contato = () => {
  return (
    <div className="min-h-screen bg-dark-graphite">
      <Navbar />
      <section className="pt-32 pb-20 bg-dark-graphite">
        <ContactSection />
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contato;
