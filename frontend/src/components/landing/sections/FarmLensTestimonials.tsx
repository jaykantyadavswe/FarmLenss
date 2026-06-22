'use client';

import React, { useState } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  location: string;
  rating: number;
  avatarText: string;
  text: string;
  badge: string;
}

export default function FarmLensTestimonials() {
  const testimonials: TestimonialItem[] = [
    {
      name: "Marcus Vance",
      role: "Industrial Vine Operator",
      location: "Napa Valley, CA",
      rating: 5,
      avatarText: "MV",
      text: "FarmLens caught early-stage downy mildew across our northern Chardonnay blocks before it was visible to the naked eye. Saved us an estimated $45k in yield losses this quarter alone.",
      badge: "Verified Enterprise Farmer"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Agricultural Consultant",
      location: "Des Moines, IA",
      rating: 5,
      avatarText: "ER",
      text: "The precision of the automated pathogen scanning is extraordinary. I export the analytical PDF reports directly to my cooperative stakeholders to dictate biochemical treatment cycles.",
      badge: "Agronomy Expert"
    },
    {
      name: "Silas Thorne",
      role: "Polyculture Farm Manager",
      location: "Willamette Valley, OR",
      rating: 5,
      avatarText: "ST",
      text: "The real-time AI copilot completely replaces traditional documentation search loops. Having prescriptive guidelines and localized weather models synchronized saves hours every morning.",
      badge: "Premium Subscriber"
    },
    {
      name: "Amara Kante",
      role: "Commercial Greenhouse Director",
      location: "Almería, Spain",
      rating: 5,
      avatarText: "AK",
      text: "Integrating computer vision imagery into our precision crop rotation framework has dramatically reduced blight contamination. Our operations wouldn't be as scalable without it.",
      badge: "Verified Enterprise Farmer"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative bg-[#060c07] text-slate-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Structural Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Ambient Orb Backlighting */}
      <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none animate-pulse [animation-duration:12s]" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        
        {/* Section Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              User Validation Metrics
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-4">
              Trusted by the Vanguard of Modern Farming
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Discover how leading agribusinesses, crop experts, and enterprise cultivators utilize FarmLens AI to protect yields and manage seasonal epidemics.
            </p>
          </div>

          {/* Slider Control Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              type="button"
              className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 text-slate-400 hover:text-slate-100 flex items-center justify-center transition-all shadow-xl backdrop-blur-md group"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              type="button"
              className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-emerald-500/30 hover:bg-slate-900 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all shadow-xl backdrop-blur-md group"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* CAROUSEL SLIDER VIEWPORT AREA */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 24}px))` }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 group relative rounded-2xl border border-slate-800/80 bg-slate-950/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-slate-700 flex flex-col justify-between overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] min-h-[340px]"
              >
                {/* Internal Card Mesh Mask Glow */}
                <div className="absolute -inset-px rounded-2xl transition-colors duration-500 pointer-events-none group-hover:bg-emerald-500/5" style={{ maskImage: 'radial-gradient(circle at 50% 10%, white, transparent 60%)', WebkitMaskImage: 'radial-gradient(circle at 50% 10%, white, transparent 60%)' }} />

                {/* Top Module: Identity Matrix */}
                <div>
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Premium Initials Avatar */}
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-sm text-emerald-400 shadow-md">
                        {item.avatarText}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1">
                          {item.name}
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        </h3>
                        <p className="text-[11px] text-slate-400 font-medium mt-0.5">{item.role}</p>
                      </div>
                    </div>
                    
                    {/* Modern Dynamic Quote Asset */}
                    <Quote className="w-8 h-8 text-slate-800/60 group-hover:text-emerald-500/10 transition-colors duration-500 pointer-events-none" />
                  </div>

                  {/* Operational Quality Star Rating */}
                  <div className="flex items-center gap-1 mb-4 relative z-10">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Core Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed mb-6 font-normal relative z-10">
                    "{item.text}"
                  </p>
                </div>

                {/* Lower Module: Location & Compliance Badge */}
                <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] relative z-10 mt-auto">
                  <div className="flex items-center gap-1 text-slate-500 font-medium">
                    <MapPin className="w-3 h-3 text-slate-600" />
                    <span>{item.location}</span>
                  </div>
                  <span className="font-mono font-medium text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Accenting Boundary Vector Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent absolute bottom-0 left-0 group-hover:via-emerald-500/20 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Carousel Navigation Progress Indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              type="button"
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeIndex === idx 
                  ? 'w-6 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                  : 'w-1.5 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}