"use client";
import React from 'react';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Avid Reader",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        comment: "EasyBooks has completely changed how I discover new titles. The curated collection is top-notch and delivery is always faster than expected!",
        rating: 5
    },
    {
        id: 2,
        name: "David Miller",
        role: "Student",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
        comment: "As a student, I look for quality and price. This platform offers both. The psychology section is particularly impressive with rare finds.",
        rating: 5
    },
    {
        id: 3,
        name: "Alina Rose",
        role: "Book Blogger",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
        comment: "The interface is so clean and the violet theme is beautiful. It’s not just a bookstore, it’s a community for true book lovers.",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-50"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900">
                        What Our <span className="text-violet-600">Readers</span> Say
                    </h3>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div 
                            key={review.id} 
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-violet-100 transition-all duration-500 group relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -right-2 text-violet-100 group-hover:text-violet-200 transition-colors">
                                <Quote size={80} fill="currentColor" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">
                                "{review.comment}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                                <Image 
                                    src={review.image} 
                                    alt={review.name} 
                                    width={400}
                                    height={400}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-violet-100 shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-violet-500 font-medium">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Footer */}
                <div className="mt-16 text-center border-t border-gray-100 pt-10">
                    <p className="text-gray-400 font-medium flex items-center justify-center gap-2">
                        Trusted by <span className="text-gray-900 font-bold">50,000+</span> book lovers worldwide.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;