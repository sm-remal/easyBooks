"use client";
import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6 overflow-hidden relative">
            
            {/* --- Background Decorative Elements --- */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-50 rounded-full blur-[100px] opacity-70 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-70 animate-pulse [animation-delay:2s]"></div>

            <div className="max-w-2xl w-full text-center relative z-10">
                
                {/* --- Animated 404 Visual --- */}
                <div className="relative mb-8">
                    <h1 className="text-[12rem] md:text-[18rem] font-black text-gray-100 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Floating Book Icon */}
                        <div className="w-32 h-44 bg-violet-600 rounded-xl shadow-2xl shadow-violet-200 flex flex-col items-center justify-center relative animate-bounce-slow border-l-[10px] border-violet-800">
                            <div className="w-12 h-1 bg-white/30 rounded-full mb-2"></div>
                            <div className="w-16 h-1 bg-white/30 rounded-full mb-2"></div>
                            <div className="w-10 h-1 bg-white/30 rounded-full"></div>
                            
                            {/* Eye icons to make it look like a character */}
                            <div className="flex gap-4 mt-6">
                                <div className="w-3 h-3 bg-white rounded-full animate-blink"></div>
                                <div className="w-3 h-3 bg-white rounded-full animate-blink"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Content --- */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900">
                        Oops! This page is <span className="text-violet-600">missing.</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                        It seems the book you're looking for has been misplaced or the page never existed.
                    </p>

                    {/* --- Action Buttons --- */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link 
                            href="/" 
                            className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-violet-600 transition-all shadow-xl hover:shadow-violet-200 active:scale-95"
                        >
                            <Home size={20} />
                            Go Home
                        </Link>
                        
                        <button 
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 bg-white border-2 border-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-violet-200 hover:text-violet-600 transition-all active:scale-95"
                        >
                            <ArrowLeft size={20} />
                            Go Back
                        </button>
                    </div>
                </div>

                {/* --- Search Suggestion --- */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-400">
                    <Search size={18} />
                    <span className="text-sm font-medium italic">Try searching for your favorite author or genre!</span>
                </div>
            </div>

            {/* --- Custom Keyframes --- */}
            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0) rotate(-5deg); }
                    50% { transform: translateY(-30px) rotate(5deg); }
                }
                @keyframes blink {
                    0%, 90%, 100% { transform: scaleY(1); }
                    95% { transform: scaleY(0.1); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
                .animate-blink {
                    animation: blink 3s infinite;
                }
            `}</style>
        </div>
    );
};

export default NotFound;