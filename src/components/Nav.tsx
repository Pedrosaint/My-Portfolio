import { Bars3Icon, SparklesIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

interface Props {
  openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "skill", label: "Skills", href: "#skill" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-[#141c27]/95 backdrop-blur-lg shadow-2xl border-b border-[#55e6a5]/10"
          : "bg-[#141c27]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="group relative flex items-center gap-1 sm:gap-2 cursor-pointer animate-fade-in"
          >
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#55e6a5] to-[#3ac47d] rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ">
                <SparklesIcon className="w-4 h-4 sm:w-6 sm:h-6 text-black animate-pulse-slow" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#55e6a5] rounded-lg opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
            </div>

            {/* Logo Text */}
            <div className="flex items-center">
              <span className="text-lg sm:text-2xl font-black text-white tracking-tight">
                WEB
              </span>
              <span className="text-lg sm:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 animate-gradient ml-0.5 sm:ml-1">
                DEV
              </span>
            </div>

            {/* Animated underline */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#55e6a5] to-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 animate-fade-in">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative px-3 py-2 xl:px-4 xl:py-2 text-xs xl:text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg group ${
                  activeSection === link.id
                    ? "text-[#55e6a5]"
                    : "text-gray-300 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Link Text */}
                <span className="relative z-10">{link.label}</span>

                {/* Active indicator */}
                {activeSection === link.id && (
                  <span className="absolute inset-0 bg-[#55e6a5]/10 rounded-lg animate-scale-in"></span>
                )}

                {/* Hover background */}
                <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                {/* Bottom indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#55e6a5] to-yellow-400 transition-all duration-300 ${
                    activeSection === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            className="hidden lg:block relative px-4 py-2 xl:px-6 xl:py-2.5 bg-gradient-to-r from-[#55e6a5] to-[#3ac47d] text-black font-bold uppercase text-xs xl:text-sm rounded-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300 animate-fade-in"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></span>

            <span className="relative z-10">Let's Talk</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={openNav}
            className="lg:hidden relative p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group animate-fade-in"
            aria-label="Open menu"
          >
            <Bars3Icon className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 group-hover:text-[#55e6a5] transition-colors duration-300" />

            {/* Pulse effect on icon */}
            <span className="absolute inset-0 rounded-lg bg-yellow-400 opacity-0 group-hover:opacity-20 animate-ping-once"></span>
          </button>
        </div>
      </div>

      {/* Animated bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#55e6a5]/50 to-transparent opacity-0 animate-fade-in"
        style={{ animationDelay: "300ms" }}
      ></div>

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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes ping-once {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out backwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-ping-once {
          animation: ping-once 0.5s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
