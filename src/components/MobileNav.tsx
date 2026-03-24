import React from "react";
import {
  X,
  Home,
  User,
  Briefcase,
  Code,
  FolderOpen,
  Mail,
} from "lucide-react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#services", label: "Services", icon: Briefcase },
    { href: "#skill", label: "Skills", icon: Code },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[999999] bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      />

      {/* Navigation Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-[1000000] w-full sm:w-80 md:hidden bg-claude-surface shadow-elevated transform transition-transform duration-300 ease-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-claude-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-claude-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-lg font-bold text-claude-text">
                Jude<span className="text-claude-accent">.dev</span>
              </span>
            </div>

            <button
              onClick={closeNav}
              className="w-9 h-9 rounded-lg bg-claude-surface-alt hover:bg-claude-border flex items-center justify-center transition-colors duration-200"
            >
              <X size={18} className="text-claude-text-secondary" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 py-4 px-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={closeNav}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-claude-text-secondary hover:text-claude-accent hover:bg-claude-surface-alt transition-all duration-200 group"
                >
                  <Icon
                    size={18}
                    className="group-hover:text-claude-accent transition-colors"
                  />
                  <span className="text-sm font-medium tracking-wide">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Footer CTA */}
          <div className="p-6 border-t border-claude-border">
            <a
              href="#contact"
              onClick={closeNav}
              className="block w-full py-3 bg-claude-accent text-white font-medium text-sm text-center rounded-lg hover:bg-claude-accent-hover transition-colors duration-200"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
