'use client'
import { Sprout } from 'lucide-react';
import HeroStats from "./HeroStats";
import { useRouter } from "next/navigation";
export default function HeroContent() {
    const router = useRouter();

  return (
    <div className="space-y-7">

      <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">

        <Sprout /> AI-Powered Agriculture Platform

      </div>

      <div className="space-y-5">

        <h1 className="text-5xl font-bold leading-tight lg:text-6xl">

          Protect Your Crops

          <span className="block text-green-600">
            Before Disease Spreads
          </span>

        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-600">

          Upload crop images and receive AI-powered disease
          diagnosis, treatment recommendations,
          prevention strategies, and personalized
          farming guidance.

        </p>

      </div>

      <div className="flex flex-wrap gap-4">

        <button className="rounded-xl bg-green-600 px-8 py-4 font-medium text-white transition hover:bg-green-700 cursor-progress" onClick={() => router.push("/dashboard")}>

          Start Free Analysis

        </button>

        <button className="rounded-xl border px-8 py-4 font-medium transition hover:bg-gray-100 cursor-not-allowed">

          View Live Demo

        </button>

      </div>

      <HeroStats />

    </div>
  );
}