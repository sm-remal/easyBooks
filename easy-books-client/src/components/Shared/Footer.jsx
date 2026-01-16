import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'; // আইকন ইমপোর্ট

const Footer = () => {
    return (
        <footer className="bg-gray-800 border-t border-violet-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="">
                            <Image
                                src="/assets/logo-1.png"
                                width={380}
                                height={300}
                                alt='EasyBooks Logo'
                                className="w-full h-12 object-contain"
                            />
                        </Link>
                        <p className="text-gray-300 leading-relaxed mt-2">
                            Your gateway to a world of knowledge. We provide a curated collection of best-selling books across all genres to fuel your imagination.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-300 hover:text-violet-400 transition-colors">Home</Link></li>
                            <li><Link href="/books" className="text-gray-300 hover:text-violet-400 transition-colors">All Books</Link></li>
                            <li><Link href="/login" className="text-gray-300 hover:text-violet-400 transition-colors">My Account</Link></li>
                            <li><Link href="/add-book" className="text-gray-300 hover:text-violet-400 transition-colors">Sell a Book</Link></li>
                        </ul>
                    </div>

                    {/* Popular Categories */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Categories</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-300 hover:text-violet-400 transition-colors">Fiction</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-violet-400 transition-colors">Self-Help</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-violet-400 transition-colors">Psychology</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-violet-400 transition-colors">Sci-Fi</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <p className="text-gray-300 mb-2 font-medium">Email: support@easybooks.com</p>
                        <p className="text-gray-300 mb-6">Location: Dhaka, Bangladesh</p>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center text-violet-400 cursor-pointer hover:bg-violet-600 hover:text-white transition-all shadow-lg">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center text-violet-400 cursor-pointer hover:bg-violet-600 hover:text-white transition-all shadow-lg">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center text-violet-400 cursor-pointer hover:bg-violet-600 hover:text-white transition-all shadow-lg">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center text-violet-400 cursor-pointer hover:bg-violet-600 hover:text-white transition-all shadow-lg">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-400 text-sm italic">
                        &copy; {new Date().getFullYear()} EasyBooks. All rights reserved. Developed with ❤️ for readers.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;