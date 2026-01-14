"use client";
import React, { useState } from 'react';
import BookCard from '@/components/Card/BookCard';
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';

const BookList = ({ initialBooks }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isOpen, setIsOpen] = useState(false);

    
    const categories = ["All", ...new Set(initialBooks.map(book => book.category))];

    
    const filteredBooks = initialBooks.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            {/* Search & Dropdown Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center">
                
                {/* Search Input */}
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search your favorite books..."
                        className="w-full pl-12 pr-4 py-2.5 rounded-md bg-white border border-gray-100 focus:ring-2 focus:ring-violet-500 outline-none transition-all text-gray-700"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Dropdown Filter */}
                <div className="relative w-full md:w-64">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between px-5 py-2.5 bg-white border border-gray-100 rounded-md hover:border-violet-200 transition-all text-gray-700 font-semibold"
                    >
                        <div className="flex items-center gap-2">
                            <SlidersHorizontal size={18} className="text-violet-600" />
                            <span>{selectedCategory === "All" ? "Filter by Category" : selectedCategory}</span>
                        </div>
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-50 rounded-md py-2 animate-in fade-in zoom-in duration-200">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-5 py-3 text-sm transition-colors hover:bg-violet-50 ${
                                        selectedCategory === cat ? 'text-violet-600 font-bold bg-violet-50/50' : 'text-gray-600'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Results Grid */}
            <div className="mb-6">
                <p className="text-gray-500 font-medium">
                    Showing <span className="text-gray-900 font-bold">{filteredBooks.length}</span> results 
                    {selectedCategory !== "All" && <span> in <span className="text-violet-600">{selectedCategory}</span></span>}
                </p>
            </div>

            {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredBooks.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 text-gray-300">
                        <Search size={40} />
                    </div>
                    <p className="text-gray-400 text-xl font-medium">We couldn't find any match.</p>
                    <button 
                        onClick={() => {setSearchQuery(""); setSelectedCategory("All")}}
                        className="mt-4 text-violet-600 font-bold hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}

            {/* Backdrop to close dropdown when clicking outside (Optional) */}
            {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default BookList;