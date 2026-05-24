"use client";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-green-600 to-green-500 text-white overflow-hidden">

      {/* 🔥 Background Glow Effect */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-400 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-300 opacity-30 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Start Protecting Your Crops Today 🌱
        </h2>

        <p className="text-lg text-green-100 mb-8">
          Detect diseases instantly and get smart treatment solutions powered by AI.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary Button */}
          <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            Get Started 🚀
          </button>

          {/* Secondary Button */}
          <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-green-600 transition duration-300">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}