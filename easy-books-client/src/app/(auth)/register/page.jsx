"use client";
import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Github, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        // পাসওয়ার্ড ম্যাচিং চেক
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            setIsLoading(false);
            return;
        }

        try {
            // ১. ব্যাকএন্ডে ইউজার তৈরি করা
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // ২. রেজিস্ট্রেশন সফল হলে অটোমেটিক লগইন করানো
                const loginRes = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });

                if (loginRes?.ok) {
                    router.push("/");
                    router.refresh();
                }
            } else {
                setError(data.message || "Registration failed. Try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please check your connection.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
            
            {/* Background Blobs */}
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-100 rounded-full blur-[100px] opacity-60 -z-10"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 -z-10"></div>

            <div className="flex w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[700px]">
                
                {/* --- LEFT VISUAL SECTION --- */}
                <div className="hidden lg:flex w-1/2 bg-violet-600 p-12 text-white flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black mb-6 leading-tight">Join our community of <span className="text-blue-300">Book Lovers.</span></h2>
                        <ul className="space-y-4">
                            {[
                                "Access to 50,000+ E-books",
                                "Create your own reading wishlist",
                                "Get personalized recommendations",
                                "Exclusive discounts for members"
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-3 text-violet-100 font-medium text-lg">
                                    <CheckCircle2 size={22} className="text-blue-300" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <p className="italic text-lg">"EasyBooks changed how I discover new stories. It's fast, simple, and beautiful!"</p>
                        <p className="mt-4 font-bold">— Sarah J., Avid Reader</p>
                    </div>
                </div>

                {/* --- RIGHT FORM SECTION --- */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                        <h2 className="text-3xl font-black text-gray-900 mb-2">Create Account</h2>
                        <p className="text-gray-500 font-medium">Start your 14-day free premium trial today.</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold rounded-r-lg">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-4">
                        {/* Name Field */}
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input name="name" type="text" required placeholder="John Doe" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-violet-600 focus:bg-white outline-none transition-all font-medium" />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input name="email" type="email" required placeholder="john@example.com" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-violet-600 focus:bg-white outline-none transition-all font-medium" />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input name="password" type={showPassword ? "text" : "password"} required placeholder="••••••••" className="w-full pl-12 pr-12 py-3.5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-violet-600 focus:bg-white outline-none transition-all font-medium" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700 ml-1">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input name="confirmPassword" type={showPassword ? "text" : "password"} required placeholder="••••••••" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-violet-600 focus:bg-white outline-none transition-all font-medium" />
                            </div>
                        </div>

                        <button disabled={isLoading} className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-violet-100 transition-all active:scale-95 flex items-center justify-center gap-2 mt-4 disabled:opacity-70">
                            {isLoading ? <Loader2 className="animate-spin" size={24} /> : <>Create Account <ArrowRight size={20} /></>}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-gray-500 font-medium">
                        Already have an account? <Link href="/login" className="text-violet-600 font-bold hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;