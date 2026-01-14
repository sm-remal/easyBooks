import React from 'react';
import BookList from '@/components/BookListFunction/BookList';

const page = async () => {
    let books = [];
    try {
        const res = await fetch('http://localhost:5000/books', { 
            cache: 'no-store' 
        });
        if (res.ok) {
            books = await res.json();
        }
    } catch (error) {
        console.error("Error fetching books:", error);
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                        Easy<span className="text-violet-600">Library</span>
                    </h1>
                    <p className="text-gray-500 text-lg mt-4">
                        Discover your next adventure from our {books.length} curated titles.
                    </p>
                </div>

                {/* Client Component for Search and Filter */}
                <BookList initialBooks={books} />
                
            </div>
        </div>
    );
};

export default page;