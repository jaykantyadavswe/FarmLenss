'use client'
import React, { useState } from 'react';
import {
  Sprout, LayoutDashboard, ScanLine, FileText, History, 
  TrendingUp, Bell, BarChart3, Users, Settings, LogOut, 
  Sun, Moon, Search, SlidersHorizontal, CloudRain, Wind, 
  Thermometer, Droplets, CheckCircle2, AlertTriangle, 
  Info, ArrowUpRight, ArrowDownRight, Upload, ChevronRight, 
  Download, Share2, Eye, Calendar, RefreshCw
} from 'lucide-react';

export default function FarmerLensDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedNotificationFilter, setSelectedNotificationFilter] = useState('all');
  
  // AI Analysis Mock States
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleDemoUpload = () => {
    setIsScanning(true);
    setAnalysisResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setAnalysisResult({
        disease: "Rice Blast (Magnaporthe oryzae)",
        confidence: "98.4%",
        severity: "High Risk",
        treatment: "Apply systemic fungicides like Tricyclazole 75 WP at 0.6g/liter of water immediately.",
        prevention: "Avoid excessive nitrogen application, maintain optimum water levels, and clear crop residue post-harvest."
      });
    }, 2000);
  };

  return (
    <div className={`min-h-screen font-sans antialiased flex ${isDarkMode ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* SIDEBAR NAVIGATION */}
      <aside className={`fixed inset-y-0 left-0 z-40 ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 border-r flex flex-col justify-between backdrop-blur-md ${isDarkMode ? 'bg-slate-900/80 border-slate-850' : 'bg-white/80 border-slate-200'}`}>
        <div>
          {/* Logo Brand Frame */}
          <div className="h-16 flex items-center px-6 justify-between border-b border-dashed border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="bg-gradient-to-tr from-emerald-600 to-sky-500 p-2 rounded-xl text-white shadow-md shadow-emerald-500/10 flex-shrink-0">
                <Sprout className="h-5 w-5" />
              </div>
              {isSidebarOpen && (
                <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent tracking-tight">
                  Farmer<span className="text-emerald-500">Lens</span>
                </span>
              )}
            </div>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hidden lg:block"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'analysis', label: 'AI Crop Analysis', icon: ScanLine },
              { id: 'analytics', label: 'Advanced Analytics', icon: BarChart3 },
              { id: 'insights', label: 'Market Insights', icon: TrendingUp },
              { id: 'reports', label: 'Smart Reports', icon: FileText },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group duration-200 ${
                    isActive 
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' 
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-transform group-hover:scale-105 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-emerald-500'}`} />
                  {isSidebarOpen && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom Segment */}
        <div className="p-4 border-t border-dashed border-slate-200/60 dark:border-slate-800 space-y-2">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-full flex items-center justify-between p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium"
          >
            <div className="flex items-center gap-3">
              {isDarkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-indigo-600" />}
              {isSidebarOpen && <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>}
            </div>
          </button>

          <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent">
            <img 
              className="h-8 w-8 rounded-full border bg-slate-200" 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
              alt="User profile" 
            />
            {isSidebarOpen && (
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">Devendra Kumar</p>
                <p className="text-[10px] text-slate-400 truncate">Premium Tier Advisor</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* MAIN MAIN APP CANVAS CONTAINER */}
      <div className={`flex-1 min-w-0 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-20'}`}>
        
        {/* TOP COMPACT NAVIGATION BAR */}
        <header className={`h-16 border-b backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900/80 border-slate-850' : 'bg-white/80 border-slate-200'}`}>
          <div className="max-w-md w-full relative hidden sm:block">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input 
              type="text" placeholder="Global system search commands..." 
              className={`w-full pl-9 pr-4 py-1.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200'}`}
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Realtime Weather Intelligence Capsule Widget */}
            <div className={`hidden lg:flex items-center gap-3 border px-3 py-1.5 rounded-xl text-xs ${isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-100/70 border-slate-200/80'}`}>
              <div className="flex items-center gap-1.5 text-amber-500 font-semibold">
                <Thermometer className="h-3.5 w-3.5" /> 31°C
              </div>
              <div className="w-px h-3 bg-slate-300 dark:bg-slate-700"></div>
              <div className="flex items-center gap-1.5 text-sky-500">
                <CloudRain className="h-3.5 w-3.5" /> 82% Humidity
              </div>
            </div>

            {/* Quick Action Trigger Button */}
            <button 
              onClick={() => setActiveTab('analysis')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-all duration-150"
            >
              <ScanLine className="h-3.5 w-3.5" /> Analyze Crop
            </button>

            {/* Notification Indicator Button */}
            <div className="relative">
              <button className={`p-2 rounded-xl border transition-colors ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'}`}>
                <Bell className="h-4 w-4" />
                <span className="absolute top-1 right-1 h-1.5 w-1.5 bg-rose-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* DYNAMIC MIDDLE CONTENT INTERFACE VIEW SWITCHER */}
        <main className="p-6 lg:p-8 flex-1 overflow-y-auto space-y-6">
          
          {/* VIEW 1: MAIN DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <>
              {/* Hero Banner Section */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-2 border-b border-dashed border-slate-200 dark:border-slate-800">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Welcome Back, Farmer 👋</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Monitor crop health, track disease trends, and receive AI-powered farming recommendations.</p>
                </div>
                <button onClick={() => setActiveTab('analysis')} className="bg-slate-900 dark:bg-white dark:text-slate-950 text-white font-medium text-xs px-4 py-2 rounded-xl hover:opacity-90 transition-all shadow-sm">
                  Analyze New Crop
                </button>
              </div>

              {/* Overview Analytics Counter Row Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { title: 'Total Crop Analyses', value: '12,540', change: '+12% MoM', up: true },
                  { title: 'Disease Detections', value: '3,240', change: 'Stable', up: null },
                  { title: 'Healthy Crop Rate', value: '94%', change: '+2.1% Gain', up: true },
                  { title: 'Yield Improvement', value: '+18%', change: 'Target reached', up: true },
                  { title: 'AI Recommendation Success', value: '1,200', change: '89% conversion', up: true },
                ].map((stat, i) => (
                  <div key={i} className={`p-4 border rounded-2xl shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-850' : 'bg-white border-slate-200'}`}>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{stat.title}</div>
                    <div className="text-2xl font-bold tracking-tight mt-1">{stat.value}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${stat.up === true ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle Row Grid: Score Visualizer & AI Recommendation Feed */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Crop Health Radial Layout Score Card */}
                <div className={`p-6 border rounded-2xl shadow-sm flex flex-col justify-between ${isDarkMode ? 'bg-slate-900 border-slate-850' : 'bg-white border-slate-200'}`}>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight text-slate-400 uppercase tracking-wide">Crop Health Score</h3>
                    <div className="flex items-center justify-center py-6">
                      <div className="relative flex items-center justify-center">
                        {/* Circular Progress Mock Track */}
                        <svg className="w-32 h-32 transform -rotate-90">
                          <circle cx="64" cy="64" r="54" strokeWidth="8" stroke="currentColor" className="text-slate-100 dark:text-slate-800" fill="transparent" />
                          <circle cx="64" cy="64" r="54" strokeWidth="8" strokeDasharray="339" strokeDashoffset="37" stroke="currentColor" className="text-emerald-500" fill="transparent" strokeLinecap="round" />
                        </svg>
                        <div className="absolute text-center">
                          <span className="text-3xl font-black tracking-tight">89</span>
                          <span className="text-slate-400 text-xs block">/100</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold uppercase mt-2">
                      <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-500">Healthy</div>
                      <div className="p-1.5 rounded bg-amber-500/10 text-amber-500">Mod Risk</div>
                      <div className="p-1.5 rounded bg-rose-500/10 text-rose-500">High Risk</div>
                    </div>
                  </div>

                  <div className={`mt-4 p-3 rounded-xl text-xs border ${isDarkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-emerald-50/50 border-emerald-100 text-emerald-950'}`}>
                    <span className="font-bold text-emerald-600 block mb-0.5">💡 AI Summary:</span>
                    Your crops show excellent health conditions with minor fungal risks detected in the southern field.
                  </div>
                </div>

                {/* AI Recommendation Center Panel */}
                <div className={`lg:col-span-2 p-6 border rounded-2xl shadow-sm flex flex-col justify-between ${isDarkMode ? 'bg-slate-900 border-slate-850' : 'bg-white border-slate-200'}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide">AI Recommendation Center</h3>
                      <span className="text-[10px] font-medium bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded">Realtime</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { text: 'Apply systemic copper-based fungicide in sector southern plot B immediately.', priority: 'High', color: 'bg-rose-500' },
                        { text: 'Monitor ambient soil moisture levels using internal remote field sensors.', priority: 'Medium', color: 'bg-amber-500' },
                        { text: 'Reduce localized central pivot irrigation frequency to lower leaf humidity.', priority: 'Low', color: 'bg-sky-500' },
                        { text: 'Inspect neighboring crop rows within a 15-meter buffer zone radius.', priority: 'Low', color: 'bg-sky-500' },
                      ].map((rec, i) => (
                        <div key={i} className={`p-3 rounded-xl border flex items-start gap-3 text-xs transition-colors ${isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                          <span className={`h-2 w-2 rounded-full mt-1.5 ${rec.color}`}></span>
                          <div className="flex-1">
                            <p className="font-medium text-slate-700 dark:text-slate-300">{rec.text}</p>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{rec.priority}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Weather Alert Impact: Expected rainfall may elevate spore dispersal danger by 12%.</span>
                  </div>
                </div>

              </div>

              {/* Recent Analyses Interactive Tabular Data Panel */}
              <div className={`p-6 border rounded-2xl shadow-sm overflow-hidden ${isDarkMode ? 'bg-slate-900 border-slate-850' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide">Recent Diagnostic Records</h3>
                  <button onClick={() => setActiveTab('analysis')} className="text-xs font-semibold text-emerald-500 flex items-center gap-1 hover:underline">
                    View Complete History <ChevronRight className="h-3 w-3" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 font-semibold uppercase">
                        <th className="pb-3 font-semibold">Crop Matrix</th>
                        <th className="pb-3 font-semibold">Identified Condition</th>
                        <th className="pb-3 font-semibold">Confidence Rating</th>
                        <th className="pb-3 font-semibold">System Status</th>
                        <th className="pb-3 font-semibold">Timestamp</th>
                        <th className="pb-3 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                      {[
                        { crop: 'Premium Wheat T-4', disease: 'Leaf Rust (Puccinia)', confidence: '97.6%', status: 'Resolved', date: '2026-06-18', badge: 'bg-emerald-500/10 text-emerald-500' },
                        { crop: 'Basmati Rice Sub-A', disease: 'Rice Blast Fungi', confidence: '94.2%', status: 'Flagged Risk', date: '2026-06-17', badge: 'bg-amber-500/10 text-amber-500' },
                        { crop: 'Bt Cotton Hybrid', disease: 'None (Optimal Health)', confidence: '99.1%', status: 'Healthy', date: '2026-06-15', badge: 'bg-sky-500/10 text-sky-500' },
                        { crop: 'Sugarcane Long-Stalk', disease: 'Red Rot Infection', confidence: '88.5%', status: 'Critical Action', date: '2026-06-12', badge: 'bg-rose-500/10 text-rose-500' },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/50 transition-colors">
                          <td className="py-3.5 font-medium text-slate-900 dark:text-white">{row.crop}</td>
                          <td className="py-3.5">{row.disease}</td>
                          <td className="py-3.5 font-mono">{row.confidence}</td>
                          <td className="py-3.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${row.badge}`}>{row.status}</span>
                          </td>
                          <td className="py-3.5 text-slate-400 font-mono">{row.date}</td>
                          <td className="py-3.5 text-right space-x-2">
                            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" title="View Report"><Eye className="h-3.5 w-3.5" /></button>
                            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" title="Download PDF"><Download className="h-3.5 w-3.5" /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* VIEW 2: AI CROP ANALYSIS DROP ZONE STAGE */}
          {activeTab === 'analysis' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">AI Crop Diagnostic Lab</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Upload leaves or plant parts imagery for near-instant classification and targeted chemical/organic prevention plans.</p>
              </div>

              {/* Upload Drop Grid Workspace */}
              <div className={`p-8 border-2 border-dashed rounded-2xl text-center transition-all ${isScanning ? 'border-amber-500 bg-amber-500/5' : 'border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900'}`}>
                <div className="max-w-sm mx-auto flex flex-col items-center justify-center">
                  <div className={`p-4 rounded-xl mb-4 ${isScanning ? 'bg-amber-100 text-amber-600 animate-spin' : 'bg-emerald-50 dark:bg-slate-800 text-emerald-600'}`}>
                    {isScanning ? <RefreshCw className="h-6 w-6" /> : <Upload className="h-6 w-6" />}
                  </div>
                  
                  <h3 className="text-sm font-bold tracking-tight mb-1">{isScanning ? 'Scanning Crop via Neural Engine...' : 'Drop Crop Image Here'}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">Accepts PNG, JPEG photographs up to 12MB. Optimized for high-resolution macros of leaf anomalies.</p>
                  
                  {!isScanning && (
                    <button 
                      type="button" 
                      onClick={handleDemoUpload}
                      className="bg-emerald-600 text-white font-semibold text-xs px-4 py-2 rounded-xl hover:bg-emerald-500 shadow-sm transition-all"
                    >
                      Simulate Demo Scan Analysis
                    </button>
                  )}
                </div>
              </div>

              {/* Analysis Computed Result View Grid Card */}
              {analysisResult && (
                <div className={`p-6 border rounded-2xl shadow-md space-y-4 animate-fadeIn ${isDarkMode ? 'bg-slate-900 border-slate-850' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center justify-between pb-3 border-b border-dashed border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Diagnostic Complete</span>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">{analysisResult.disease}</h3>
                    </div>
                    <span className="text-xs font-bold text-rose-500 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-xl">
                      {analysisResult.severity}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl border bg-slate-50/50 dark:bg-slate-950/30 dark:border-slate-800">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">🌿 Smart Treatment Protocol</span>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{analysisResult.treatment}</p>
                    </div>
                    <div className="p-4 rounded-xl border bg-slate-50/50 dark:bg-slate-950/30 dark:border-slate-800">
                      <span className="font-bold text-sky-600 dark:text-sky-400 block mb-1">🛡️ Preventive Measures</span>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{analysisResult.prevention}</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button className="px-3 py-1.5 border rounded-lg text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 transition-colors">
                      <Share2 className="h-3.5 w-3.5" /> Share Report
                    </button>
                    <button className="px-3 py-1.5 bg-slate-900 dark:bg-white dark:text-slate-950 text-white rounded-lg text-xs font-semibold hover:opacity-90 flex items-center gap-1.5 transition-colors">
                      <Download className="h-3.5 w-3.5" /> Save Audit PDF
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VIEW 3: MARKET INSIGHTS PRICING GRID */}
          {activeTab === 'insights' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Live Mandi Market Trends</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Track real-time Minimum Support Price (MSP) benchmarks alongside data-driven futures forecasting widgets.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Premium Wheat', msp: '₹2,275/Qtl', market: '₹2,410/Qtl', change: '+2.4%', positive: true },
                  { name: 'Basmati Paddy', msp: '₹2,183/Qtl', market: '₹3,950/Qtl', change: '+5.1%', positive: true },
                  { name: 'Long Cotton', msp: '₹6,620/Qtl', market: '₹6,400/Qtl', change: '-1.8%', positive: false },
                  { name: 'Yellow Mustard', msp: '₹5,450/Qtl', market: '₹5,620/Qtl', change: '+0.7%', positive: true },
                ].map((crop, idx) => (
                  <div key={idx} className={`p-4 border rounded-2xl shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-850' : 'bg-white border-slate-200'}`}>
                    <h3 className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">{crop.name}</h3>
                    <div className="mt-3 space-y-1 text-xs">
                      <div className="flex justify-between text-slate-400"><span>Official MSP:</span> <span className="font-medium text-slate-700 dark:text-slate-200">{crop.msp}</span></div>
                      <div className="flex justify-between text-slate-400"><span>Market Valuation:</span> <span className="font-bold text-slate-900 dark:text-white">{crop.market}</span></div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-dashed border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400 font-normal">Trend Indicator:</span>
                      <span className={`flex items-center gap-0.5 ${crop.positive ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {crop.positive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                        {crop.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 4: GENERIC APP SETTINGS */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Platform Configuration</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Control regional agronomy parameters, push alert boundaries, and manage linked ecosystem accounts.</p>
              </div>

              <div className={`p-6 border rounded-2xl space-y-4 ${isDarkMode ? 'bg-slate-900 border-slate-850' : 'bg-white border-slate-200'}`}>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Preferred Language Assistance</label>
                  <select className={`w-full text-xs px-3 py-2 border rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 ${isDarkMode ? 'border-slate-800 text-white' : 'border-slate-200'}`}>
                    <option className="text-slate-900">English Language Interface</option>
                    <option className="text-slate-900">Hindi (हिन्दी) Interface</option>
                    <option className="text-slate-900">Marathi (मराठी) Interface</option>
                    <option className="text-slate-900">Gujarati (ગુજરાતી) Interface</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Satellite Field Integrations</label>
                  <button className="w-full text-left py-2.5 px-4 border border-dashed rounded-xl text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                    + Connect Remote Sentinel IoT Weather Station Hub
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
      
    </div>
  );
}