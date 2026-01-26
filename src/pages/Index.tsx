import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import InnovationSection from "@/components/InnovationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  const [lang, setLang] = useState<"tr" | "en">("tr");

  const toggleLang = () => {
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Language Switcher */}
      <LanguageSwitcher lang={lang} onToggle={toggleLang} />

      {/* Main Content */}
      <main>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <SkillsMarquee />
        <ExperienceSection lang={lang} />
        <InnovationSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default Index;
