"use client";

import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Milos Vidic",
    role: "CEO @goatmarketing",
    content:
      "Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time. We also increased our website accessibility score and decreased the bounce rate...",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Rasesh Seth",
    role: "CEO @nextyn",
    content:
      "Vas was extremely easy to work with. He's a pro at Webflow and is always open to hearing you out and executing exactly the way you want...",
    platform: "Upwork",
    rating: 5,
  },
  {
    name: "Goran Markovic",
    role: "Founder @vizitya",
    content:
      "Working with Handmade on our website design was an exceptional experience. As an architect, I needed a site that not only showcased our projects beautifully but also reflected our unique design philosophy...",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Chris Hjort",
    role: "PM @Host",
    content:
      "I highly recommend Vasilije. He is a hard working guy with great ideas for big or small projects. Very flexible and very fast. I'll definitely hire him again!",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Borgar Erlendsson",
    role: "CEO @kozmox",
    content:
      "True professional capable of delivering quality work within very tight time constraints. I enjoyed receiving constructive feedback and new ideas...",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Jasper Zhang",
    role: "CEO @hyperbolic",
    content:
      "Vasilije did an outstanding job designing our website. He's highly skilled, collaborative, and extremely efficient...",
    platform: "Clutch",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; 

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollEl.scrollHeight / 2) {
        scrollPosition = 0;
      }

      scrollEl.scrollTop = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

 
    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 1000);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollEl.addEventListener("mouseenter", handleMouseEnter);
    scrollEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationId);
      scrollEl.removeEventListener("mouseenter", handleMouseEnter);
      scrollEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="text-center mb-12">
        <div className="text-xs bg-yellow-400 text-black inline-block px-3 py-1 rounded-full mb-4">
          Testimonials
        </div>
        <h2 className="text-4xl font-semibold leading-tight">
          Read what our clients are saying about us
        </h2>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden relative"
        ref={scrollRef}
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="bg-zinc-900 rounded-3xl p-6 shadow-md flex flex-col justify-between min-h-[280px] flex-shrink-0"
          >
            <div>
              <p className="text-sm leading-relaxed mb-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              <div className="flex items-center mt-2 text-yellow-400">
                <span className="text-sm mr-1">{testimonial.platform}</span>
                <span className="text-sm">{testimonial.rating}.0</span>
                <div className="flex ml-2">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} fill="#FACC15" stroke="#FACC15" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
