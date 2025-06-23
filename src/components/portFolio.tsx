"use client";

import React from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortfolioSection() {
  AOS.init({
    once: false,
    duration: 800,
    easing: "ease-in-out",
  });

  const portfolioItems = [
    {
      id: 1,
      title: "Slipery moneys - e-commerce platform for high risk industries",
      image: "/portfolio/slipery.jpg",
    },
    {
      id: 2,
      title: "Hybrid capital - digital currency",
      image: "/portfolio/hybrid.jpg",
    },
    {
      id: 3,
      title: "Betero - sports betting platform",
      image: "/portfolio/betero.jpg",
    },
    {
      id: 4,
      title: "Exec - employees financial wellness saas",
      image: "/portfolio/exec.jpg",
    },
    {
      id: 5,
      title: "Voltoge - accessible clean energy startup",
      image: "/portfolio/voltoge.jpg",
    },
    {
      id: 6,
      title: "Hyperbolic - a decentralized data transmission startup",
      image: "/portfolio/hyperbolic.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
       
        <div
          className="flex flex-col lg:flex-row justify-between items-start mb-16"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="inline-block mb-6">
              <span className="bg-[#121212] text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
                Portfolio
              </span>
            </div>
            <p className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
              Exceptional work
              <br />
              you deserve
            </p>
          </div>

          <div className="lg:w-1/2 lg:pl-16">
            <p className="text-gray-400 text-lg leading-relaxed">
              From tech startups to healthcare giants, e-commerce pioneers to
              edtech, we&apos;ve left our mark on diverse domains.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full h-64 md:h-full min-h-[300px] overflow-hidden bg-gray-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-lg font-medium text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <button className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            See all works
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
