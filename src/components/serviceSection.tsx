"use client"
import React from "react";

const ServicesSection = () => {
  const services = [
    "UX design",
    "Graphic design",
    "Logo design",
    "Branding",
    "Animation",
    "UI/UX design",
    "Graphic design",
    "Logo design",
    "Branding",
    "Web design",
    "Print design",
    "Digital marketing",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden relative">
      {/* Services badge */}
      <div className="mb-1 px-6 py-3 bg-[#121212] text-yellow-400  rounded-full text-sm font-medium">
        Services
      </div>

      {/* Main heading */}
      <div className="text-center mb-16 px-4 max-w-4xl">
        <p className="text-5xl md:text-7xl font-light leading-tight">
          All you want,
          <br />
          <span className="text-gray-300">delivered on time</span>
        </p>
      </div>

      {/* Auto-scrolling service tags container */}
      <div className="relative  overflow-hidden">
        {/* First row - scrolling left to right */}
        <div className="flex whitespace-nowrap mb-6 w-6xl">
          <div className="flex animate-scroll-right">
            {[...services, ...services].map((service, index) => (
              <div
                key={`row1-${index}`}
                className="mx-3 px-6 py-3 bg-[#121212] bg-opacity-50 backdrop-blur-3xl border border-gray-700 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300 flex-shrink-0"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolling right to left */}
        <div className="flex whitespace-nowrap">
          <div className="flex animate-scroll-left">
            {[...services.reverse(), ...services].map((service, index) => (
              <div
                key={`row2-${index}`}
                className="mx-3 px-6 py-3 bg-border-[#1F1F1F] bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300 flex-shrink-0"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:absolute left-0 top-0 w-3xl h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="md:absolute right-0 top-0 w-3xl h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;
