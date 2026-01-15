"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      
      {/* --- Background Soft Glows --- */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-[120px] opacity-60"></div>

      {/* --- Main Visual Loader --- */}
      <div className="relative flex items-center justify-center">
        
        {/* Orbiting Ring 1 */}
        <div className="w-32 h-32 border-t-4 border-l-4 border-violet-600 rounded-full animate-spin duration-1000"></div>
        
        {/* Orbiting Ring 2 (Reverse & Slower) */}
        <div className="absolute w-24 h-24 border-b-4 border-r-4 border-blue-400 rounded-full animate-spin-reverse opacity-70"></div>
        
        {/* Center Animated Book Icon */}
        <div className="absolute flex flex-col items-center justify-center">
             <div className="w-10 h-10 bg-violet-600 rounded-lg shadow-xl shadow-violet-200 animate-bounce flex items-center justify-center">
                <div className="w-6 h-1 bg-white rounded-full mb-1 rotate-45 transform origin-left scale-x-50"></div>
                <div className="w-6 h-1 bg-white rounded-full mt-1 -rotate-45 transform origin-left scale-x-50"></div>
             </div>
        </div>
      </div>

      {/* --- Text Content --- */}
      <div className="mt-12 text-center z-10">
        <h2 className="text-3xl font-black tracking-tighter text-gray-900 mb-2">
            Easy<span className="text-violet-600">Books</span>
        </h2>
        
        <div className="flex items-center justify-center gap-1.5">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em]">Loading</span>
            <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-bounce"></span>
            </div>
        </div>
      </div>

      {/* --- Progress Bar Style Element --- */}
      <div className="mt-10 w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-600 to-blue-500 w-1/2 rounded-full animate-shimmer"></div>
      </div>

      {/* --- Custom Keyframes --- */}
      <style jsx>{`
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;