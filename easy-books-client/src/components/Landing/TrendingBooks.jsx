"use client"
import React, { useEffect, useState } from 'react';
import BookCard from '../Card/BookCard';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import BookCardSkeleton from '../Skeleton/BookCardSkeleton';

const TrendingBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://easybooks-server.vercel.app/books-latest')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching latest books:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className='grid grid-cols-4 gap-8'>
            {
                [...Array(8).map((_, index) => <BookCardSkeleton key={index}></BookCardSkeleton>)]
            }
        </div>
        );
    }

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-12 gap-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
                        Trending <span className="text-violet-600">Books</span>
                    </h2>
                </div>

                {/* Books Grid */}
                {books.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {books.map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-[3rem]">
                        <p className="text-gray-400">No trending books found.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TrendingBooks;