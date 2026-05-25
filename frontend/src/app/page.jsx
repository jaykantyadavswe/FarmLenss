"use client";

import { useRouter } from "next/navigation";
import HowItWorks from "./components/HowItWorks";
import WhyFarmLens from "./components/WhyFarmLens";
import CTASection from "./components/CTASection";


export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="bg-white text-gray-800">

      <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 via-green-400 to-green-800 bg-clip-text text-transparent animate-pulse">🌾 FarmLens</h1>

        <div className="flex gap-6">
          <button onClick={() => router.push("/login")} className="cursor-pointer">Login</button>
          <button
            onClick={() => router.push("/login")}
            className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center py-20 px-6 bg-green-50">
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
          Detect Crop Diseases with AI 🌾
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Upload your crop image and get instant disease detection and treatment suggestions.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => router.push("/login")}
            className="bg-green-600 text-white px-6 py-3 rounded text-lg cursor-pointer"
          >
            Get Started 🚀
          </button>
        </div>
      </section>
      <WhyFarmLens/>
      <HowItWorks/>
      <CTASection/>

      <footer className="text-center py-6 text-gray-500">
        © 2026 FarmLens. All rights reserved.
      </footer>

    </div>
  );
}