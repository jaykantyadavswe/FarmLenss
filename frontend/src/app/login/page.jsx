'use client'
import React, { useState } from 'react';
import { 
  Sprout, Shield, Brain, Cloud, Users, CheckCircle2, 
  Mail, Lock, User, Phone, MapPin, Globe, ArrowRight,
  Eye, EyeOff
} from 'lucide-react';

export default function FarmerLensAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form field states
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', location: '', password: '', confirmPassword: '', language: 'English'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500); // Simulate SaaS authentication latency
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row antialiased selection:bg-emerald-500/30 selection:text-emerald-900 font-sans overflow-x-hidden">
      
      {/* LEFT SECTION: BRANDING & PRODUCT SHOWCASE (Hidden on mobile browsers, adaptive layout) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 relative overflow-hidden flex-col justify-between p-12 border-r border-slate-800">
        
        {/* Animated Background Mesh & Gradients */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        {/* Logo / Header */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="bg-gradient-to-tr from-emerald-500 to-blue-500 p-2 rounded-xl text-white shadow-lg shadow-emerald-500/20">
            <Sprout className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-bold text-white tracking-tight">
              Farmer<span className="text-emerald-400">Lens</span>
            </span>
            <p className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">AI-Powered Crop Intelligence</p>
          </div>
        </div>

        {/* Main Marketing Message */}
        <div className="relative z-10 my-auto max-w-lg space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Transform Farming Decisions with <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Artificial Intelligence</span>
          </h1>
          <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
            Detect crop diseases instantly, monitor crop health, receive smart recommendations, and improve agricultural productivity with advanced AI technology.
          </p>

          {/* Grid Layout for Floating Glass Cards */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl shadow-2xl relative group hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">Disease Detection</div>
              <div className="text-2xl font-black text-white">95% <span className="text-xs font-normal text-slate-400">Accuracy</span></div>
            </div>
            <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl shadow-2xl relative group hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">Active Network</div>
              <div className="text-2xl font-black text-white">10,000+ <span className="text-xs font-normal text-slate-400">Farmers</span></div>
            </div>
            <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl shadow-2xl relative group hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">Compute Capacity</div>
              <div className="text-2xl font-black text-white">50K+ <span className="text-xs font-normal text-slate-400">Analyses</span></div>
            </div>
            <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl shadow-2xl relative group hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">Localization</div>
              <div className="text-sm font-bold text-white pt-1">Multi-Language <span className="block text-[10px] text-slate-400 font-normal">Hindi, Marathi, Gujarati...</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="relative z-10 border-t border-slate-800/80 pt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-emerald-500" /> Secure Platform</div>
          <div className="flex items-center gap-1.5"><Brain className="h-3.5 w-3.5 text-emerald-500" /> AI Powered</div>
          <div className="flex items-center gap-1.5"><Cloud className="h-3.5 w-3.5 text-emerald-500" /> Cloud Based</div>
          <div className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-emerald-500" /> Trusted Framework</div>
        </div>
      </div>

      {/* RIGHT SECTION: AUTHENTICATION APPLICATION INTERFACE */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-16 relative bg-slate-50">
        
        {/* Subtle Background Analytics Preview Shapes Blur for Right Side */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-emerald-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl"></div>
        </div>

        {/* Main Auth Frame */}
        <div className="w-full max-w-md backdrop-blur-xl bg-white/80 border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-100 relative z-10 transition-all duration-500">
          
          {/* Mobile Only Header Layout */}
          <div className="flex md:hidden items-center gap-2 mb-6 justify-center">
            <div className="bg-emerald-600 p-2 rounded-xl text-white">
              <Sprout className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold text-slate-900">FarmerLens</span>
          </div>

          {/* Heading States Toggle Frame */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {isLogin ? 'Welcome Back' : 'Create Your Account'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {isLogin 
                ? 'Sign in to continue managing your crop intelligence dashboard.' 
                : 'Start using AI-powered agricultural insights today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Conditional Sign-Up Fields Layout with CSS Transitions */}
            {!isLogin && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input 
                      type="text" required placeholder="Enter full name"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="tel" required placeholder="Phone number"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Location / Village</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <input 
                        type="text" required placeholder="Village, State"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Preferred Language</label>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <select 
                      value={formData.language} 
                      onChange={(e) => setFormData({...formData, language: e.target.value})}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all appearance-none cursor-pointer"
                    >
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Marathi</option>
                      <option>Gujarati</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      ▼
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Shared Email Address Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input 
                  type="email" required placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all"
                />
              </div>
            </div>

            {/* Shared Password Input */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Password</label>
                {isLogin && (
                  <a href="#forgot" className="text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors">Forgot Password?</a>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input 
                  type={showPassword ? "text" : "password"} required placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all"
                />
                <button 
                  type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Additional Confirm Password Input for Sign-up */}
            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input 
                    type="password" required placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all"
                  />
                </div>
              </div>
            )}

            {/* Dynamic Checkboxes based on authentication state */}
            {isLogin ? (
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 rounded-md cursor-pointer" />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-slate-600 select-none cursor-pointer">Remember Me</label>
              </div>
            ) : (
              <div className="flex items-start">
                <input id="terms" type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 rounded-md cursor-pointer" />
                <label htmlFor="terms" className="ml-2 block text-xs text-slate-600 leading-relaxed select-none cursor-pointer">
                  I agree to the <a href="#terms" className="text-emerald-600 hover:underline font-medium">Terms of Service</a> and <a href="#privacy" className="text-emerald-600 hover:underline font-medium">Privacy Policy</a>.
                </label>
              </div>
            )}

            {/* Main CTA Submission Button */}
            <button 
              type="submit" disabled={isLoading}
              className="w-full bg-slate-900 text-white py-3 px-4 rounded-xl font-medium text-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 shadow-lg shadow-slate-900/10 transition-all flex justify-center items-center gap-2 group relative overflow-hidden"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Third-Party Federated Authentication Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-3 text-slate-400 font-semibold tracking-wider">Or Continue With</span></div>
          </div>

          {/* Social Auth Providers Grid */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-700 shadow-sm">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.57 14.96 1 12 1 7.35 1 3.4 3.65 1.52 7.52l3.75 2.9C6.15 7.17 8.87 5.04 12 5.04z"/>
                <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.73 2.89c2.18-2.01 3.45-4.97 3.45-8.62z"/>
                <path fill="#FBBC05" d="M5.27 14.58c-.25-.75-.4-1.55-.4-2.38s.14-1.63.4-2.38L1.52 6.92C.55 8.87 0 11.04 0 13.33s.55 4.46 1.52 6.41l3.75-2.91z"/>
                <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.73-2.89c-1.1.74-2.52 1.18-4.23 1.18-3.13 0-5.85-2.13-6.73-5.38L1.52 19.9C3.4 23.77 7.35 23 12 23z"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-700 shadow-sm">
              <svg className="h-4 w-4" viewBox="0 0 23 23">
                <path fill="#F25022" d="M0 0h11v11H0z"/>
                <path fill="#7FBA00" d="M12 0h11v11H12z"/>
                <path fill="#00A4EF" d="M0 12h11v11H0z"/>
                <path fill="#FFB900" d="M12 12h11v11H12z"/>
              </svg>
              <span>Microsoft</span>
            </button>
          </div>

          {/* Card Toggle Links Footer */}
          <div className="mt-6 text-center text-xs text-slate-500">
            {isLogin ? (
              <>
                Do not have an account?{' '}
                <button type="button" onClick={() => setIsLogin(false)} className="text-emerald-600 font-semibold hover:underline">Create Account</button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" onClick={() => setIsLogin(true)} className="text-emerald-600 font-semibold hover:underline">Sign In</button>
              </>
            )}
          </div>

        </div>
      </div>
      
    </div>
  );
}