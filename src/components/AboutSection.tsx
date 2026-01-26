import { TrendingUp, Users, Brain, Globe } from "lucide-react";

interface AboutSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Sadece Yönetmiyorum.",
    titleHighlight: "İnşa Ediyorum.",
    description: "30+ yıllık kariyerim sadece unvanlardan ibaret değil. Toyota'nın saha disiplininden, Converse'in sokak kültürüne, şimdi ise Evrim ile Tech dünyasına uzanan bir yolculuk.",
    quote: "Verilerle konuşur, insanlarla bağ kurarım. İstatistik ve ekonometri kökenliyim, bu yüzden verilere güvenirim. Ama işin kalbinin insan olduğunu bilirim.",
    stats: [
      { icon: TrendingUp, value: "30+", label: "Yıl Deneyim" },
      { icon: Users, value: "5", label: "Farklı Ülke" },
      { icon: Brain, value: "AI", label: "& No-Code" },
      { icon: Globe, value: "C-Level", label: "Liderlik" },
    ],
  },
  en: {
    title: "Not Just Managing.",
    titleHighlight: "Building.",
    description: "My 30+ year career isn't just about titles. It's a journey from Toyota's field discipline, to Converse's street culture, and now to the Tech world with Evrim.",
    quote: "I speak with data, connect with people. With a background in statistics and econometrics, I trust data. But I know the heart of business is human.",
    stats: [
      { icon: TrendingUp, value: "30+", label: "Years Experience" },
      { icon: Users, value: "5", label: "Countries" },
      { icon: Brain, value: "AI", label: "& No-Code" },
      { icon: Globe, value: "C-Level", label: "Leadership" },
    ],
  },
};

const AboutSection = ({ lang }: AboutSectionProps) => {
  const t = content[lang];

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            {t.title}{" "}
            <span className="text-gradient">{t.titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {t.description}
          </p>

          {/* Quote */}
          <blockquote className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
            <p className="text-xl md:text-2xl text-foreground/90 italic font-display leading-relaxed px-8">
              {t.quote}
            </p>
          </blockquote>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className="bento-card text-center group"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
