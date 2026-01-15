"use client";

import React, { useEffect } from 'react';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import Link from 'next/link';

const Error = ({ error, reset }) => {
    
    useEffect(() => {
        console.error("Application Error:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="max-w-xl w-full text-center">
                
                {/* --- Animated Icon --- */}
                <div className="relative flex justify-center mb-10">
                    <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center animate-pulse">
                        <AlertTriangle size={64} className="text-red-500" />
                    </div>
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 border-2 border-red-100 rounded-full animate-ping opacity-25"></div>
                </div>

                {/* --- Content --- */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-black text-gray-900">
                        Something went <span className="text-red-600">wrong!</span>
                    </h1>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
                        An unexpected error occurred while processing your request. Don't worry, our team has been notified.
                    </p>
                    
                    {/* Error Message Box (Optional - for debugging) */}
                    <div className="mt-4 p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-400 font-mono break-all italic">
                        Error: {error?.message || "Internal Server Error"}
                    </div>

                    {/* --- Action Buttons --- */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <button 
                            onClick={() => reset()}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-violet-700 transition-all shadow-xl shadow-violet-100 active:scale-95"
                        >
                            <RefreshCcw size={20} />
                            Try Again
                        </button>
                        
                        <Link 
                            href="/" 
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-violet-200 hover:text-violet-600 transition-all active:scale-95"
                        >
                            <Home size={20} />
                            Back to Home
                        </Link>
                    </div>
                </div>

                {/* --- Help Text --- */}
                <p className="mt-12 text-gray-400 text-sm">
                    If the problem persists, please <Link href="/contact" className="underline hover:text-violet-600">contact support</Link>.
                </p>
            </div>
        </div>
    );
};

export default Error;