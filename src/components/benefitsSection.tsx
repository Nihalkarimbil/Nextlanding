import Image from "next/image";
import React from "react";

export default function BenefitsSection() {
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
  
      <div className="text-center mb-16">
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
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-300"
          >
            <div className="mb-8 relative h-48 rounded-xl overflow-hidden bg-gray-800">
              <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 hidden items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-lg mb-3 mx-auto flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Image placeholder</p>
                </div>
              </div>
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
