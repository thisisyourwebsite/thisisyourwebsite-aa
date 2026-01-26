interface LanguageSwitcherProps {
  lang: "tr" | "en";
  onToggle: () => void;
}

const LanguageSwitcher = ({ lang, onToggle }: LanguageSwitcherProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
    >
      <span className={`text-sm font-medium transition-colors ${lang === "tr" ? "text-primary" : "text-muted-foreground"}`}>
        TR
      </span>
      <div className="w-px h-4 bg-border" />
      <span className={`text-sm font-medium transition-colors ${lang === "en" ? "text-primary" : "text-muted-foreground"}`}>
        EN
      </span>
    </button>
  );
};

export default LanguageSwitcher;
