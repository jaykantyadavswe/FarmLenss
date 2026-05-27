"use client";
import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function ChatContainer() {
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

            setMessages(prev => {
                const updated = [...prev];
                const analysis = data.analysis;

                updated[updated.length - 1] = {
                    role: "assistant",
                    text: analysis?.explanation || data.message || "No analysis returned",
                    analysis: analysis?.structuredData,
                    image: imagePreview
                };

                return updated;
            });
        } catch (err) {
            setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                    role: "assistant",
                    text: "Something went wrong"
                };
                return updated;
            });
        }
    };

    return (
        <div className="flex flex-col h-full justify-between overflow-hidden">

            <div className="flex-1 overflow-y-auto space-y-3">

                {messages.map((msg, i) => (
                    <MessageBubble key={i} {...msg} />
                ))}

                <div ref={chatEndRef}></div>

            </div>

            <ChatInput onSend={handleSend} />
        </div>
    );
}
