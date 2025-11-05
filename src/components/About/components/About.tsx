import { ArrowDownTrayIcon, SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";
import cv from "../../../assets/files/PEDRO CV.pdf";
import { aboutSections, skillsData } from "../data/aboutData";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#0f0f1a] via-[#18162a] to-[#0f0f1a] pt-28 pb-20 overflow-hidden"
    >
      {/* Blurred Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#55e6a5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#55e6a5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        {/* Header Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#55e6a5]/10 border border-[#55e6a5]/30 rounded-full backdrop-blur-sm">
            <SparklesIcon className="w-4 h-4 text-[#55e6a5]" />
            <span className="text-sm font-medium text-[#55e6a5] uppercase tracking-wider">
              Get to Know Me
            </span>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#55e6a5] to-[#3ac47d] mb-2">
            About Me
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Passionate about crafting scalable, intuitive, and modern web
            experiences that merge{" "}
            <span className="text-yellow-400">creativity</span> and{" "}
            <span className="text-[#55e6a5]">technology</span>.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            {aboutSections.map((section, index) => (
              <div
                key={section.id}
                className="transition-all duration-500 ease-out hover:translate-x-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AboutSection section={section} index={index} />
              </div>
            ))}

            {/* Download CV Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cv;
                  link.download = "PEDRO_SAINT_CV.pdf";
                  link.click();
                }}
                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#55e6a5] to-[#3ac47d] text-black font-semibold uppercase rounded-xl shadow-lg shadow-[#55e6a5]/30 hover:shadow-[#55e6a5]/50 transition-transform transform hover:scale-105 active:scale-95"
              >
                <span className="text-sm sm:text-base">Download CV</span>
                <ArrowDownTrayIcon className="w-5 h-5 group-hover:animate-bounce" />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-[#121121]/40 border border-[#55e6a5]/20 rounded-2xl p-6 md:p-10 shadow-lg shadow-[#55e6a5]/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              A Recruiter’s Snapshot
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I’m a Frontend Developer with strong expertise in React,
              TypeScript, Redux Toolkit, and Firebase. I also work with RESTful
              APIs and use tools like Postman to test and integrate real backend
              data into applications. My experience covers building dashboards,
              eCommerce systems, and job management platforms with clean,
              reusable, and scalable components.
            </p>

            <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
              I focus on creating modern, user-friendly interfaces that connect
              smoothly with backend services — ensuring everything works
              seamlessly from the data layer to the user’s screen. I emphasize
              clean architecture, efficient state management, and maintainable,
              production-ready code.
            </p>

            <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
              Currently, I’m advancing toward Full-Stack Development to combine
              my front-end expertise with backend logic — enabling me to build
              complete, robust, and reliable systems from start to finish.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fadeInUp">
          <SkillsSection skills={skillsData} />
        </div>
      </div>
    </section>
  );
};

export default About;
