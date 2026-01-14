import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-700 border-t border-violet-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold text-violet-600">
                            EasyBooks
                        </Link>
                        <p className="text-gray-100 leading-relaxed">
                            Your gateway to a world of knowledge. We provide a curated collection of best-selling books across all genres to fuel your imagination.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-200 mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-100 hover:text-violet-500 transition-colors">Home</Link></li>
                            <li><Link href="/books" className="text-gray-100 hover:text-violet-500 transition-colors">All Books</Link></li>
                            <li><Link href="/login" className="text-gray-100 hover:text-violet-500 transition-colors">My Account</Link></li>
                            <li><Link href="/add-book" className="text-gray-100 hover:text-violet-500 transition-colors">Sell a Book</Link></li>
                        </ul>
                    </div>

                    {/* Popular Categories */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-200 mb-6">Categories</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-100 hover:text-violet-500 transition-colors">Fiction</Link></li>
                            <li><Link href="#" className="text-gray-100 hover:text-violet-500 transition-colors">Self-Help</Link></li>
                            <li><Link href="#" className="text-gray-100 hover:text-violet-500 transition-colors">Psychology</Link></li>
                            <li><Link href="#" className="text-gray-100 hover:text-violet-500 transition-colors">Sci-Fi</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-200 mb-6">Contact Us</h4>
                        <p className="text-gray-100 mb-2">Email: support@easybooks.com</p>
                        <p className="text-gray-100 mb-6">Location: Dhaka, Bangladesh</p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div className="h-10 w-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 cursor-pointer hover:bg-violet-600 hover:text-white transition-all">
                                F
                            </div>
                            <div className="h-10 w-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 cursor-pointer hover:bg-violet-600 hover:text-white transition-all">
                                T
                            </div>
                            <div className="h-10 w-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 cursor-pointer hover:bg-violet-600 hover:text-white transition-all">
                                I
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-violet-50 text-center">
                    <p className="text-gray-200 text-sm">
                        &copy; {new Date().getFullYear()} EasyBooks. All rights reserved. Developed with ❤️ for readers.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;