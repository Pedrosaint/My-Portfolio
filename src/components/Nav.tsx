import { Bars3Icon } from "@heroicons/react/24/solid";
import { Sun, Moon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

interface Props {
  openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "skill", label: "Skills", href: "#skill" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

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
          ? "bg-claude-surface/80 backdrop-blur-xl shadow-soft border-b border-claude-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-claude-accent rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-sm sm:text-base">J</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-claude-text tracking-tight">
              Jude
              <span className="text-claude-accent">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === link.id
                    ? "text-claude-accent"
                    : "text-claude-text-secondary hover:text-claude-text"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-claude-accent rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-claude-surface-alt hover:bg-claude-border transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun size={18} className="text-claude-accent" />
              ) : (
                <Moon size={18} className="text-claude-text-secondary" />
              )}
            </button>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-claude-accent text-white font-medium text-sm rounded-lg hover:bg-claude-accent-hover transition-colors duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu + Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-claude-surface-alt transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun size={18} className="text-claude-accent" />
              ) : (
                <Moon size={18} className="text-claude-text-secondary" />
              )}
            </button>
            <button
              onClick={openNav}
              className="lg:hidden p-2 rounded-lg hover:bg-claude-surface-alt transition-colors duration-300"
              aria-label="Open menu"
            >
              <Bars3Icon className="w-6 h-6 text-claude-text" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
