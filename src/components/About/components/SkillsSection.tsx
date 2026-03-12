import React, { useState } from "react";
import { Skill } from "../data/aboutData";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-10">
        <div className="accent-line mx-auto mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold text-claude-text mb-2">
          Technical Skills
        </h2>
        <p className="text-claude-text-secondary text-sm">
          Tools and technologies I work with daily
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeCategory === index
                ? "bg-claude-accent text-white shadow-soft"
                : "bg-claude-surface-alt text-claude-text-secondary hover:text-claude-text border border-claude-border"
            }`}
          >
            {skill.category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`transition-all duration-400 ${
              activeCategory === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="card-base">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-claude-text mb-2">
                  {skill.category}
                </h3>
                <p className="text-claude-text-secondary text-sm">
                  {skill.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {skill.technologies.map((tech, techIndex) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={techIndex}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-claude-surface-alt/50 border border-transparent hover:border-claude-accent/20 hover:bg-claude-accent/5 transition-all duration-200 cursor-default"
                    >
                      <Icon className="w-5 h-5 text-claude-accent shrink-0" />
                      <span className="text-sm font-medium text-claude-text group-hover:text-claude-accent transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
