import React from 'react';
import { 
  Star, 
  ShoppingCart, 
  ArrowLeft, 
  BookOpen, 
  Globe, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    let book = null;
    try {
        const res = await fetch(`https://easybooks-server.vercel.app/books/${id}`, {
            cache: 'no-store'
        });
        if (res.ok) {
            book = await res.json();
        }
    } catch (error) {
        console.error("Error fetching book details:", error);
    }

    if (!book) {
        return <div className="min-h-screen flex items-center justify-center italic">Book not found!</div>;
    }

    return (
        <div className="min-h-screen bg-white pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Back Button */}
                <Link href="/books" className="inline-flex items-center text-gray-500 hover:text-violet-600 transition-colors mb-10 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Collection
                </Link>

                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* LEFT: Image Section */}
                    <div className="w-full lg:w-2/5">
                        <div className="sticky top-32">
                            <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-violet-100 border-8 border-gray-50">
                                <Image 
                                    src={book.image} 
                                    alt={book.title} 
                                    height={600}
                                    width={400}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-lg">
                                    <Heart size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Content Section */}
                    <div className="w-full lg:w-3/5 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-sm font-bold uppercase tracking-wider mb-6">
                                <BookOpen size={16} />
                                <span>{book.category}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                                {book.title}
                            </h1>
                            <p className="text-2xl font-medium text-gray-500">
                                by <span className="text-gray-900 underline decoration-violet-200 decoration-4 underline-offset-4">{book.author}</span>
                            </p>
                        </div>

                        {/* Stats Bar */}
                        <div className="flex flex-wrap items-center gap-8 py-6 border-y border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} className={i < Math.floor(book.rating) ? "fill-yellow-400" : "text-gray-200"} />
                                    ))}
                                </div>
                                <span className="font-bold text-gray-900 text-lg">{book.rating}</span>
                            </div>
                            <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
                            <div className="text-gray-500 flex items-center gap-2">
                                <Globe size={20} className="text-violet-500" />
                                <span className="font-semibold text-gray-700 uppercase tracking-tighter">English Edition</span>
                            </div>
                        </div>

                        {/* Price & Description */}
                        <div className="space-y-4">
                            <div className="text-4xl font-black text-violet-600">
                                ${book.price}
                            </div>
                            <p className="text-gray-600 text-justify leading-relaxed max-w-2xl">
                                {book.description || "This is a masterpiece written by the author. It delves deep into the narrative and offers readers an immersive experience through its vivid storytelling and complex characters."}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button className="flex-1 flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-violet-200 transition-all active:scale-95">
                                <ShoppingCart size={24} />
                                Add to Cart
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-3 bg-white border-2 border-gray-100 hover:border-violet-200 text-gray-900 px-8 py-3 rounded-xl font-bold transition-all">
                                Buy Now
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <ShieldCheck className="text-emerald-500" size={24} />
                                <span className="text-sm font-semibold text-gray-600">Verified Quality Product</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <ShoppingCart className="text-blue-500" size={24} />
                                <span className="text-sm font-semibold text-gray-600">Fast & Secure Delivery</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsPage;