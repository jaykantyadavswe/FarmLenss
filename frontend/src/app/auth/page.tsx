'use client';

import React, { useState } from 'react';
import { 
  Sprout, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
//   Chrome, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Leaf, 
  CloudSun, 
  Eye, 
  EyeOff,
  Sparkles,
  Loader2
} from 'lucide-react';

export default function FarmLensAuth() {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState(false);

  // Form State Definitions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate premium verification loop execution
    setTimeout(() => {
      setIsLoading(false);
      setSuccessState(true);
    }, 1800);
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#060c07] text-slate-200 font-sans overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* ========================================================================= */}
      {/* LEFT SIDE PANEL: BRANDING SHOWCASE & MODERN AGRI-TECH ECOSYSTEM MOCKUPS */}
      {/* ========================================================================= */}
      <section className="hidden lg:flex lg:col-span-5 xl:col-span-6 relative flex-col justify-between p-12 border-r border-slate-900 overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a140b] to-[#060c07]">
        
        {/* Background Mesh Grids & Hyper-glow Orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse [animation-duration:8s]" />
        
        {/* Top Branding Section */}
        <div className="relative z-10 flex items-center gap-2.5 font-bold text-white text-lg tracking-tight select-none">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Sprout className="w-4.5 h-4.5 text-emerald-400" />
          </div>
          <span className="bg-gradient-to-b from-white to-slate-200 bg-clip-text text-transparent">FarmLens</span>
        </div>

        {/* Centerpiece Architecture: Premium Floating Micro Cards over abstract backdrop layout */}
        <div className="relative my-auto flex items-center justify-center py-16">
          
          {/* Main Visual Framework Base Shape */}
          <div className="w-[85%] aspect-video rounded-2xl bg-slate-950/40 border border-slate-800/80 p-6 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            
            {/* Simulated Live Scan Telemetry Interface */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-900/80 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-2"><Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> SCANNER_NODE_ALPHA // LIVE</span>
              <span>CONFIDENCE: 98.4%</span>
            </div>
            
            <div className="space-y-3">
              <div className="h-2 w-[45%] bg-slate-800/60 rounded" />
              <div className="h-2 w-[75%] bg-slate-800/40 rounded" />
              <div className="h-2 w-[60%] bg-slate-800/40 rounded" />
            </div>

            {/* Simulated Target Reticle Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
              <div className="w-24 h-24 border border-dashed border-emerald-500/40 rounded-full animate-spin [animation-duration:30s]" />
            </div>
          </div>

          {/* FLOATING CARD 1: AI DISEASE DETECTION */}
          <div className="absolute -top-4 left-4 flex items-center gap-3 bg-slate-950/70 border border-slate-800/80 px-4 py-3 rounded-xl backdrop-blur-xl shadow-2xl animate-bounce [animation-duration:5s]">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500">AI Diagnosis</p>
              <p className="text-xs font-bold text-white">Blight Infection Detected</p>
            </div>
          </div>

          {/* FLOATING CARD 2: INSTANT RECS */}
          <div className="absolute -bottom-6 right-6 flex items-center gap-3 bg-slate-950/70 border border-slate-800/80 px-4 py-3 rounded-xl backdrop-blur-xl shadow-2xl animate-bounce [animation-duration:6s] [animation-delay:0.5s]">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500">Action Plan</p>
              <p className="text-xs font-bold text-teal-400">Copper Fungicide Treatment</p>
            </div>
          </div>

          {/* FLOATING CARD 3: CLIMATE DATA */}
          <div className="absolute top-1/2 -right-8 -translate-y-1/2 flex items-center gap-3 bg-slate-950/70 border border-slate-800/80 px-4 py-3 rounded-xl backdrop-blur-xl shadow-2xl animate-bounce [animation-duration:7s] [animation-delay:1s]">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <CloudSun className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500">Weather Insights</p>
              <p className="text-xs font-bold text-slate-200">High Humidity Alert</p>
            </div>
          </div>
        </div>

        {/* Lower Segment: Explanatory Core Messaging Framework */}
        <div className="relative z-10 space-y-6">
          <div className="space-y-3">
            <h1 className="text-2xl xl:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Protect Your Crops With AI
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Upload crop images, detect diseases instantly, receive treatment recommendations, and chat with an AI agriculture expert.
            </p>
          </div>

          {/* Micro Telemetry Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-900/80">
            {[
              { label: "Crop Analyses", val: "10,000+" },
              { label: "Detection Accuracy", val: "95%" },
              { label: "Farmers Helped", val: "5,000+" },
              { label: "Supported Crops", val: "50+" }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-xs text-slate-500 font-mono">{stat.label}</p>
                <p className="text-sm font-bold text-slate-200 mt-0.5">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* RIGHT SIDE PANEL: MINIMAL AUTHENTICATION INTERACTIVE FORM CONTROL CARD */}
      {/* ========================================================================= */}
      <section className="col-span-1 lg:col-span-7 xl:col-span-6 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-12 relative">
        
        {/* Subtle background element adjustments for smaller viewports */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#112515_0%,transparent_50%)] lg:hidden opacity-40 pointer-events-none" />

        {/* Mobile View Header Wrapper */}
        <div className="lg:hidden flex flex-col items-center text-center mb-8 space-y-3 select-none">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-lg">
            <Sprout className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white tracking-tight">FarmLens</h2>
            <p className="text-xs text-slate-500 font-mono mt-0.5">AI-powered farming intelligence</p>
          </div>
        </div>

        {/* CORE INTERACTIVE LAYOUT CARD CAPSULE */}
        <div className="w-full max-w-md bg-slate-950/40 lg:bg-slate-950/20 border border-slate-900 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
          
          {/* Success Validation Feedback Dynamic Mask Screen */}
          {successState && (
            <div className="absolute inset-0 bg-[#060c07] rounded-2xl z-30 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">Authentication Success</h3>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed mb-6">
                Access tokens verified. Synchronizing localized telemetry models...
              </p>
              <div className="w-10 h-1 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full animate-progress" style={{ width: '60%' }} />
              </div>
            </div>
          )}

          {/* Desktop Heading Metadata Segment */}
          <div className="hidden lg:block space-y-1 mb-8">
            <h2 className="text-xl font-bold tracking-tight text-white">Welcome to FarmLens</h2>
            <p className="text-xs text-slate-500 font-medium">AI-powered farming intelligence</p>
          </div>

          {/* ANIMATED MODE TAB SELECTOR SWITCHER */}
          <div className="relative flex bg-slate-950 border border-slate-900 p-1 rounded-xl mb-6">
            <div 
              className="absolute top-1 bottom-1 left-1 rounded-lg bg-slate-900 border border-slate-800/80 transition-all duration-300 shadow-sm"
              style={{
                width: 'calc(50% - 4px)',
                transform: authMode === 'signup' ? 'translateX(100%)' : 'translateX(0)'
              }}
            />
            <button
              type="button"
              onClick={() => setAuthMode('signin')}
              className={`w-1/2 text-center py-2 text-xs font-semibold tracking-wide relative z-10 transition-colors ${authMode === 'signin' ? 'text-white' : 'text-slate-500 hover:text-slate-400'}`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setAuthMode('signup')}
              className={`w-1/2 text-center py-2 text-xs font-semibold tracking-wide relative z-10 transition-colors ${authMode === 'signup' ? 'text-white' : 'text-slate-500 hover:text-slate-400'}`}
            >
              Sign Up
            </button>
          </div>

          {/* STRUCTURAL INPUT ACTION CHANNELS */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Conditional Scope: Full Name Block configuration (Sign Up Only) */}
            {authMode === 'signup' && (
              <div className="space-y-1.5 animate-slideDown">
                <label htmlFor="auth-name" className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                  <input
                    id="auth-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Marcus Vance"
                    className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500/40 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/10 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Field: Operator Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="auth-email" className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input
                  id="auth-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="marcus@vineyard.com"
                  className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500/40 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/10 transition-all"
                />
              </div>
            </div>

            {/* Field: Account Password Pin */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="auth-password" className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                  Password
                </label>
                {authMode === 'signin' && (
                  <a href="#forgot" className="text-[11px] text-emerald-500 hover:text-emerald-400 transition-colors font-medium">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input
                  id="auth-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500/40 rounded-xl py-2.5 pl-10 pr-10 text-xs text-slate-200 placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Conditional Scope: Password Confirm Matrix verification (Sign Up Only) */}
            {authMode === 'signup' && (
              <div className="space-y-1.5 animate-slideDown">
                <label htmlFor="auth-confirm" className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                  <input
                    id="auth-confirm"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500/40 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/10 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Field: Remember Me Checkbox Matrix (Sign In Only) */}
            {authMode === 'signin' && (
              <div className="flex items-center gap-2 pt-1 select-none">
                <input
                  id="auth-remember"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded bg-slate-950 border border-slate-900 text-emerald-500 focus:ring-0 focus:ring-offset-0 focus:outline-none cursor-pointer accent-emerald-500"
                />
                <label htmlFor="auth-remember" className="text-xs text-slate-500 font-medium cursor-pointer">
                  Remember my access session
                </label>
              </div>
            )}

            {/* Primary Submit Action Configuration Toggle */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-600/50 text-xs font-bold text-[#060c07] shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.35)] disabled:shadow-none transition-all cursor-pointer group disabled:cursor-not-allowed select-none active:scale-[0.99]"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-[#060c07]" />
              ) : (
                <>
                  <span>{authMode === 'signin' ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>

          </form>

          {/* Horizontal Visual Context Separator Segment */}
          <div className="relative my-6 flex items-center justify-center text-[10px] font-mono tracking-wider text-slate-600 uppercase select-none">
            <div className="absolute inset-x-0 h-[1px] bg-slate-900/80" />
            <span className="relative z-10 bg-[#060c07] lg:bg-slate-950/20 px-3">Or continue with</span>
          </div>

          {/* Secondary Third-Party Social Provider Trigger */}
          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-900 text-slate-300 hover:text-white text-xs font-semibold transition-all select-none active:scale-[0.99] cursor-pointer"
          >
            {/* <Chrome className="w-4 h-4 text-slate-400" /> */}
            <span>Google Workplace Secure Entry</span>
          </button>

          {/* Bottom Switcher Text Link Indicator */}
          <div className="mt-8 text-center text-xs text-slate-500">
            {authMode === 'signin' ? (
              <p>
                Don't have an account?{' '}
                <button type="button" onClick={() => setAuthMode('signup')} className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors focus:outline-none">
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button type="button" onClick={() => setAuthMode('signin')} className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors focus:outline-none">
                  Sign In
                </button>
              </p>
            )}
          </div>

        </div>

        {/* Small viewport footer note element adjustment */}
        <div className="mt-12 text-center text-[10px] font-mono text-slate-700 select-none">
          &copy; {new Date().getFullYear()} FarmLens AI Technologies, Inc. // SECURE NODE
        </div>

      </section>
    </main>
  );
}