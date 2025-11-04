import React, { useState } from "react";
import {
  X,
  Home,
  User,
  Briefcase,
  Code,
  FolderOpen,
  Mail,
  Sparkles,
} from "lucide-react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { href: "#home", label: "HOME", icon: Home },
    { href: "#about", label: "ABOUT", icon: User },
    { href: "#services", label: "SERVICES", icon: Briefcase },
    { href: "#skill", label: "SKILLS", icon: Code },
    { href: "#projects", label: "PROJECTS", icon: FolderOpen },
    { href: "#contact", label: "CONTACT", icon: Mail },
  ];

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className={`fixed inset-0 z-[999999] backdrop-blur-sm bg-black/50 transition-opacity duration-500  ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      />

      {/* Navigation Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-[1000000] w-full sm:w-96 md:hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 ease-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <div className="flex items-center gap-2">
              <Sparkles className="text-yellow-400 animate-pulse" size={24} />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Menu
              </h2>
            </div>

            {/* Close Button */}
            <button
              onClick={closeNav}
              className="group relative w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-90"
            >
              <X
                size={24}
                className="text-gray-300 group-hover:text-white transition-colors"
              />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={closeNav}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative"
                  style={{
                    animation: nav
                      ? `slideInLeft 0.5s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl blur-xl transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Link Container */}
                  <div className="relative flex items-center gap-4 px-6 py-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400/20 group-hover:to-orange-500/20 group-hover:border-yellow-400/50 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-yellow-400/20">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-yellow-400 group-hover:to-orange-500 flex items-center justify-center transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                      <Icon
                        size={20}
                        className="text-gray-300 group-hover:text-white transition-colors"
                      />
                    </div>

                    {/* Text */}
                    <span className="text-xl font-bold text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300 tracking-wider">
                      {item.label}
                    </span>

                    {/* Arrow Indicator */}
                    <div className="ml-auto transform transition-all duration-300 translate-x-0 group-hover:translate-x-2 opacity-0 group-hover:opacity-100">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
                    </div>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 -right-px w-1 h-32 bg-gradient-to-b from-transparent via-yellow-400 to-transparent transform -translate-y-1/2 opacity-50" />
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }
      `}</style>
    </>
  );
};

export default MobileNav;