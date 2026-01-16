"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, User, DollarSign, Image as ImageIcon, Type, PlusCircle, Loader2, FileText, Star, Sparkles } from 'lucide-react';
import Swal from 'sweetalert2';
import Image from 'next/image';

const AddBookForm = ({ userEmail }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target;
        const bookData = {
            title: form.title.value,
            author: form.author.value,
            price: parseFloat(form.price.value),
            category: form.category.value,
            image: form.image.value,
            description: form.description.value,
            rating: parseFloat(form.rating.value) || 5,
            addedBy: userEmail,
            createdAt: new Date()
        };

        try {
            const res = await fetch("http://localhost:5000/books", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookData)
            });

            if (res.ok) {
                Swal.fire({
                    title: 'Excellent!',
                    text: 'Your book has been listed successfully.',
                    icon: 'success',
                    confirmButtonColor: '#7c3aed',
                });
                form.reset();
                router.push('/books');
                router.refresh();
            }
        } catch (error) {
            Swal.fire('Error', 'Failed to add book.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* --- TOP BANNER SECTION --- */}
            <div className="relative h-[350px] w-full bg-violet-900 overflow-hidden flex items-center justify-center">
                <Image 
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Library Banner"
                    width={500}
                    height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10"></div>
                
                <div className="relative z-10 text-center px-4">
                    <div className="inline-flex items-center gap-2 bg-violet-500/30 backdrop-blur-md px-4 py-2 rounded-full text-violet-100 text-sm font-bold mb-4 border border-violet-400/30">
                        <Sparkles size={16} /> Contribute to Library
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Share Your <span className="text-violet-400">Knowledge.</span></h1>
                    <p className="text-violet-100 text-lg max-w-xl mx-auto font-medium opacity-90">
                        Listing a new book is the first step to inspiring thousands of readers around the world.
                    </p>
                </div>
            </div>

            {/* --- FORM SECTION --- */}
            <div className="max-w-5xl mx-auto px-4 -mt-20 pb-20 relative z-20">
                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-violet-100/50 border border-gray-100 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                
                                {/* Form Left Side */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 border-b pb-4">
                                        <div className="w-2 h-6 bg-violet-600 rounded-full"></div> General Information
                                    </h3>
                                    
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><BookOpen size={16} className="text-violet-500"/> Title</label>
                                        <input name="title" required placeholder="The Art of Thinking" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-600 transition-all outline-none font-medium" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><User size={16} className="text-violet-500"/> Author</label>
                                        <input name="author" required placeholder="Author Name" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-600 transition-all outline-none font-medium" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><DollarSign size={16} className="text-violet-500"/> Price</label>
                                            <input name="price" type="number" step="0.01" required placeholder="0.00" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-600 transition-all outline-none font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><Star size={16} className="text-violet-500"/> Rating</label>
                                            <input name="rating" type="number" step="0.1" min="1" max="5" placeholder="5.0" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-600 transition-all outline-none font-medium" />
                                        </div>
                                    </div>
                                </div>

                                {/* Form Right Side */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 border-b pb-4">
                                        <div className="w-2 h-6 bg-violet-600 rounded-full"></div> Media & Meta
                                    </h3>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><Type size={16} className="text-violet-500"/> Category</label>
                                        <select name="category" required className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-600 transition-all outline-none font-medium appearance-none">
                                            <option value="">Select Category</option>
                                            <option value="Fiction">Fiction</option>
                                            <option value="Science">Science</option>
                                            <option value="Business">Business</option>
                                            <option value="Biography">Biography</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><ImageIcon size={16} className="text-violet-500"/> Cover URL</label>
                                        <input name="image" type="url" required placeholder="https://..." className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-600 transition-all outline-none font-medium" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1"><FileText size={16} className="text-violet-500"/> Summary</label>
                                        <textarea name="description" rows="3" required placeholder="Write a short description..." className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-violet-600 transition-all outline-none font-medium resize-none"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center pt-6">
                                <button 
                                    disabled={isLoading}
                                    className="min-w-[280px] bg-violet-600 hover:bg-violet-700 text-white py-3 px-8 rounded-xl text-lg shadow-xl shadow-violet-200 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer"
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : <><PlusCircle size={24} /> Publish Masterpiece</>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBookForm;