import React, { useState, useEffect, useRef } from "react";
import { GraduationCap, Code } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  year: string;
  description: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  year,
  description,
  icon,
  skills,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="card-base">
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div className="w-10 h-10 rounded-xl bg-claude-accent/10 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-claude-text">
            {title}
          </h3>
          <span className="text-sm text-claude-text-muted">{year}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-claude-text-secondary text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Skills */}
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-claude-text">
                {skill.name}
              </span>
              <span className="text-xs font-medium text-claude-text-muted">
                {skill.level}%
              </span>
            </div>

            <div className="h-1.5 bg-claude-surface-alt rounded-full overflow-hidden">
              <div
                className="h-full bg-claude-accent rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${skill.level}%` : "0%",
                  transitionDelay: `${skillIndex * 150}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsView: React.FC = () => {
  const skillsData = [
    {
      title: "Web Developer",
      year: "2019 - 2023",
      description:
        "Utilized HTML and CSS to build responsive, user-friendly web pages. Focused on creating clean, semantic markup and styled components with modern design principles.",
      icon: <GraduationCap size={20} className="text-claude-accent" />,
      skills: [
        { name: "HTML5", level: 91 },
        { name: "CSS3", level: 88 },
        { name: "JavaScript", level: 80 },
      ],
    },
    {
      title: "React Developer",
      year: "2023 - Present",
      description:
        "Started using React.js to build dynamic, component-based web applications, and adopted Tailwind CSS for efficient, utility-first styling.",
      icon: <Code size={20} className="text-claude-accent" />,
      skills: [
        { name: "React.js", level: 91 },
        { name: "Tailwind CSS", level: 88 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 72 },
      ],
    },
  ];

  return (
    <section id="skill" className="section-padding bg-claude-bg">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title mb-4">Education & Skills</h2>
          <p className="section-subtitle">
            My journey of continuous learning and growth
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillsData.map((data, index) => (
            <SkillCard
              key={index}
              title={data.title}
              year={data.year}
              description={data.description}
              icon={data.icon}
              skills={data.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsView;
