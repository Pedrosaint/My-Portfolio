import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";
import { Sparkles } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      id: 2,
      icon: DevicePhoneMobileIcon,
      title: "Phone",
      content: [
        { text: "+234 707 2598 854", href: "tel:+2347072598854" },
      ],
      gradient: "from-yellow-400 to-yellow-500",
    },
    {
      id: 3,
      icon: EnvelopeIcon,
      title: "Send Us Email",
      content: "chideranwaolisa@gmail.com",
      link: "mailto:chideranwaolisa@gmail.com",
      gradient: "from-blue-400 to-blue-500",
    },
  ];

  return (
    <div
      id="contact"
      className="relative pt-32 pb-16 bg-gradient-to-b from-[#02050a] via-[#0a0e1a] to-[#02050a] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#55e6a5] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Badge */}
        <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-[#55e6a5]/10 border border-[#55e6a5]/30 rounded-full backdrop-blur-sm">
            <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#55e6a5]" />
            <span className="text-xs sm:text-sm font-medium text-[#55e6a5] uppercase tracking-wider">
              Let's Connect
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          {" "}
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-yellow-400 animate-pulse w-6 h-6 sm:w-8 sm:h-8" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Con
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                tact
              </span>
            </h1>
            <Sparkles className="text-yellow-400 animate-pulse w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {contactInfo.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-[#0a0e1a] to-[#151922] rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-[#55e6a5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#55e6a5]/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              ></div>

              {/* Icon Container */}
              <div className="relative mb-4 sm:mb-6">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black" />
                </div>
                {/* Decorative Ring */}
                <div
                  className={`absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#55e6a5] transition-colors duration-300">
                  {item.title}
                </h2>

                {Array.isArray(item.content) ? (
                  <div className="space-y-1 sm:space-y-2">
                    {item.content.map((phone, idx) => (
                      <a
                        key={idx}
                        href={phone.href}
                        className="block text-sm sm:text-base text-gray-400 hover:text-[#55e6a5] group-hover:translate-x-2 transform transition-all duration-300"
                      >
                        {phone.text}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="text-sm sm:text-base text-gray-400 hover:text-[#55e6a5] break-words group-hover:translate-x-2 inline-block transform transition-all duration-300"
                  >
                    {item.content}
                  </a>
                )}
              </div>

              {/* Hover Arrow Indicator */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#55e6a5] animate-bounce-right"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Divider with Animation */}
        <div className="relative mb-12 sm:mb-16 animate-fade-in">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-[#02050a] px-4">
              <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-transparent via-[#55e6a5] to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-xs sm:text-sm group cursor-default">
              <span className="group-hover:text-[#55e6a5] transition-colors duration-300">
                Jude Nwaolisa
              </span>
              <span className="mx-1 sm:mx-2">•</span>
              <span className="group-hover:text-yellow-400 transition-colors duration-300">
                2025
              </span>
              <span className="mx-1 sm:mx-2">|</span>
              <span>All Rights Reserved</span>
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-6 flex-wrap">
            <a
              href="#terms"
              className="text-xs sm:text-sm text-gray-500 hover:text-[#55e6a5] transition-colors duration-300 relative group"
            >
              <span>Terms & Condition</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#55e6a5] group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#privacy"
              className="text-xs sm:text-sm text-gray-500 hover:text-yellow-400 transition-colors duration-300 relative group"
            >
              <span>Privacy Policy</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#sitemap"
              className="text-xs sm:text-sm text-gray-500 hover:text-blue-400 transition-colors duration-300 relative group"
            >
              <span>Sitemap</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
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

        @keyframes bounce-right {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
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

        .animate-bounce-right {
          animation: bounce-right 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
