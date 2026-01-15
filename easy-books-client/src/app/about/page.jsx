import React from 'react';
import { BookOpen, Users, Globe, Award, ArrowRight, Heart, Truck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen pt-10 pb-20">

            {/* --- Hero Section --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-bold uppercase tracking-wider">
                            <BookOpen size={16} />
                            <span>Our Story</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                            We are building the <span className="text-violet-600">future</span> of reading.
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            At EasyBooks, we believe stories shape who we are. We started with a simple mission: to connect every reader with their next life-changing book, effortlessly and affordably.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Link href="/books" className="px-8 py-3 bg-violet-600 text-white rounded-2xl font-bold hover:bg-violet-700 transition-all shadow-xl shadow-violet-200">
                                Explore Collection
                            </Link>
                            <button className="px-8 py-3 border-2 border-gray-100 text-gray-700 rounded-2xl font-bold hover:border-violet-200 transition-all">
                                Read Our Blog
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        {/* Abstract Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-violet-100 to-blue-50 rounded-full blur-[80px] -z-10"></div>

                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Library"
                                width={400}
                                height={400}
                                className="w-full h-64 object-cover rounded-[2rem] shadow-2xl translate-y-8"
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Reading"
                                width={400}
                                height={400}
                                className="w-full h-64 object-cover rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Stats Section --- */}
            <div className="bg-gray-50 py-20 mb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <h3 className="text-5xl font-black text-gray-900">50k+</h3>
                            <p className="text-gray-500 font-medium">Books Sold</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-5xl font-black text-violet-600">12k+</h3>
                            <p className="text-gray-500 font-medium">Happy Readers</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-5xl font-black text-gray-900">150+</h3>
                            <p className="text-gray-500 font-medium">Partner Stores</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-5xl font-black text-gray-900">4.9</h3>
                            <p className="text-gray-500 font-medium">TrustPilot Score</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Why Choose Us (Values) --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-4">Why readers love <span className="text-violet-600">EasyBooks</span></h2>
                    <p className="text-gray-500 text-lg">We don't just sell books; we curate experiences. Here is why thousands of readers choose us every day.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Heart size={32} />, title: "Curated with Love", desc: "Every book in our collection is hand-picked by our team of literary experts." },
                        { icon: <Truck size={32} />, title: "Super Fast Delivery", desc: "Order today and start reading tomorrow. We offer express shipping worldwide." },
                        { icon: <ShieldCheck size={32} />, title: "Secure Payment", desc: "Your data is safe with us. We use top-tier encryption for all transactions." }
                    ].map((item, index) => (
                        <div key={index} className="group p-8 rounded-[2rem] border border-gray-100 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300 bg-white">
                            <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Team Section (Optional) --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-black text-gray-900 mb-2">Meet the <span className="text-violet-600">Minds</span></h2>
                        <p className="text-gray-500">The passionate team working behind the scenes.</p>
                    </div>
                    <Link href="/contact" className="hidden md:flex items-center gap-2 text-violet-600 font-bold hover:underline">
                        Join our team <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((member) => (
                        <div key={member} className="group text-center">
                            <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/5]">
                                <Image
                                    src={`https://images.unsplash.com/photo-${member === 1 ? '1560250097-0b93528c311a' : member === 2 ? '1573496359142-b8d87734a5a2' : member === 3 ? '1580489944761-15a19d654956' : '1535713875002-d1d0cf377fde'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                                    alt="Team Member"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Member Name</h3>
                            <p className="text-violet-600 font-medium text-sm">Co-Founder</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- CTA Section --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-[100px] opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10">
                        Ready to start your journey?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto relative z-10">
                        Join 12,000+ readers who are discovering their next favorite book with EasyBooks today.
                    </p>
                    <Link href="/books" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-10 py-3.5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-violet-900/50 relative z-10">
                        Browse Books <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;