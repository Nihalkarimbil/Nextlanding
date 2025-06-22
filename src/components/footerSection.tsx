"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Youtube, Globe, AtSign, Code } from "lucide-react";

const FooterSection = () => {
  return (
    <section className="bg-black text-white min-h-[400px] flex flex-col relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 top-[450px] md:top-[150px] ">
        <Image
          src="/navbanner.jpg"
          alt="Background"
          width={500}
          height={500}
          className="object-cover w-full"
          priority
        />
        
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            Need more clarity?
            <br />
            Get in touch!
          </h2>

          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors duration-300 inline-flex items-center gap-2">
            Book a demo
            <span className="text-sm">→</span>
          </button>
        </div>
      </div>
      <footer className="border-t border-gray-800 px-6 py-6 relative z-10 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© 2024 All Rights Reserved</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Behance"
            >
              <Globe size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Dribbble"
            >
              <AtSign size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Code"
            >
              <Code size={20} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
