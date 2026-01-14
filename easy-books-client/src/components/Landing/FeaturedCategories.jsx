"use client";
import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Brain, 
  Rocket, 
  History, 
  Heart 
} from 'lucide-react';
import Link from 'next/link';

const categories = [
    { id: 1, name: 'Fiction', icon: <BookOpen />, count: '120+ Books', color: 'bg-blue-50 text-blue-600' },
    { id: 2, name: 'Self-Help', icon: <Sparkles />, count: '85+ Books', color: 'bg-violet-50 text-violet-600' },
    { id: 3, name: 'Psychology', icon: <Brain />, count: '40+ Books', color: 'bg-pink-50 text-pink-600' },
    { id: 4, name: 'Sci-Fi', icon: <Rocket />, count: '65+ Books', color: 'bg-indigo-50 text-indigo-600' },
    { id: 5, name: 'History', icon: <History />, count: '30+ Books', color: 'bg-orange-50 text-orange-600' },
    { id: 6, name: 'Romance', icon: <Heart />, count: '95+ Books', color: 'bg-red-50 text-red-600' },
];

const FeaturedCategories = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Explore by <span className="text-violet-600">Category</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Find your next great read by browsing our top categories. From mind-bending sci-fi to life-changing self-help books.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat) => (
                        <Link 
                            key={cat.id} 
                            href={`/books?category=${cat.name.toLowerCase()}`}
                            className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100 transition-all duration-300 text-center flex flex-col items-center"
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {React.cloneElement(cat.icon, { size: 32 })}
                            </div>
                            
                            <h3 className="font-bold text-gray-800 text-lg mb-1">{cat.name}</h3>
                            <p className="text-sm text-gray-400 font-medium">{cat.count}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;