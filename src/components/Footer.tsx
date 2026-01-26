import { Linkedin, Heart } from "lucide-react";

interface FooterProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    copyright: "© 2025 Alpaslan Arınç. Tüm hakları saklıdır.",
    made: "ile yapıldı",
  },
  en: {
    copyright: "© 2025 Alpaslan Arınç. All rights reserved.",
    made: "Made with",
  },
};

const Footer = ({ lang }: FooterProps) => {
  const t = content[lang];

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {t.copyright}
          </p>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t.made} <Heart className="w-4 h-4 text-primary fill-primary" /> Istanbul
          </p>

          {/* Social */}
          <a
            href="https://www.linkedin.com/in/alpaslanarinc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
