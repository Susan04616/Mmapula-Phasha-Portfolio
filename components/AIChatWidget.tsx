
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Mmapula's AI Portfolio Assistant. Ask me anything about her projects, skills, or experience!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyMissing, setKeyMissing] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Chat Session
  useEffect(() => {
    if (isOpen && !chatRef.current) {
      // process.env.API_KEY is replaced by Vite during build
      const apiKey = process.env.API_KEY;
      
      if (!apiKey || apiKey === "undefined") {
        console.error("AI Assistant Error: API_KEY is missing or undefined. Ensure it is set in your Render environment variables.");
        setKeyMissing(true);
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey });
        chatRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
        setKeyMissing(false);
      } catch (error) {
        console.error("Failed to initialize Gemini AI:", error);
      }
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    if (keyMissing || !chatRef.current) {
       setMessages(prev => [...prev, { 
         role: 'model', 
         text: "The AI Assistant is currently unavailable because the API Key is not configured correctly. Please check the site environment variables.", 
         isError: true 
       }]);
       return;
    }

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage });
      const text = response.text;
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text }]);
      }
    } catch (error: any) {
      console.error("Chat error:", error);
      let errorMsg = "I'm having trouble connecting right now. Please try again later.";
      
      if (error.message?.includes("API_KEY_INVALID")) {
        errorMsg = "The provided API Key is invalid. Please check your Google AI Studio settings.";
      }

      setMessages(prev => [...prev, { role: 'model', text: errorMsg, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatMessageText = (text: string, isUser: boolean) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={index} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`break-all transition-colors font-semibold underline ${
              isUser 
                ? 'text-white hover:text-blue-100' 
                : 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300'
            }`}
          >
            {part}
          </a>
        );
      }
      
      const boldRegex = /\*\*(.*?)\*\*/g;
      const boldParts = part.split(boldRegex);
      
      return (
        <span key={index}>
          {boldParts.map((subPart, subIndex) => {
            if (subIndex % 2 === 1) {
              return <strong key={subIndex} className="font-bold">{subPart}</strong>;
            }
            return subPart;
          })}
        </span>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col mb-4 pointer-events-auto overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex justify-between items-center flex-shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-yellow-300" />
              <div>
                <h3 className="text-white font-bold text-sm">Portfolio Assistant</h3>
                <p className="text-blue-100 text-xs">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : msg.isError 
                        ? 'bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-200'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm'
                  }`}
                >
                  {msg.isError && <AlertCircle size={14} className="inline mr-2 mb-1" />}
                  {formatMessageText(msg.text, msg.role === 'user')}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 border border-slate-200 dark:border-slate-700 flex items-center gap-2 shadow-sm">
                  <Loader2 size={16} className="animate-spin text-blue-500" />
                  <span className="text-slate-500 dark:text-slate-400 text-xs">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex-shrink-0">
            <div className={`flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 border transition-colors ${keyMissing ? 'border-red-300' : 'border-slate-200 dark:border-slate-700 focus-within:border-blue-500'}`}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={keyMissing ? "API Key Missing..." : "Ask about my projects..."}
                className="bg-transparent border-none outline-none text-slate-800 dark:text-slate-200 text-sm flex-1 placeholder-slate-400 dark:placeholder-slate-500"
                disabled={isLoading || keyMissing}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading || keyMissing}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:animate-bounce" />}
      </button>
    </div>
  );
};

export default AIChatWidget;
