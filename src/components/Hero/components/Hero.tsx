import React from "react";
import Particles from "../../Particles";
import bannerImage from "../../../assets/images/banner.jpg";
import TextEffects from "./TextEffects";
import Image from "../../../assets/images/img1.png";
import {
  ArrowDownTrayIcon,
  ChevronRightIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";
import cv from "../../../assets/files/NWAOLISA JUDE CHIDERA CV.pdf";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02050a]/90 via-[#121121]/85 to-[#02050a]/90"></div>

      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#55e6a5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-[#55e6a5]/10 border border-[#55e6a5]/30 rounded-full backdrop-blur-sm animate-fade-in">
              <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#55e6a5] animate-pulse-slow" />
              <span className="text-xs sm:text-sm font-medium text-[#55e6a5] uppercase tracking-wider">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up">
                <span className="text-white">HI, I'M </span>
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-gradient">
                    JUDE
                  </span>
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-transparent animate-expand"></span>
                </span>
              </h1>

              {/* Text Effects Component */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <TextEffects />
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              I'm passionate about building innovative and user-centric
              solutions that bring ideas to life. With expertise in front-end
              development, transforming ideas into interactive and responsive
              digital experiences.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              {/* Download CV Button */}
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cv;
                  link.download = "NWAOLISA JUDE CHIDERA CV.pdf";
                  link.click();
                }}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#55e6a5] to-[#3ac47d] text-black font-bold uppercase rounded-xl overflow-hidden shadow-lg shadow-[#55e6a5]/30 hover:shadow-2xl hover:shadow-[#55e6a5]/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {/* Button shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></span>

                <span className="relative flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg">
                  <span>Download CV</span>
                  <ArrowDownTrayIcon className="w-4 h-4 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                </span>
              </button>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-[#55e6a5] text-[#55e6a5] font-bold uppercase rounded-xl overflow-hidden hover:text-black transition-colors duration-300 transform hover:scale-105 active:scale-95"
              >
                {/* Hover fill effect */}
                <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-[#55e6a5] to-[#3ac47d] transition-all duration-300 group-hover:w-full"></span>

                <span className="relative flex items-center justify-center gap-2 text-sm sm:text-lg">
                  <span>View Projects</span>
                  <ChevronRightIcon className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Stats or Social Links */}
            <div
              className="flex items-center gap-4 sm:gap-8 pt-4 animate-fade-in-up"
              style={{ animationDelay: "800ms" }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                  Years Exp
                </div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-gray-700"></div>
              {/* <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">30+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                  Clients
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="hidden lg:flex justify-center items-center animate-slide-in-right">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative w-[350px] h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
                {/* Image with gradient border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#55e6a5] via-yellow-400 to-blue-400 p-1">
                  <div className="w-full h-full rounded-full bg-[#1e1e35] overflow-hidden">
                    <img
                      src={Image}
                      alt="Profile"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#55e6a5] to-yellow-400 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 animate-pulse-glow"></div>

                {/* Floating particles around image */}
                <div className="absolute -top-4 -right-4 w-6 h-6 xl:w-8 xl:h-8 bg-yellow-400 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 xl:w-6 xl:h-6 bg-[#55e6a5] rounded-full animate-float animation-delay-1000"></div>
                <div className="absolute top-1/4 -left-6 w-3 h-3 xl:w-4 xl:h-4 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
                <div className="absolute bottom-1/4 -right-6 w-4 h-4 xl:w-5 xl:h-5 bg-yellow-400 rounded-full animate-float animation-delay-3000"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 xl:w-40 xl:h-40 border-4 border-[#55e6a5]/20 rounded-full animate-ping-slow"></div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-24 h-24 xl:w-32 xl:h-32 border-4 border-yellow-400/20 rounded-full animate-ping-slow animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            Scroll Down
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#55e6a5]/50 rounded-full flex justify-center p-1 sm:p-2">
            <div className="w-1 h-2 sm:h-3 bg-[#55e6a5] rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
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

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
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

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-expand {
          animation: expand 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
