"use client";

import React, { useState } from "react";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  MessageSquare,
  Send,
  User,
  Shield,
  Wrench,
  Clock,
  CheckCheck
} from "lucide-react";

export default function PortalMessagesPage() {
  const { messages, sendMessage, currentCustomer } = useDemoState();
  const [inputText, setInputText] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    sendMessage(
      currentCustomer.id,
      inputText.trim(),
      "Customer",
      currentCustomer.contactPerson
    );
    setInputText("");
  };

  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
            Direct Plant Communications Thread
          </h2>
          <p className="text-xs text-stone-500">
            Real-time technical coordination with Sales Desk and Plant Operations
          </p>
        </div>

        {/* Message Thread Box */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col h-[600px]">
          {/* Thread Header */}
          <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#d4560a] text-white flex items-center justify-center font-bold text-xs">
                ENG
              </div>
              <div>
                <h3 className="font-bold text-xs text-stone-900">
                  Vikram Mehta (Sales Manager) & Kailash Solanki (Operations)
                </h3>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Plant Technical Desk Active
                </span>
              </div>
            </div>
            <span className="text-[10px] text-stone-400 font-mono">Thread ID: {currentCustomer.id}</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-stone-50/30">
            {messages.map((msg) => {
              const isMe = msg.sender === "Customer";

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-[11px] text-stone-500">
                    <span className="font-bold">{msg.senderName}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-stone-100 text-stone-600">
                      {msg.sender}
                    </span>
                    <span>• {msg.timestamp}</span>
                  </div>

                  <div
                    className={`p-3.5 rounded-2xl max-w-lg text-xs leading-relaxed shadow-xs ${
                      isMe
                        ? "bg-[#d4560a] text-white rounded-tr-none"
                        : "bg-white text-stone-800 border border-stone-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your question or drawing clarification..."
              className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#d4560a] focus:bg-white"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#d4560a] hover:bg-[#b84605] text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </PortalLayout>
  );
}
