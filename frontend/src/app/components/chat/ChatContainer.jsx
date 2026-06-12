"use client";
import { useEffect, useRef, useState } from "react";
import { ImagePlus, Sparkles, ShieldCheck } from "lucide-react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function ChatContainer({ onAnalysisUpdate }) {
    const [messages, setMessages] = useState([]);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async (formData) => {
        const imageFile = formData.get("media");
        const text = formData.get("text");

        const imagePreview = imageFile
            ? URL.createObjectURL(imageFile)
            : null;

        setMessages(prev => [
            ...prev,
            { role: "user", text, image: imagePreview }
        ]);

        setMessages(prev => [
            ...prev,
            { role: "assistant", text: "", loading: true }
        ]);

        onAnalysisUpdate?.(null);

        const token = localStorage.getItem("token");
        try {
            const res = await fetch("http://localhost:8080/crop/analyze", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });

            const data = await res.json();
            const analysis = data.analysis;
            const structuredData = analysis?.structuredData || null;

            setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                    role: "assistant",
                    text: analysis?.explanation || data.message || "No analysis returned",
                    analysis: structuredData,
                    image: imagePreview,
                    title: analysis?.title || structuredData?.disease || "Analysis Result"
                };
                return updated;
            });

            onAnalysisUpdate?.(structuredData);
        } catch (err) {
            setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                    role: "assistant",
                    text: "Something went wrong"
                };
                return updated;
            });
            onAnalysisUpdate?.(null);
        }
    };

    return (
        <div className="flex h-full min-h-0 flex-col overflow-hidden bg-gradient-to-b from-white to-slate-50">
            <div className="flex-1 min-h-0 overflow-y-auto p-6">
                {messages.length === 0 ? (
                    <div className="flex h-full items-center justify-center">
                        <div className="max-w-xl text-center">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                                <ImagePlus className="h-8 w-8" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                                Start a crop health analysis
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                Upload a clear leaf or crop photo and add any symptoms you noticed. FarmLens will summarize disease, confidence, treatment, prevention, and medicine suggestions.
                            </p>
                            <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <Sparkles className="mb-3 h-5 w-5 text-emerald-600" />
                                    <p className="text-sm font-medium text-slate-900">AI diagnosis</p>
                                    <p className="mt-1 text-xs text-slate-500">Structured disease insights in seconds.</p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <ShieldCheck className="mb-3 h-5 w-5 text-emerald-600" />
                                    <p className="text-sm font-medium text-slate-900">Treatment guidance</p>
                                    <p className="mt-1 text-xs text-slate-500">Practical next steps for crop care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-5">
                        {messages.map((msg, i) => (
                            <MessageBubble key={i} {...msg} />
                        ))}
                    </div>
                )}

                <div ref={chatEndRef}></div>
            </div>

            <ChatInput onSend={handleSend} />
        </div>
    );
}
