"use client"
import React, { useEffect, useState } from 'react';
import BookCard from '../Card/BookCard';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const TrendingBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/books-latest')
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
            <div className="py-20 text-center">
                <div className="animate-spin inline-block w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full"></div>
                <p className="mt-2 text-gray-500">Loading trending books...</p>
            </div>
        );
    }

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-12 gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
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