import { Cpu, Lightbulb, Rocket } from "lucide-react";

interface InnovationSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Sürekli",
    titleHighlight: "Öğreniyorum",
    subtitle: "Tecrübe, eski yöntemlere saplanıp kalmak değildir.",
    cards: [
      {
        icon: Cpu,
        title: "Bugün",
        description: "İş süreçlerini optimize etmek için AI ve Low-code çözümlerini aktif kullanıyorum.",
      },
      {
        icon: Lightbulb,
        title: "Dün",
        description: "Mobilera'da 'Akıllı Şehir' projelerini ve teknoloji vizyonunu yönettim.",
      },
      {
        icon: Rocket,
        title: "Yarın",
        description: "Sizin şirketinizde neyi değiştireceğiz?",
      },
    ],
  },
  en: {
    title: "Keeping it",
    titleHighlight: "Fresh",
    subtitle: "Experience doesn't mean being stuck in old ways.",
    cards: [
      {
        icon: Cpu,
        title: "Today",
        description: "Actively using AI and Low-code solutions to optimize business processes.",
      },
      {
        icon: Lightbulb,
        title: "Yesterday",
        description: "Led 'Smart City' projects and technology vision at Mobilera.",
      },
      {
        icon: Rocket,
        title: "Tomorrow",
        description: "What will we change at your company?",
      },
    ],
  },
};

const InnovationSection = ({ lang }: InnovationSectionProps) => {
  const t = content[lang];

  return (
    <section id="innovation" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t.title}{" "}
            <span className="text-gradient">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.cards.map((card, index) => (
            <div
              key={index}
              className="bento-card text-center group"
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-gradient">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
