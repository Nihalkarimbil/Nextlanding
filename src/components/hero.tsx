import React from "react";
import { Star, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className="flex justify-between items-center p-8 relative"
        style={{
          backgroundImage: "url('/navbanner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Logo */}
        <div className="text-2xl font-bold text-white relative z-10">LOGO</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 relative z-10">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Portfolio
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Benefits
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Pricing
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            FAQ
          </a>
        </div>

        {/* CTA Button */}
        <button className="bg-black text-white border-2 border-yellow-500 px-6 py-2 rounded-full font-semibold flex items-center gap-2 relative z-10">
          Book a demo
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        {/* Reviews */}
        <div className="mb-8 flex items-center gap-2">
          <span className="text-white font-bold">5.0</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-500 text-yellow-500"
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">11 reviews</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-xl md:text-5xl font-bold mb-6 leading-tight max-w-6xl">
          Partner with a Full-Service Design Team for All Your Creative Needs
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Skip the hassle of finding the perfect full-time designer or studio
        </p>

        {/* CTA Button */}
        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3">
          Connect us
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
