import React from "react";

const ProjectMockup = () => {
  // Replace these with your actual project images
  const mobileImage = "/src/assets/images/image.jpg";
  const laptopImage = "/src/assets/images/image.jpg";

  return (
    <div className="bg-gradient-to-b from-[#02050a] via-[#0a0e1a] to-[#02050a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55e6a5] to-yellow-400">
              Mockup Preview
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            See how your project looks on different devices
          </p>
        </div>

        {/* Mockups Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Laptop Mockup */}
          <div className="animate-slide-in-left">
            <div className="relative group">
              {/* Laptop Frame */}
              <div className="bg-gray-900 rounded-t-3xl rounded-b-none border-[14px] border-gray-800 shadow-2xl overflow-hidden">
                {/* Screen */}
                <div className="bg-black aspect-video overflow-hidden relative">
                  <img
                    src={laptopImage}
                    alt="Laptop preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Notch */}
                <div className="bg-gray-800 h-8 flex justify-center items-center relative">
                  <div className="w-32 h-2 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Laptop Stand */}
              <div className="bg-gradient-to-b from-gray-700 to-gray-900 h-12 relative shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-1 bg-gray-600"></div>
                <div className="flex items-center justify-center h-full gap-20">
                  <div className="w-2 h-8 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-8 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#55e6a5]/0 via-[#55e6a5]/20 to-[#55e6a5]/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10"></div>

              {/* Badge */}
              <div className="absolute -top-6 -right-6 bg-[#55e6a5] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                Desktop
              </div>
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="animate-slide-in-right">
            <div className="relative group flex justify-center">
              {/* Mobile Frame */}
              <div className="bg-gray-900 rounded-3xl border-[12px] border-gray-800 shadow-2xl overflow-hidden w-72 relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10 flex justify-center items-center">
                  <div className="w-32 h-1.5 bg-black rounded-full"></div>
                </div>

                {/* Screen */}
                <div className="bg-black aspect-[9/19] overflow-hidden relative pt-8">
                  <img
                    src={mobileImage}
                    alt="Mobile preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Home indicator */}
                <div className="bg-gray-900 h-6 flex justify-center items-center">
                  <div className="w-24 h-1 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10"></div>

              {/* Badge */}
              <div className="absolute -top-6 -left-6 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                Mobile
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#55e6a5]/20 rounded-full animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400/20 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: "📱",
              title: "Responsive",
              desc: "Works seamlessly on all devices",
            },
            {
              icon: "⚡",
              title: "Fast",
              desc: "Optimized performance and loading",
            },
            {
              icon: "🎨",
              title: "Beautiful",
              desc: "Modern and elegant design",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#0a0e1a] to-[#151922] p-6 rounded-xl border border-gray-800 hover:border-[#55e6a5]/50 transition-all duration-300 text-center animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
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
      `}</style>
    </div>
  );
};

export default ProjectMockup;
