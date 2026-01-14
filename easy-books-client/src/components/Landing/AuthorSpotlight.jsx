"use client";
import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import { BookText, Award, ArrowRight } from 'lucide-react';

const author = {
    name: 'Eleanor Vance',
    image: 'https://i.pinimg.com/736x/7b/42/59/7b42593b5609c741feaebc7107ab9ae5.jpg', 
    bio: `Eleanor Vance is a multi-award-winning author known for her captivating historical fiction and thrilling mysteries. Her unique ability to weave intricate plots with deep character development has garnered her a global readership. With over 10 bestsellers, Eleanor's work often explores themes of resilience, forgotten histories, and the human spirit's endless quest for truth. She finds inspiration in ancient libraries and bustling marketplaces, bringing authenticity to every word she writes.`,
    featuredBooks: [
        { id: 1, title: 'Whispers of the Crown', cover: 'https://i.pinimg.com/736x/8d/8d/85/8d8d8595e9707e7ac2e5491fa2861104.jpg' },
        { id: 2, title: 'The Shadow of Veritas', cover: 'https://i.pinimg.com/1200x/f8/74/1d/f8741d07f8f8bbf3ff1213ca7e0b9cfb.jpg' },
        { id: 3, title: 'A Glimmer in the Dark', cover: 'https://i.pinimg.com/736x/24/06/ba/2406ba1e137b18fbaf154738e3c2b174.jpg' },
    ],
    awards: 5,
    genre: 'Historical Fiction, Mystery',
    social: {
        twitter: '#',
        instagram: '#',
        website: '#',
    }
};

const AuthorSpotlight = () => {
    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        <span className="text-violet-600">Author</span> of the Month
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
                        Discover the brilliant mind behind some of our most beloved stories.
                    </p>
                </div>

                {/* Author Card */}
                <div className="flex flex-col lg:flex-row items-center bg-white p-8 md:p-12 gap-12">
                    
                    {/* Author Image */}
                    <div className="shrink-0 relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-violet-200 shadow-xl">
                        <Image 
                            src={author.image} 
                            alt={author.name} 
                            fill 
                            style={{ objectFit: 'cover' }} 
                            className="transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute bottom-0 right-0 p-2 bg-violet-600 rounded-full transform translate-x-1 translate-y-1 shadow-lg">
                            <Award size={20} className="text-white" />
                        </div>
                    </div>

                    {/* Author Details */}
                    <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">{author.name}</h3>
                        <p className="text-violet-600 text-lg font-semibold mb-6">{author.genre}</p>
                        <p className="text-gray-600 leading-relaxed text-md mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                            {author.bio}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-center gap-3 bg-violet-50 p-4 rounded-xl">
                                <BookText size={24} className="text-violet-600" />
                                <span className="text-gray-700 font-medium">{author.featuredBooks.length} Featured Books</span>
                            </div>
                            <div className="flex items-center gap-3 bg-violet-50 p-4 rounded-xl">
                                <Award size={24} className="text-violet-600" />
                                <span className="text-gray-700 font-medium">{author.awards} National Awards</span>
                            </div>
                        </div>

                        <Link 
                            href={`/authors/${author.name.toLowerCase().replace(/\s/g, '-')}`} 
                            className="inline-flex items-center gap-2 text-violet-600 font-bold text-lg hover:gap-4 transition-all duration-300 group"
                        >
                            Explore All Books by {author.name} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Featured Books by Author (Optional - can be in a separate section too) */}
                <div className="mt-20 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Her Bestselling Works</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {author.featuredBooks.map(book => (
                            <div key={book.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:border-violet-200 transition-all duration-300">
                                <Image src={book.cover} alt={book.title} width={300} height={400} className="w-full h-auto object-cover" />
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800 text-lg">{book.title}</h4>
                                    <Link href="#" className="text-violet-600 hover:underline text-sm mt-2 block">View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AuthorSpotlight;