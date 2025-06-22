import React from "react";

export default function PayAndGetStarted() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <button className="bg-stone-800 hover:bg-stone-700 text-yellow-400 px-6 py-2 border-2 border-yellow-400 rounded-full text-sm font-thin transition-colors">
              How it works?
            </button>
          </div>

          <p className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            Pay and get started
            <br />
            the same day
          </p>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            No unnecessary bureaucracy. We focus on getting your ideas and
            <br />
            problems solved.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-stone-900 bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-90 transition-all duration-300">
            <div className="w-12 h-12 border-2 border-yellow-400 rounded-full flex items-center justify-center mb-6">
              <span className="text-yellow-400 font-semibold text-lg">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Subscribe to a plan
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Select a plan that fits your needs and
              <br />
              jump on a onboarding call.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-stone-900 bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-90 transition-all duration-300">
            <div className="w-12 h-12 border-2 border-yellow-400 rounded-full flex items-center justify-center mb-6">
              <span className="text-yellow-400 font-semibold text-lg">2</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Add a task
            </h3>
            <p className="text-gray-400 leading-relaxed">
              List your first task on our shared Trello
              <br />
              board by specifying the requirements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-stone-900 bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-90 transition-all duration-300">
            <div className="w-12 h-12 border-2 border-yellow-400 rounded-full flex items-center justify-center mb-6">
              <span className="text-yellow-400 font-semibold text-lg">3</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Enjoy results
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Receive your completed tasks in 2-4
              <br />
              business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
