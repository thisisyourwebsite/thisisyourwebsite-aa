import { Linkedin, Mail, FileText, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Tanışalım mı?",
    subtitle: "Kahve içmek ve büyüme stratejileri konuşmak için her zaman vaktim var.",
    linkedin: "LinkedIn Profilim",
    email: "E-Posta Gönder",
    cv: "CV İndir",
    coffee: "Bir Kahve İç",
  },
  en: {
    title: "Ready to Scale?",
    subtitle: "Always have time for coffee and growth strategy conversations.",
    linkedin: "LinkedIn Profile",
    email: "Send Email",
    cv: "Download CV",
    coffee: "Grab Coffee",
  },
};

const ContactSection = ({ lang }: ContactSectionProps) => {
  const t = content[lang];

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Coffee emoji animation */}
          <div className="mb-8 animate-float">
            <span className="text-6xl">☕</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">{t.title}</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary - LinkedIn */}
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] w-full sm:w-auto"
            >
              <a
                href="https://www.linkedin.com/in/alpaslanarinc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {t.linkedin}
              </a>
            </Button>

            {/* Secondary - Email */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-border hover:border-primary hover:bg-primary/5 font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 w-full sm:w-auto"
            >
              <a href="mailto:alpaslan.arinc@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {t.email}
              </a>
            </Button>

            {/* CV Download */}
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group hover:bg-muted font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 w-full sm:w-auto"
            >
              <a
                href="https://www.linkedin.com/in/alpaslanarinc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {t.cv}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
