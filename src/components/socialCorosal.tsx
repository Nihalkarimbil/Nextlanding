"use client"
import Image from "next/image";
import React from "react";

const LogoCarousel = () => {

  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-gray-400 text-sm font-light tracking-wide">
          As seen and loved on:
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">


          <div className="flex items-center justify-around min-w-full px-8">
            
              <div className="flex-shrink-0 mx-8">
                
                  <Image
                    src={"./social.svg"}
                    alt={"social"
                    }
                    width={200}
                    height={200}
                    className="h-8 w-auto opacity-60 hover:opacity-100  transition-opacity duration-300 "
                  />
              
              </div>
           
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
