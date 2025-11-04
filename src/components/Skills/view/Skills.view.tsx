import React, { useState } from "react";
import { GraduationCap, Code, Sparkles, TrendingUp } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCardProps {
  title: string;
  year: string;
  description: string;
  icon: React.ReactNode;
  skills: Skill[];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  year,
  description,
  icon,
  skills,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
      }}
    >
      {/* Card Container */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:-translate-y-2">
        {/* Background Glow Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Floating Orbs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-150" />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  {icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-400">
                      {year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6 text-sm">
            {description}
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6" />

          {/* Skills Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <TrendingUp size={16} className="text-yellow-400" />
              Skill Proficiency
            </h4>

            {skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="space-y-2"
                style={{
                  animation: `slideInRight 0.5s ease-out ${
                    skillIndex * 0.1
                  }s both`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    {skill.name}
                  </span>
                  <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  {/* Background Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />

                  {/* Progress Fill */}
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{
                      width: isHovered ? `${skill.level}%` : "0%",
                    }}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl transform transition-transform duration-500 group-hover:scale-150" />
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
        "Utilized HTML and CSS to build responsive, user-friendly web pages. Focused on creating clean, semantic markup and styled components with modern design principles to ensure consistency across different devices.",
      icon: <GraduationCap size={24} className="text-white" />,
      skills: [
        { name: "HTML5", level: 91, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 88, color: "from-blue-500 to-cyan-500" },
        {
          name: "JavaScript",
          level: 80,
          color: "from-yellow-400 to-orange-500",
        },
      ],
    },
    {
      title: "React Developer",
      year: "2023 - Present",
      description:
        "Started using React.js to build dynamic, component-based web applications, and adopted Tailwind CSS for efficient, utility-first styling. Focused on improving UI responsiveness and development speed.",
      icon: <Code size={24} className="text-white" />,
      skills: [
        { name: "React.js", level: 91, color: "from-cyan-400 to-blue-500" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-cyan-500" },
        {
          name: "JavaScript",
          level: 80,
          color: "from-yellow-400 to-orange-500",
        },
        { name: "TypeScript", level: 72, color: "from-blue-600 to-indigo-600" },
      ],
    },
  ];

  return (
    <div
      id="skill"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-yellow-400 animate-pulse" size={32} />
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              Education &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Skills
              </span>
            </h1>
            <Sparkles className="text-yellow-400 animate-pulse" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">
            My journey of continuous learning and growth
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.map((data, index) => (
            <SkillCard
              key={index}
              title={data.title}
              year={data.year}
              description={data.description}
              icon={data.icon}
              skills={data.skills}
              index={index}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </div>
  );
};

export default SkillsView;
