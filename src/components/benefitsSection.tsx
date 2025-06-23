"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BenefitsSection() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  
  })

  const benefits = [
    {
      id: 1,
      title: "Fast turnaround",
      description:
        "Expect the first draft within 48-72 hours, from Monday to Saturday.",
      image: "/benefits/48hrs.png",
    },
    {
      id: 2,
      title: "Unlimited requests",
      description:
        "Enjoy the freedom of unlimited designs, tailored to meet your every need.",
      image: "/benefits/chat.png",
    },
    {
      id: 3,
      title: "Always in sync",
      description:
        "Stay in sync with real-time updates and seamless communication, all via Slack.",
      image: "/benefits/chat2.png",
    },
    {
      id: 4,
      title: "Pause or cancel anytime",
      description:
        "Flexibility at your fingertips—pause or cancel your subscription anytime.",
      image: "/benefits/invoice.png",
    },
    {
      id: 5,
      title: "Trello task management",
      description:
        "Expertise in crafting designs that not only captivate but also drive results.",
      image: "/benefits/trello.png",
    },
    {
      id: 6,
      title: "Worry free pricing",
      description: "Get all your design needs covered for just $1,899/month.",
      image: "/benefits/invoice.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      
      <div className="text-center mb-16" data-aos="fade-down">
        <div className="inline-block bg-[#121212] text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          Benefits
        </div>
        <p className="text-5xl md:text-6xl font-light mb-4 leading-tight">
          Unlock a world of design
          <br />
          potential with us
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 bg-[#121212]"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="mb-8 relative h-48 rounded-xl overflow-hidden bg-gray-800">
              <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
