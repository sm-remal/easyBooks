"use client";
import React from 'react';
import { Mail, Send, Bell } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Container with Gradient Background */}
                <div className="relative overflow-hidden bg-violet-600 rounded-xl p-10 md:p-20">
                    
                    {/* Abstract Decorative Circles */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-violet-400/20 rounded-full blur-2xl"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        
                        {/* Text Content */}
                        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold">
                                <Bell size={18} />
                                <span>Never miss an update</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                Get 20% Off Your <br />
                                <span className="">First Purchase</span>
                            </h2>
                            <p className="text-violet-100 text-lg md:max-w-md">
                                Join our community of 50,000+ book lovers. Get weekly recommendations, exclusive deals, and literary news.
                            </p>
                        </div>

                        {/* Subscription Form */}
                        <div className="w-full lg:w-1/2 max-w-lg">
                            <form 
                                onSubmit={(e) => e.preventDefault()} 
                                className="relative flex flex-col sm:flex-row items-center gap-4 bg-white p-2 rounded-2xl md:rounded-full shadow-lg"
                            >
                                <div className="flex-1 flex items-center gap-3 px-4 w-full">
                                    <Mail className="text-violet-500 shrink-0" size={24} />
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email address" 
                                        className="w-full py-3 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 text-lg"
                                        required
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl md:rounded-full font-bold transition-all duration-300 shadow-md active:scale-95 group"
                                >
                                    Subscribe <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                            <p className="mt-4 text-center text-sm text-violet-200">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;