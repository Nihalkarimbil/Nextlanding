"use client";

import React from "react";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="relative bg-black text-white h-[700px] md:min-h-screen overflow-hidden">
      
      <div className="absolute inset-0 z-0 top-2 md:top-0">
        <Image
          src="/herobanner.jpg" 
          alt="Hero Background"
          width={500}
          height={500}
          className="object-cover w-full"
          priority
        />
      </div>

      
      <nav className="flex justify-between items-center p-8 relative z-10">
        <div className="text-2xl font-bold text-white">LOGO</div>

        <div className="hidden md:flex space-x-8">
          {["Home", "Portfolio", "Benefits", "Services", "Pricing", "FAQ"].map(
            (item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-white">
                {item}
              </a>
            )
          )}
        </div>

     
        <button className="bg-black text-white border-2 border-yellow-500 px-6 py-2 rounded-full font-semibold flex items-center gap-2">
          Book a demo
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

  
      <div className="flex flex-col items-center justify-center h-[60vh] md:h-[80vh] px-6 text-center relative z-10">
    
        <div className="mb-1 md:mb-8 flex items-center gap-2">
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

        <p className="text-3xl md:text-6xl font-bold mb-6 leading-tight max-w-6xl">
          Partner with a Full-Service Design Team for All Your Creative Needs
        </p>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Skip the hassle of finding the perfect full-time designer or studio
        </p>
        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3">
          Connect us
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
