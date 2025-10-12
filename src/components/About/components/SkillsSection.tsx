import React, { useState } from "react";
import { Skill } from "../data/aboutData";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Skills
          </span>
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
              activeCategory === index
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/50"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {skill.category}
          </button>
        ))}
      </div>

      {/* Content Card */}
      <div className="relative">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              activeCategory === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 sm:p-8 shadow-2xl border border-gray-700">
              {/* Category Title & Description */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  {skill.category}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {skill.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative bg-gray-700/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl text-center hover:bg-gradient-to-br hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-transparent hover:border-yellow-500/30 cursor-pointer"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${
                        techIndex * 0.05
                      }s both`,
                    }}
                  >
                    <span className="text-white text-sm sm:text-base font-medium group-hover:text-yellow-400 transition-colors">
                      {tech}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-orange-500/0 group-hover:from-yellow-400/5 group-hover:to-orange-500/5 rounded-xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
