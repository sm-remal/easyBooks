"use client";
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    // Login with (Google/GitHub)
    const handleSocialLogin = async (provider) => {
        setIsLoading(true);
        await signIn(provider, { callbackUrl: '/' });
    };

    // Email and Password Login
    const handleCredentialLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false, 
            });

            if (res?.error) {
                setError("Invalid email or password. Please try again.");
                setIsLoading(false);
            } else {
                router.push("/"); 
                router.refresh();
            }
        } catch (err) {
            setError("Something went wrong. Please try again later.");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
            
            {/* --- Background Decorative Elements --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-100 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
            </div>

            <div className="flex w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden min-h-[600px]">
                
                {/* --- LEFT: Login Form --- */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    
                    <div className="mb-10">
                        <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome Back! 👋</h2>
                        <p className="text-gray-500 font-medium">Enter your details to access your reading list.</p>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button 
                            type="button"
                            onClick={() => handleSocialLogin('google')}
                            className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-semibold text-gray-700 active:scale-95"
                        >
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                            Google
                        </button>
                        <button 
                            type="button"
                            onClick={() => handleSocialLogin('github')}
                            className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-900 hover:text-white transition-all font-semibold text-gray-700 active:scale-95 group"
                        >
                            <Github size={20} className="group-hover:text-white" />
                            GitHub
                        </button>
                    </div>

                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-400 font-medium">Or continue with email</span>
                        </div>
                    </div>

                    {/* Error Message Display */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded-r-lg animate-shake">
                            {error}
                        </div>
                    )}

                    {/* Email/Pass Form */}
                    <form onSubmit={handleCredentialLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900 ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input 
                                    name="email"
                                    type="email" 
                                    required
                                    placeholder="hello@example.com"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-violet-600 focus:bg-white transition-all outline-none font-medium text-gray-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-bold text-gray-900">Password</label>
                                <a href="#" className="text-xs font-bold text-violet-600 hover:underline">Forgot Password?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input 
                                    name="password"
                                    type={showPassword ? "text" : "password"} 
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:border-violet-600 focus:bg-white transition-all outline-none font-medium text-gray-700"
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading} 
                            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-violet-200 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" size={24} />
                            ) : (
                                <>
                                    Sign In <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-500 font-medium">
                        Don't have an account? <Link href="/register" className="text-violet-600 font-bold hover:underline">Create Account</Link>
                    </p>
                </div>

                {/* --- RIGHT: Visual Section (Desktop Only) --- */}
                <div className="hidden lg:block w-1/2 bg-violet-600 relative overflow-hidden p-12 text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] -translate-x-1/2 translate-y-1/2"></div>
                    
                    <div className="relative h-full flex flex-col justify-between z-10">
                        <div>
                            <h3 className="text-3xl font-black mb-4">EasyBooks Premium</h3>
                            <p className="text-violet-200 text-lg">Join the world's largest community of book lovers and discover your next adventure.</p>
                        </div>
                        
                        {/* Interactive Decoration */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl">
                             <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 animate-pulse"></div>
                                <div className="flex-1">
                                    <div className="h-3 w-32 bg-white/30 rounded-full mb-2"></div>
                                    <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                                </div>
                             </div>
                             <div className="space-y-3">
                                <div className="h-2 w-full bg-white/20 rounded-full"></div>
                                <div className="h-2 w-full bg-white/20 rounded-full"></div>
                                <div className="h-2 w-2/3 bg-white/20 rounded-full"></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.2s ease-in-out 0s 2;
                }
            `}</style>
        </div>
    );
};

export default LoginPage;