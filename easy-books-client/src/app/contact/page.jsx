"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
    
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We will connect soon.");
        
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-16 pb-20 relative overflow-hidden">
            
            {/* --- Background Decorative Blobs --- */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Header --- */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Let's start a <span className="text-violet-600">conversation.</span>
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Have a question about a book? Want to partner with us? Or just want to say hi? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
                    
                    {/* --- Left Side: Contact Info --- */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Info Cards */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-100 border border-gray-100 space-y-8">
                            
                            {/* Email */}
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Chat to us</h3>
                                    <p className="text-gray-500 text-sm mb-1">Our friendly team is here to help.</p>
                                    <p className="font-semibold text-violet-600">support@easybooks.com</p>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Visit us</h3>
                                    <p className="text-gray-500 text-sm mb-1">Come say hello at our office HQ.</p>
                                    <p className="font-semibold text-violet-600">123 Book Street, Dhaka, BD</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Call us</h3>
                                    <p className="text-gray-500 text-sm mb-1">Mon-Fri from 8am to 5pm.</p>
                                    <p className="font-semibold text-violet-600">+880 1234 567 890</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bold text-xl mb-4">Follow us</h3>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-violet-600 transition-all">
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600 rounded-full blur-[50px] opacity-50"></div>
                        </div>
                    </div>

                    {/* --- Right Side: Contact Form --- */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 relative">
                            
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-900 ml-1">Full Name</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            placeholder="ex. John Doe" 
                                            className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all outline-none"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-900 ml-1">Email Address</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="ex. john@example.com" 
                                            className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all outline-none"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900 ml-1">Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject"
                                        placeholder="How can we help you?" 
                                        className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all outline-none"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900 ml-1">Message</label>
                                    <textarea 
                                        rows="5" 
                                        name="message"
                                        placeholder="Write your message here..." 
                                        className="w-full px-6 py-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 transition-all outline-none resize-none"
                                        required
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-violet-600 text-white py-3 rounded-xl font-bold hover:bg-violet-700 transition-all shadow-xl shadow-violet-200 flex items-center justify-center gap-2 group">
                                    Send Message 
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            {/* Watermark/Decoration inside form */}
                            <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                                <MessageSquare size={120} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;