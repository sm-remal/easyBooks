"use client";
import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* LEFT SIDE: Content & Text */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Elevate Your Reading<span className="text-violet-600"> Journey With Us</span>
                        </h2>
                        
                        <p className="text-gray-500 text-lg leading-relaxed">
                            EasyBooks isn't just a store; it's a curated experience designed for those who seek knowledge and inspiration. We combine technology with literature.
                        </p>

                        <div className="space-y-6">
                            {/* Feature Item 1 */}
                            <div className="flex gap-4 group">
                                <div className="shrink-0 w-12 h-12 bg-white shadow-xl shadow-violet-100 rounded-xl flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800">Verified Quality</h4>
                                    <p className="text-gray-500">Every book is checked for quality and authenticity before reaching you.</p>
                                </div>
                            </div>

                            {/* Feature Item 2 */}
                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-white shadow-xl shadow-violet-100 rounded-xl flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800">Global Community</h4>
                                    <p className="text-gray-500">Join 50,000+ readers sharing insights and reviews from across the globe.</p>
                                </div>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-violet-600 font-bold text-lg hover:gap-4 transition-all duration-300 group">
                            Learn more about our mission <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* RIGHT SIDE: Visual Layout (The "Sundor" Part) */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl"></div>
                        
                        <div className="relative grid grid-cols-2 gap-4">
                            {/* Main Large Image Card */}
                            <div className="col-span-1 pt-12">
                                <img 
                                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Books" 
                                    className="rounded-3xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500 w-full h-[350px] object-cover border-4 border-white"
                                />
                            </div>

                            {/* Floating Stats Card */}
                            <div className="col-span-1 space-y-4">
                                <div className="bg-white p-6 rounded-3xl shadow-2xl shadow-violet-200 border border-violet-50 transform hover:-translate-y-2 transition-all duration-300">
                                    <h5 className="text-3xl font-black text-violet-600">99%</h5>
                                    <p className="text-gray-500 text-sm font-bold uppercase">Customer Satisfaction</p>
                                </div>
                                
                                <img 
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Reading" 
                                    className="rounded-3xl shadow-2xl rotate-6 hover:rotate-0 transition-all duration-500 w-full h-[250px] object-cover border-4 border-white"
                                />
                            </div>
                        </div>

                        {/* Floating "Trust" badge */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white py-4 px-8 rounded-2xl shadow-xl flex items-center gap-4 border border-violet-100 whitespace-nowrap">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-violet-200 border-2 border-white overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?u=1" alt="user" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-violet-300 border-2 border-white overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?u=2" alt="user" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-violet-400 border-2 border-white overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?u=3" alt="user" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-800 tracking-tight">Trusted by 5,000+ Readers</p>
                                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;