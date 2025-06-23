"use client";

import React, { useEffect } from "react";
import { Check } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingSection = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-block mb-8 px-6 py-2 bg-[#121212] text-yellow-400 rounded-full text-sm font-medium">
            Pricing
          </div>
          <p className="text-4xl md:text-6xl font-light leading-tight max-w-5xl mx-auto">
            Choose the relevant plan to build,
            <br />
            <span className="text-gray-400">grow and fasten your team</span>
          </p>
        </div>

       
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <div
            className="bg-[#121212] bg-opacity-50 backdrop-blur-sm border border-[#1F1F1F] rounded-3xl p-8 hover:bg-stone-900 hover:bg-opacity-50 transition-all duration-300"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <div className="mb-8">
              <h3 className="text-gray-400 text-sm font-medium mb-4">
                STANDARD
              </h3>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-light">$2,150</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400 text-sm underline">
                One request at a time
              </p>
            </div>

            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-6">
                What&apos;s included:
              </p>
              <ul className="space-y-4">
                {[
                  "Unlimited requests",
                  "~48 hour delivery",
                  "Unlimited brands",
                  "Weekly meetings",
                  "Pause or cancel anytime",
                  "Managed via Slack and Trello",
                  "All services except Webflow",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-4 px-6 rounded-full transition-colors duration-300">
                Subscribe →
              </button>
              <button className="w-full border border-gray-700 hover:border-gray-600 text-white py-4 px-6 rounded-full transition-colors duration-300">
                Book a demo
              </button>
            </div>
          </div>

         
          <div
            className="bg-[#121212] bg-opacity-50 backdrop-blur-sm border border-[#1F1F1F] rounded-3xl p-8 hover:bg-stone-900 hover:bg-opacity-50 transition-all duration-300 relative"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-medium">
                Faster ⚡
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-gray-400 text-sm font-medium mb-4">PRO</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-light">$3,150</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400 text-sm underline">
                Double the requests
              </p>
            </div>

            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-6">
                What&apos;s included:
              </p>
              <ul className="space-y-4">
                {[
                  "Unlimited requests",
                  "~48 hour delivery",
                  "Unlimited brands",
                  "Weekly meetings",
                  "Pause or cancel anytime",
                  "Managed via Slack and Trello",
                  "All services and Webflow",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-4 px-6 rounded-full transition-colors duration-300">
                Subscribe →
              </button>
              <button className="w-full border border-gray-700 hover:border-gray-600 text-white py-4 px-6 rounded-full transition-colors duration-300">
                Book a demo
              </button>
            </div>
          </div>

          
          <div
            className="flex flex-col gap-6 max-w-sm mx-auto text-white"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <div className="bg-[#121212] rounded-3xl h-[460px] p-6 border border-[#1F1F1F]">
              <h3 className="text-xs text-gray-400 font-medium mb-3">
                PROJECT-BASED
              </h3>
              <p className="text-sm text-gray-300 pt-8 mb-6">
                For a custom fee delivered in milestones. Ideal for specific
                goals. Custom project scope.
              </p>
              <p className="text-xs text-gray-400 mb-4">
                What&apos;s included:
              </p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-yellow-500 mr-2" />
                  Fixed scope of work
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-yellow-500 mr-2" />
                  Delivered in milestones
                </li>
              </ul>
              <button className="w-full border border-gray-700 py-3 rounded-full text-sm font-medium hover:border-gray-500 transition-all duration-300">
                Send email
              </button>
            </div>

            <div className="bg-[#121212] rounded-3xl p-6 border border-[#1F1F1F]">
              <h3 className="text-xl font-medium mb-2">Refer & earn</h3>
              <p className="text-sm text-gray-400 mb-6">
                Receive $150 for each referral!
              </p>
              <button className="w-full border border-gray-700 py-3 rounded-full text-sm font-medium hover:border-gray-500 transition-all duration-300">
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
