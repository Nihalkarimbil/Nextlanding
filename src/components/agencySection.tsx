"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AgencySection = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div
            className="lg:col-span-4 bg-gray-200 text-black rounded-3xl pt-9 px-5"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-between ">
              <video
                className="w-full rounded-xl h-full"
                controls
                muted
                loop
                preload="auto"
              >
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4"></div>
          </div>

          <div
            className="lg:col-span-8 bg-[#121212] rounded-3xl p-6 md:p-8 relative overflow-hidden"
            data-aos="fade-left"
          >
            <div className="hidden md:block absolute top-36 right-6">
              <Image src="/leaf.svg" alt="leaf" width={50} height={50} />
            </div>
            <div className="hidden md:block absolute top-36 left-6">
              <Image src="/leaf2.svg" alt="leaf" width={50} height={50} />
            </div>

            <div className="text-center pt-10 md:pt-20 px-4 md:px-10">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                &quot;An absolute professional who consistently delivers
                exceptional work, even under the most demanding deadlines. I
                appreciated the insightful feedback and innovative ideas
                introduced throughout the design process, which greatly enhanced
                the final product.&quot;
              </p>
              <p className="text-gray-400 font-medium">
                Murshid Pulkkada – Founder @Progbiz
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#121212] rounded-3xl p-6 md:p-8" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <a className="text-4xl md:text-6xl font-thin leading-tight">
                Your dedicated
                <br />
                in-house design
                <br />
                team
              </a>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-32 right-6">
                <Image src="/leaf.svg" alt="leaf" width={45} height={45} />
              </div>

              <p className="text-base md:text-lg leading-relaxed mb-8">
                We are a global collective of diverse designers and developers,
                partnering with brands of all scales. What distinguishes us is
                our dedication to crafting memorable, user-friendly, and
                captivating experiences — it&apos;s what we excel at. The
                projects we deliver combine creative vision with practical
                execution, resulting in solutions that are both distinctive and
                impactful.
              </p>

              <div className="flex items-center space-x-4 mt-6">
                <div className="border-l-2 border-gray-500 h-10"></div>
                <div>
                  <p className="font-medium">Murshid</p>
                  <p className="text-gray-400 text-sm">Founder and CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencySection;
