import { ArrowDownTrayIcon, SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";
import Image from "../../../assets/images/img2.jpg";
import cv from "../../../assets/files/PEDRO CV.pdf";
import { aboutSections, skillsData } from "../data/aboutData";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";

const About: React.FC = () => {
  return (
    <div
      className="relative bg-gradient-to-b from-[#121121] via-[#1a1832] to-[#121121] pb-20 pt-32 md:pt-28 overflow-hidden"
      id="about"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#55e6a5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#55e6a5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Badge */}
        <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-[#55e6a5]/10 border border-[#55e6a5]/30 rounded-full backdrop-blur-sm">
            <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#55e6a5]" />
            <span className="text-xs sm:text-sm font-medium text-[#55e6a5] uppercase tracking-wider">
              Get to Know Me
            </span>
          </div>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-20">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
            {/* Title */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#55e6a5] to-[#3ac47d] animate-gradient">
                About Me
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-white">Transforming </span>
                <span className="relative inline-block">
                  <span className="text-yellow-400">Visions</span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-transparent"></span>
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Into Reality Through Code & Creativity
              </p>
            </div>

            {/* About Sections with Stagger Animation */}
            <div className="space-y-4 sm:space-y-6">
              {aboutSections.map((section, index) => (
                <div
                  key={section.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <AboutSection section={section} index={index} />
                </div>
              ))}
            </div>

            {/* Download Button */}
            <div
              className="pt-3 sm:pt-4 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cv;
                  link.download = "NWAOLISA JUDE CHIDERA CV.pdf";
                  link.click();
                }}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#55e6a5] to-[#3ac47d] text-black font-bold uppercase rounded-xl overflow-hidden shadow-lg shadow-[#55e6a5]/30 hover:shadow-2xl hover:shadow-[#55e6a5]/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-sm sm:text-lg">Download CV</span>
                  <ArrowDownTrayIcon className="w-4 h-4 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] z-20">
                <img
                  src={Image}
                  alt="Profile"
                  className="relative z-30 w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121121] via-transparent to-transparent rounded-2xl opacity-60 z-40"></div>

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#55e6a5] to-yellow-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-10"></div>
              </div>

              {/* Background Accent - Animated */}
              <div className="absolute w-full h-full bg-gradient-to-br from-[#55e6a5] to-[#3ac47d] top-4 right-4 sm:top-6 sm:right-6 rounded-2xl z-10 transform group-hover:rotate-3 group-hover:scale-105 transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Skills Section with Animation */}
        <div className="animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <SkillsSection skills={skillsData} />
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
