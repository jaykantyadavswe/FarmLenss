'use client';

import React, { useState } from 'react';
import axios from 'axios';
import api from '@/lib/api.js';
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Sprout,
  Mail,
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  Loader2,
  Leaf
} from 'lucide-react';

export default function FarmLensAuth() {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState(false);
  const [message, setMessage] = useState("");

  // Form State Definitions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccessState(true);
    }, 1800);

    try {
      if (authMode === 'signin') {
        const response = await api.post(
          "/auth/login",
          {
            email: formData.email,
            password: formData.password
          }
        );

        localStorage.setItem(
          "token",
          response.data.token
        )

        router.push("/dashboard");

        toast.success(response.data.message);
      } else {
        const response = await api.post(
          "/auth/register",
          formData
        );

        console.log(response)
        toast.success(response.data.message);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // toast.error(error.response?.data.message);
        if (error.response?.status === 409) {

          toast.error(error.response?.data.message);
          setMessage(error.response?.data.message);

          setAuthMode("signin");   // Register → Login form
        }
      } else {
        console.log(error);
      }
    }
  };


  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-[#000] text-slate-200 font-sans overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      <section className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-8 relative">
        <div className="relative z-10 mb-5 flex items-center gap-2.5 font-bold text-white text-lg tracking-tight select-none">
          <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Leaf className="w-4.5 h-4.5 text-emerald-400" />
          </div>
          <span className="bg-gradient-to-b from-white to-green-500 bg-clip-text text-transparent">FarmLens</span>
        </div>
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
        <div className="w-full max-w-md bg-slate-950/40 lg:bg-slate-950/20 border border-green-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">

          {/* Desktop Heading Metadata Segment */}
          <div className="hidden lg:block space-y-1 mb-8">
            <h2 className="text-xl font-bold tracking-tight text-green-400">Welcome to FarmLens</h2>
            <p className="text-xs text-white font-medium">AI-powered farming intelligence</p>
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
                    onChange={handelChange}
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
                  onChange={handelChange}
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
                  onChange={handelChange}
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


            {/* Primary Submit Action Configuration Toggle */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 disabled:bg-green-600/50 text-xs font-bold text-[#060c07] shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.35)] disabled:shadow-none transition-all cursor-pointer group disabled:cursor-not-allowed select-none active:scale-[0.99]"
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

          {/* Bottom Switcher Text Link Indicator */}
          <div className="mt-5 text-center text-xs text-slate-500">
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
        <div className="mt-3 text-center text-[10px] font-mono text-slate-700 select-none">
          &copy; {new Date().getFullYear()} FarmLens AI Technologies, Inc. // SECURE NODE
        </div>

      </section>
    </main>
  );
}