"use client";

import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
     once:false,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const faqs = [
    {
      question: "Is it really unlimited?",
      answer:
        "Yes, it's truly unlimited. You can make as many design requests as you need, and we'll work through them one at a time (or two at a time with the Pro plan).",
    },
    {
      question: "Why wouldn't I just hire a freelancer?",
      answer:
        "Freelancers can be inconsistent, may not be available when you need them, and often lack the comprehensive skill set our team provides. With our service, you get consistent quality, reliability, and a full range of design services.",
    },
    {
      question: "Why wouldn't I just hire a full-time designer?",
      answer:
        "A full-time designer costs significantly more when you factor in salary, benefits, and overhead costs. Plus, you may not always have enough work to keep them busy. Our service gives you access to senior-level talent only when you need it.",
    },
    {
      question: "Can I pause, renew or cancel at any time?",
      answer:
        "Absolutely! You have complete flexibility. You can pause your subscription when you don't have active projects, resume when you do, or cancel at any time without penalties.",
    },
    {
      question: "Are there any contracts?",
      answer:
        "No contracts required. We work on a month-to-month basis, giving you the freedom to adjust your plan as your needs change.",
    },
    {
      question: "How do we communicate?",
      answer:
        "We primarily communicate through Slack for real-time updates and Trello for project management. This keeps everything organized and ensures clear communication throughout your projects.",
    },
    {
      question: "What if I only have one design task?",
      answer:
        "No problem! You can subscribe for just one month, complete your design task, and then pause or cancel your subscription. There's no minimum commitment required.",
    },
    {
      question: "What is an active task?",
      answer:
        "An active task is any design request that's currently being worked on. With the Standard plan, you can have one active task at a time. With the Pro plan, you can have two active tasks running simultaneously.",
    },
    {
      question: "Who are the designers?",
      answer:
        "Our team consists of experienced senior designers with expertise across various disciplines including branding, web design, UI/UX, and digital marketing. All designers are carefully vetted and have proven track records.",
    },
    {
      question: "How many designs can be done in a single month?",
      answer:
        "The number varies depending on the complexity of your requests. Simple tasks like social media graphics might be completed in a day, while complex projects like brand identity could take several days. On average, clients receive 8-12 completed designs per month.",
    },
    {
      question: "Are there any refunds if I don't like the designs?",
      answer:
        "We work with unlimited revisions to ensure you're completely satisfied with the final result. If for any reason you're not happy with our service, we offer a satisfaction guarantee and will work with you to make it right.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-8 px-6 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full text-sm font-medium">
            Insights
          </div>
          <p className="text-4xl md:text-6xl font-light leading-tight">
            Frequently asked
            <br />
            <span className="text-gray-400">questions</span>
          </p>
        </div>

        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#121212] bg-opacity-40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 75}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800 hover:bg-opacity-30 transition-colors duration-300"
              >
                <span className="text-lg font-light pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-800 pt-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
