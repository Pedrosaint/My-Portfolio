import React from "react";
import { AboutSection as AboutSectionType } from "../data/aboutData";

interface AboutSectionProps {
  section: AboutSectionType;
  index: number;
}

const AboutSection: React.FC<AboutSectionProps> = ({ section }) => {
  return (
    <div className="group p-5 rounded-xl border border-transparent hover:border-claude-border hover:bg-claude-surface-alt/50 transition-all duration-300">
      <h3 className="text-base font-semibold text-claude-accent mb-2">
        {section.title}
      </h3>
      <p className="text-[15px] text-claude-text-secondary leading-relaxed">
        {section.content}
      </p>
    </div>
  );
};

export default AboutSection;
