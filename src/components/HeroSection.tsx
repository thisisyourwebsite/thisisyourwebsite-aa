import { Linkedin, ArrowDown, Rocket } from "lucide-react";
import alpaslanPhoto from "@/assets/alpaslan-photo.jpeg";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    badge: "Yeni Maceralar İçin Hazırım",
    title: "Büyüme Mimarı.",
    subtitle: "30 yıllık global deneyim, yeni nesil vizyon.",
    description: "Toyota disiplinini AI vizyonuyla birleştiriyorum. C-Level tecrübe, startup enerjisi.",
    cta: "LinkedIn'de Bağlanalım",
    scroll: "Keşfet",
  },
  en: {
    badge: "Open to New Adventures",
    title: "Growth Architect.",
    subtitle: "30 years of global experience, next-gen vision.",
    description: "Blending Toyota discipline with AI innovation. C-Level expertise, startup energy.",
    cta: "Connect on LinkedIn",
    scroll: "Explore",
  },
};

const HeroSection = ({ lang }: HeroSectionProps) => {
  const t = content[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-in-up">
              <span className="badge-glow mb-6 inline-flex">
                <Rocket className="w-4 h-4" />
                {t.badge}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up animation-delay-200">
              <span className="text-gradient">{t.title}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-foreground/90 mb-4 animate-fade-in-up animation-delay-400 font-display">
              {t.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-600">
              {t.description}
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up animation-delay-800">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
              >
                <a
                  href="https://www.linkedin.com/in/alpaslanarinc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {t.cta}
                </a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl scale-90" />
              
              {/* Photo container */}
              <div className="relative photo-container w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
                <img
                  src={alpaslanPhoto}
                  alt="Alpaslan Arınç"
                  className="w-full h-full object-cover object-top rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Decorative badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-2 rounded-xl">
                <p className="font-display font-bold text-lg">CMO</p>
                <p className="text-sm text-muted-foreground">Evrim Software</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">{t.scroll}</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
