"use client";
import React from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }) => {
    return (
        <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-violet-100 transition-all duration-500">
            {/* Image Section */}
            <div className="relative h-72 overflow-hidden">
                <Image 
                    src={book.image} 
                    alt={book.title} 
                    width={420}
                    height={480}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-violet-600 font-bold text-sm shadow-sm">
                    ${book.price}
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-3 bg-white rounded-full text-violet-600 hover:bg-violet-600 hover:text-white transition-all">
                        <ShoppingCart size={20} />
                    </button>
                    <Link href={`/books/${book._id}`} className="p-3 bg-white rounded-full text-violet-600 hover:bg-violet-600 hover:text-white transition-all">
                        <Eye size={20} />
                    </Link>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <p className="text-xs font-bold text-violet-500 uppercase tracking-wider mb-2">{book.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-gray-500 text-sm mb-4">by {book.author}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-gray-700">{book.rating}</span>
                    </div>
                    <Link href={`/books/${book._id}`} className="text-violet-600 font-bold text-sm hover:underline">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;