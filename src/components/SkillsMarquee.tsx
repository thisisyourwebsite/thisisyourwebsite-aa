const skills = [
  "AI & No-Code Solutions",
  "Strategic Marketing",
  "P&L Management",
  "Global Expansion",
  "Team Coaching",
  "Crisis Management",
  "Rebranding",
  "Digital Transformation",
  "Sales Development",
  "Brand Strategy",
  "Market Positioning",
  "Stakeholder Management",
];

const SkillsMarquee = () => {
  // Double the skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedSkills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center mx-8 text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground/20 hover:text-primary transition-colors duration-300"
            >
              {skill}
              <span className="mx-8 text-primary">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
