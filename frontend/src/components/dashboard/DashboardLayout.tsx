'use client';

import React, { useState } from 'react';

type UserMessage = { role: 'user'; text: string; image?: string };
type AIMessage = { role: 'ai'; text?: string; title?: string; confidence?: string; explanation?: string; treatment?: string; prevention?: string };
type Message = UserMessage | AIMessage;
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import RightPanel from './RightPanel';
import { EmptyState, LoadingState, ErrorState } from './StateViews';

export default function DashboardLayout() {
  const [viewState, setViewState] = useState<'empty' | 'loading' | 'chat' | 'error'>('chat');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [activeTab, setActiveTab] = useState('Crop Analysis');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      role: 'user',
      text: 'Please analyze this crop and tell me what disease it has.',
      image: '/mock-corn.png'
    },
    {
      role: 'ai',
      title: 'Fall Armyworm Detection',
      confidence: '94%',
      explanation: 'The image shows characteristic feeding damage caused by Fall Armyworm larvae. The irregular holes and frass deposits indicate an active infestation.',
      treatment: 'Apply Emamectin Benzoate or Chlorantraniliprole according to local agricultural guidelines.',
      prevention: 'Monitor fields regularly and remove heavily infested plants.'
    },
    { role: 'user', text: 'Can I use organic treatment?' },
    { role: 'ai', text: 'Yes. Neem Oil and Bacillus thuringiensis (Bt) are effective against early-stage larvae.' },
    { role: 'user', text: 'How many days before recovery?' },
    { role: 'ai', text: 'Recovery depends on infestation severity but visible improvement typically begins within 7-14 days after treatment.' }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setChatMessages(prev => [...prev, { role: 'user', text: inputMessage }]);
    setInputMessage('');
    setViewState('loading');

    setTimeout(() => {
      setViewState('chat');
      setChatMessages(prev => [...prev, {
        role: 'ai',
        text: 'Telemetry confirmed. Improvement vector models suggest monitoring field parameters continuously over the standard timeline cycle.'
      }]);
    }, 1200);
  };

  return (
    <div className={`min-h-screen flex font-sans bg-[#060c07] text-slate-200 overflow-x-hidden relative`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />

      {/* Sidebar Component Block */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        currentViewState={viewState}
        setViewState={setViewState}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 xl:pl-[280px] flex flex-col min-w-0">
        {/* Navbar Component Block */}
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setIsMobileOpen={setIsMobileOpen} />

        {/* State Manual Strategy Override Row (Highly visible utility control node) */}
        <div className="bg-slate-950/60 border-b border-slate-900 px-6 py-2 flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-500">State Control Node:</span>
          {(['chat', 'loading', 'empty', 'error'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setViewState(st)}
              className={`px-2 py-0.5 rounded border capitalize transition-colors ${
                viewState === st ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-bold' : 'bg-slate-900 text-slate-500 border-slate-800'
              }`}
            >
              {st} view
            </button>
          ))}
        </div>

        {/* Content Panel Dual Grid Wrapper */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-w-0">
          <main className="col-span-1 lg:col-span-8 flex flex-col justify-between relative min-w-0 border-r border-slate-900/60">
            
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-h-[calc(100vh-210px)]">
              {viewState === 'empty' && <EmptyState onStart={() => setViewState('loading')} />}
              {viewState === 'loading' && <LoadingState />}
              {viewState === 'error' && <ErrorState onReset={() => setViewState('chat')} />}
              {viewState === 'chat' && chatMessages.map((msg, i) => <MessageBubble key={i} msg={msg} />)}
            </div>

            <ChatInput inputMessage={inputMessage} setInputMessage={setInputMessage} onSubmit={handleSendMessage} />
          </main>

          {/* Right Summary Structured Panel Section */}
          <RightPanel />
        </div>
      </div>
    </div>
  );
}