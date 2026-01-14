"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop",
            title: "Discover Your Next Favorite Book",
            subtitle: "Explore thousands of titles from world-class authors at EasyBooks."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop",
            title: "Build Your Personal Library",
            subtitle: "From timeless classics to modern bestsellers, we have it all."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop",
            title: "Knowledge at Your Fingertips",
            subtitle: "Enhance your skills with our curated collection of self-help and technical books."
        }
    ];

    return ( 
        <div className="w-full h-[400px] md:h-[500px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}> 
                        <div 
                            className="relative w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <div className="text-center px-4 max-w-4xl">
                                    <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                                        {slide.subtitle}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link 
                                            href="/books" 
                                            className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg"
                                        >
                                            Browse Collection
                                        </Link>
                                        <Link 
                                            href="/login" 
                                            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-bold transition-all"
                                        >
                                            Join Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))} 
            </Swiper>

            {/* Custom styling for Swiper dots to match Violet theme */}
            <style jsx global>{`
                .swiper-pagination-bullet-active {
                    background: #8b5cf6 !important; /* violet-500 */
                }
                .swiper-button-next, .swiper-button-prev {
                    color: white !important;
                    transform: scale(0.7);
                }
            `}</style>
        </div>
    );
};

export default Hero;