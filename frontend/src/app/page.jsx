"use client";

import React, { useState } from 'react';
import { 
  Sprout, ScanLine, ShieldAlert, BarChart3, Languages, 
  TrendingUp, FileText, Upload, Brain, CheckCircle2, 
  ArrowRight, Play, Menu, X, ChevronDown, Check, HelpCircle
} from 'lucide-react';

export default function FarmerLensLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-900">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-emerald-600 to-blue-600 p-2 rounded-xl text-white shadow-md shadow-emerald-500/20">
                <Sprout className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight">
                Farmer<span className="text-emerald-600">Lens</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
              <a href="#solutions" className="hover:text-emerald-600 transition-colors">Solutions</a>
              <a href="#dashboard" className="hover:text-emerald-600 transition-colors">Dashboard</a>
              <a href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Login</button>
              <button className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 shadow-sm transition-all duration-200">
                Start Free Trial
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2 shadow-xl">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Features</a>
            <a href="#solutions" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Solutions</a>
            <a href="#dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Dashboard</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Pricing</a>
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
              <button className="w-full text-center py-2 text-sm font-medium text-slate-700">Login</button>
              <button className="w-full text-center py-2 text-sm font-medium bg-emerald-600 text-white rounded-lg">Start Free Trial</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-30 blur-3xl">
          <div className="absolute top-12 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter animate-pulse"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 rounded-full px-3 py-1 text-xs font-semibold text-emerald-800 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            Next-Gen AgriTech Platform
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
            AI Crop Intelligence for <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Smarter Farming</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Upload crop images, detect diseases instantly, receive treatment recommendations, track crop health, and make data-driven farming decisions with AI.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-medium shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 transition-all group">
              Start Free Analysis
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-medium shadow-sm hover:bg-slate-50 transition-all">
              <Play className="h-4 w-4 fill-current text-slate-600" />
              Watch Demo
            </button>
          </div>

          {/* HERO VISUAL (Interactive Dashboard Mockup) */}
          <div className="mt-16 border border-slate-200/80 rounded-2xl bg-white/60 p-4 shadow-2xl backdrop-blur-sm max-w-5xl mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-10 blur-xl group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="relative border border-slate-200 bg-slate-900 rounded-xl overflow-hidden shadow-inner text-left grid grid-cols-1 lg:grid-cols-3 min-h-[480px]">
              
              {/* Sidebar Panel */}
              <div className="border-b lg:border-b-0 lg:border-r border-slate-800 p-6 bg-slate-950/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-white font-semibold mb-6">
                    <Brain className="text-emerald-400 h-5 w-5" />
                    <span>FarmerLens Engine</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between">
                      <span className="text-xs text-slate-400">Crop Health Score</span>
                      <span className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">94%</span>
                    </div>
                    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span>Active Field Alerts</span>
                        <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                      </div>
                      <span className="text-sm font-medium text-slate-200">Late Blight detected in Sector B</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
                  <span>Data Synced: Just Now</span>
                  <span className="text-emerald-400 font-mono">● LIVE</span>
                </div>
              </div>

              {/* Main Analysis Display */}
              <div className="lg:col-span-2 p-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Active Diagnostic</h3>
                    <span className="text-xs bg-blue-500/10 border border-blue-500/30 text-blue-400 px-2 py-1 rounded-md">AI Verification Complete</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-4 flex flex-col justify-center items-center h-40 relative group/upload cursor-pointer">
                      <Upload className="h-8 w-8 text-slate-500 mb-2 group-hover/upload:text-emerald-400 transition-colors" />
                      <span className="text-xs font-medium text-slate-300">tomato_leaf_084.jpg</span>
                      <span className="text-[10px] text-slate-500 mt-1">Click to swap image</span>
                    </div>
                    <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-4 space-y-2">
                      <div className="text-xs text-slate-400">Analysis Results</div>
                      <div className="text-lg font-bold text-amber-400">Tomato Early Blight</div>
                      <p className="text-xs text-slate-400 leading-relaxed">Fungal pathogen *Alternaria solani* identified with 97.4% confidence rating.</p>
                      <div className="pt-2">
                        <span className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2 py-1 rounded">Severity: Moderate</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Recommendations Bar */}
                <div className="bg-gradient-to-r from-emerald-950/40 to-slate-950/40 border border-emerald-900/40 rounded-xl p-4">
                  <div className="text-xs font-semibold text-emerald-400 mb-1 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Recommended Treatment Action
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Apply copper-based fungicides immediately. Prune lower affected foliage to stop spore splash. Optimize drip irrigation schedules to reduce leaf humidity profiles.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TRUSTED BY & STATS */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Empowering the Entire Agricultural Ecosystem
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center items-center justify-center opacity-70 filter grayscale contrast-200">
            <span className="font-semibold text-xl text-slate-700 tracking-tight">🌾 Progressive Farmers</span>
            <span className="font-semibold text-xl text-slate-700 tracking-tight">🛡️ Agri Consultants</span>
            <span className="font-semibold text-xl text-slate-700 tracking-tight">🤝 Rural Cooperatives</span>
            <span className="font-semibold text-xl text-slate-700 tracking-tight">🏛️ Ag-Institutions</span>
          </div>

          <hr className="my-10 border-slate-100" />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">50K+</div>
              <div className="text-sm font-medium text-slate-500 mt-1">Analyses Completed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">10K+</div>
              <div className="text-sm font-medium text-slate-500 mt-1">Active Farmers</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600">95%</div>
              <div className="text-sm font-medium text-slate-500 mt-1">Detection Accuracy</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">20+</div>
              <div className="text-sm font-medium text-slate-500 mt-1">Crop Categories Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Engineered to Protect and Scale Your Yield
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Powerful tools wrapped in a seamless interface designed for precise field management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <ScanLine className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">AI Disease Detection</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Upload raw field photographs and compute immediate real-time diagnostics utilizing optimized crop models.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">Smart Treatment Plans</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Receive biological and chemical treatment paths customized exactly to local soil guidelines and compliance metrics.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">Crop Health Analytics</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Monitor field health velocity indices across seasons to target stress zones prior to visible decay.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Languages className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">Multi-Language Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fully accessible workflows translated accurately into Hindi and several regional vernacular options.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">MSP & Market Insights</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Track Mandi trends alongside Minimum Support Pricing updates to sell crops optimally at absolute peak valuation.
              </p>
            </div>
            {/* Card 6 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">Farmer Reports</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Export compliance-ready audit documents to cleanly clear agricultural credit lines and formal insurance reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple 4-Step Process
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Go from field problem to structured resolution framework within seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Timeline connectors (visible on medium screens up) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-12 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 bg-slate-50 border border-slate-200/60 p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg shadow-md shadow-emerald-500/20">
                1
              </div>
              <h3 className="font-bold text-slate-950 mb-2">Upload Crop Image</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Take a photo of the affected plant or leaves right from your smartphone.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-slate-50 border border-slate-200/60 p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg shadow-md shadow-emerald-500/20">
                2
              </div>
              <h3 className="font-bold text-slate-950 mb-2">AI Analyzes Disease</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Our advanced neural networks cross-examine pixels with million-point libraries.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-slate-50 border border-slate-200/60 p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg shadow-md shadow-emerald-500/20">
                3
              </div>
              <h3 className="font-bold text-slate-950 mb-2">Receive Recommendations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Get localized chemical and organic solutions tailored to your region.</p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 bg-slate-50 border border-slate-200/60 p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg shadow-md shadow-emerald-500/20">
                4
              </div>
              <h3 className="font-bold text-slate-950 mb-2">Improve Yield</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Apply workflows accurately to dramatically reduce operational crop losses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Transparent, Flexible Plans
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              No hidden parameters. Choose a package explicitly tailored to your operational tier.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Starter</h3>
                <p className="text-xs text-slate-500 mt-1">Perfect for individual family farms.</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">Free</span>
                </div>
                <hr className="border-slate-100 my-4" />
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> 5 Crop Scans per month</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Standard Disease Diagnosis</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Regional Language Access</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 px-4 bg-slate-100 text-slate-800 font-medium rounded-xl text-sm hover:bg-slate-200 transition-colors">
                Get Started Free
              </button>
            </div>

            {/* Tier 2 */}
            <div className="bg-white border-2 border-emerald-600 rounded-2xl p-8 flex flex-col justify-between shadow-md relative">
              <span className="absolute top-0 right-6 -translate-y-1/2 bg-emerald-600 text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Professional</h3>
                <p className="text-xs text-slate-500 mt-1">For progressive growers & ag consultants.</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">₹499</span>
                  <span className="text-sm text-slate-500 font-medium"> / month</span>
                </div>
                <hr className="border-slate-100 my-4" />
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Unlimited Automated Crop Scans</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Deep AI Treatment Formulations</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Export PDF Agronomy Reports</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Live Mandi MSP Price Tracking</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 px-4 bg-emerald-600 text-white font-medium rounded-xl text-sm shadow-md shadow-emerald-600/10 hover:bg-emerald-700 transition-colors">
                Upgrade to Pro
              </button>
            </div>

            {/* Tier 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Enterprise</h3>
                <p className="text-xs text-slate-500 mt-1">For agribusinesses, cooperatives & institutions.</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">Custom</span>
                </div>
                <hr className="border-slate-100 my-4" />
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Dedicated Custom API Integration</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Multi-region Franchise Dashboards</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Custom Neural Net Model Tuning</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> 24/7 Dedicated Agronomist Support</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 px-4 bg-slate-900 text-white font-medium rounded-xl text-sm hover:bg-slate-800 transition-colors">
                Contact Enterprise Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Validated by the Field
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <p className="text-sm text-slate-600 italic">
                The instant diagnostic feature saved our whole early-stage tomato plot this monsoon. We spotted Early Blight 10 days before it usually becomes recognizable.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-slate-900">Rajesh K.</h4>
                <p className="text-xs text-slate-500">Commercial Farmer, Maharashtra</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <p className="text-sm text-slate-600 italic">
                Using FarmerLens to output structured PDF health reports has completely transformed how I present field analysis maps to my corporate client portfolio.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-slate-900">Dr. Amrita Sen</h4>
                <p className="text-xs text-slate-500">Agricultural Advisor</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <p className="text-sm text-slate-600 italic">
                Integrating this tool across our entire cooperative network has reduced blanket pesticide over-purchasing costs by an audited 22%.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-slate-900">Vikramjit Singh</h4>
                <p className="text-xs text-slate-500">Director, GreenGrow Cooperative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How accurate is the automated AI disease identification engine?",
                a: "Our core deep neural networks clock an audited 95% accuracy score across normalized, well-lit smartphone photography, checked dynamically against verified greenhouse laboratory control sets."
              },
              {
                q: "Which specific crop categories are currently supported?",
                a: "We actively track over 20 primary cash and food crop profiles, featuring extensive diagnostics built explicitly for tomatoes, potatoes, rice, wheat, corn, and diverse regional legumes."
              },
              {
                q: "Can non-English speakers use the regional language modules?",
                a: "Yes. The entire processing infrastructure provides deep native localization across Hindi, Marathi, Telugu, and Punjabi languages."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-slate-900 flex justify-between items-center hover:bg-slate-50/50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2 bg-slate-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Transform Farming Decisions with AI</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Join thousands of progressive growers and agribusinesses protecting their yields with instant AI crop insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto bg-slate-800 border border-slate-700 text-slate-300 px-6 py-3 rounded-xl font-medium hover:bg-slate-700 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-base mb-3">
              <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
                <Sprout className="h-4 w-4" />
              </div>
              <span>FarmerLens</span>
            </div>
            <p className="max-w-xs text-slate-500 leading-relaxed">
              Premium enterprise agriculture intelligence platforms powered safely by modern deep-learning agronomy models.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 tracking-wide uppercase text-[10px]">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">AI Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing Options</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mandi Metrics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 tracking-wide uppercase text-[10px]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Agronomy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 tracking-wide uppercase text-[10px]">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Charter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-900 text-center text-slate-600">
          &copy; {new Date().getFullYear()} FarmerLens Design. All rights reserved.
        </div>
      </footer>

    </div>
  );
}