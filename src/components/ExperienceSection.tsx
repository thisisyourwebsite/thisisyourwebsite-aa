import { Zap, TrendingUp, Building2, Coffee, Factory, Smartphone } from "lucide-react";

interface ExperienceSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Kariyer",
    titleHighlight: "Kilometre Taşları",
    experiences: [
      {
        icon: Zap,
        company: "Evrim Software",
        role: "Chief Marketing Officer",
        period: "2020 - Günümüz",
        metric: "2.5x",
        metricLabel: "Gelir Artışı",
        description: "Geleneksel bir yazılım şirketini; yeni marka kimliği, bulut tabanlı ürünler (EvrimX) ve Londra ofisi vizyonuyla global bir oyuncuya dönüştürdük.",
        tags: ["#Rebranding", "#SaaS", "#GlobalExpansion"],
        color: "primary",
      },
      {
        icon: TrendingUp,
        company: "Keller Williams",
        role: "Business Development Director",
        period: "2016 - 2019",
        metric: "$5.7M",
        metricLabel: "Yatırım Hacmi",
        description: "İki yıl durağanlaşmış bir operasyonu devralıp, Türkiye genelinde 170% coğrafi büyüme ile ulusal bir marka haline getirdim.",
        tags: ["#GrowthHacking", "#RealEstate", "#Franchising"],
        color: "accent",
      },
      {
        icon: Smartphone,
        company: "Mobilera",
        role: "Yönetim Kurulu Üyesi",
        period: "2010 - 2014",
        metric: "€4M",
        metricLabel: "Hisse Transferi",
        description: "Akıllı şehir projeleri ve Bodrum'u teknoloji destinasyonuna dönüştürme vizyonunu yönettim.",
        tags: ["#SmartCity", "#Tech", "#Innovation"],
        color: "primary",
      },
      {
        icon: Building2,
        company: "Converse",
        role: "General Manager - 5 Ülke",
        period: "2005 - 2009",
        metric: "$122M",
        metricLabel: "Toplam Gelir",
        description: "5 ülkede 4 şirketi yönettim. Satışları %5, net kârı %9 artırırken Converse perakende konseptini baştan yarattım.",
        tags: ["#Retail", "#Fashion", "#MultiCountry"],
        color: "accent",
      },
      {
        icon: Coffee,
        company: "Barilla",
        role: "Sales & Trade Marketing Manager",
        period: "2001 - 2005",
        metric: "#1",
        metricLabel: "Pazar Liderliği",
        description: "Barilla'yı Türkiye'de makarna kategorisinde pazar lideri yapan ekibin parçasıydım.",
        tags: ["#FMCG", "#TradeMarketing", "#MarketLeader"],
        color: "primary",
      },
      {
        icon: Factory,
        company: "Toyota",
        role: "Supervisor / Marketing",
        period: "1993 - 2001",
        metric: "Kaizen",
        metricLabel: "Disiplini",
        description: "Toyota'nın efsanevi Kaizen felsefesini ve operasyonel mükemmelliği sahada öğrendim.",
        tags: ["#Automotive", "#Kaizen", "#Foundation"],
        color: "accent",
      },
    ],
  },
  en: {
    title: "Career",
    titleHighlight: "Milestones",
    experiences: [
      {
        icon: Zap,
        company: "Evrim Software",
        role: "Chief Marketing Officer",
        period: "2020 - Present",
        metric: "2.5x",
        metricLabel: "Revenue Growth",
        description: "Transformed a traditional software company into a global player with new brand identity, cloud products (EvrimX), and London office vision.",
        tags: ["#Rebranding", "#SaaS", "#GlobalExpansion"],
        color: "primary",
      },
      {
        icon: TrendingUp,
        company: "Keller Williams",
        role: "Business Development Director",
        period: "2016 - 2019",
        metric: "$5.7M",
        metricLabel: "Investment Volume",
        description: "Took over a stagnant operation and turned it into a national brand with 170% geographic expansion across Turkey.",
        tags: ["#GrowthHacking", "#RealEstate", "#Franchising"],
        color: "accent",
      },
      {
        icon: Smartphone,
        company: "Mobilera",
        role: "Board Member (VP Operations)",
        period: "2010 - 2014",
        metric: "€4M",
        metricLabel: "Share Transfer",
        description: "Led smart city projects and the vision to transform Bodrum into a technology destination.",
        tags: ["#SmartCity", "#Tech", "#Innovation"],
        color: "primary",
      },
      {
        icon: Building2,
        company: "Converse",
        role: "General Manager - 5 Countries",
        period: "2005 - 2009",
        metric: "$122M",
        metricLabel: "Total Revenue",
        description: "Managed 4 companies in 5 countries. Increased sales by 5%, net profit by 9% while reinventing Converse retail concept.",
        tags: ["#Retail", "#Fashion", "#MultiCountry"],
        color: "accent",
      },
      {
        icon: Coffee,
        company: "Barilla",
        role: "Sales & Trade Marketing Manager",
        period: "2001 - 2005",
        metric: "#1",
        metricLabel: "Market Leadership",
        description: "Part of the team that made Barilla the market leader in pasta category in Turkey.",
        tags: ["#FMCG", "#TradeMarketing", "#MarketLeader"],
        color: "primary",
      },
      {
        icon: Factory,
        company: "Toyota",
        role: "Supervisor / Marketing",
        period: "1993 - 2001",
        metric: "Kaizen",
        metricLabel: "Discipline",
        description: "Learned Toyota's legendary Kaizen philosophy and operational excellence in the field.",
        tags: ["#Automotive", "#Kaizen", "#Foundation"],
        color: "accent",
      },
    ],
  },
};

const ExperienceSection = ({ lang }: ExperienceSectionProps) => {
  const t = content[lang];

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            {t.title}{" "}
            <span className="text-gradient">{t.titleHighlight}</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {t.experiences.map((exp, index) => (
            <div
              key={index}
              className={`bento-card group ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${exp.color === "primary" ? "bg-primary/10" : "bg-accent/10"}`}>
                    <exp.icon className={`w-6 h-6 ${exp.color === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>

              {/* Metric */}
              <div className="mb-4">
                <p className={`font-display text-4xl md:text-5xl font-bold ${exp.color === "primary" ? "text-primary" : "text-accent"}`}>
                  {exp.metric}
                </p>
                <p className="text-sm text-muted-foreground">{exp.metricLabel}</p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs text-primary/80 bg-primary/5 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
