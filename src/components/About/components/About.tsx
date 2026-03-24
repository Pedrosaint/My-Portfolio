import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import React from "react";
import cv from "../../../assets/files/PEDRO CV.pdf";
import { aboutSections, skillsData } from "../data/aboutData";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-claude-surface">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title mb-4">About Me</h2>
          <p className="section-subtitle">
            Passionate about crafting scalable, intuitive, and modern web
            experiences that merge creativity and technology.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column - About Sections */}
          <div className="space-y-2">
            {aboutSections.map((section, index) => (
              <AboutSection key={section.id} section={section} index={index} />
            ))}

            <div className="pt-4 pl-5">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cv;
                  link.download = "NWAOLISA_JUDE_CHIDERA_CV.pdf";
                  link.click();
                }}
                className="group flex items-center gap-2.5 px-6 py-3 bg-claude-accent text-white font-medium rounded-xl hover:bg-claude-accent-hover transition-all duration-300 shadow-soft hover:shadow-card"
              >
                <span>Download CV</span>
                <ArrowDownTrayIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Recruiter Snapshot */}
          <div className="rounded-2xl bg-claude-surface-alt border border-claude-border p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-claude-text mb-4">
              A Recruiter's Snapshot
            </h3>
            <div className="space-y-4 text-claude-text-secondary leading-relaxed text-[15px]">
              <p>
                I'm a Frontend Engineer with strong expertise in React,
                TypeScript, Redux Toolkit, and Tailwind CSS. I've built
                production applications with clean architecture, efficient
                state management, and production-ready code.
              </p>
              <p>
                My experience covers building multi-step workflows, role-based
                dashboards, and secure API integrations — delivering scalable
                and high-performance digital experiences.
              </p>
              <p>
                I also leverage AI tools like Claude, ChatGPT, and GitHub
                Copilot to accelerate development — from building quick
                prototypes and fixing bugs to reviewing code and writing
                repetitive starter code. This allows me to ship faster
                without compromising quality.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <SkillsSection skills={skillsData} />
      </div>
    </section>
  );
};

export default About;
