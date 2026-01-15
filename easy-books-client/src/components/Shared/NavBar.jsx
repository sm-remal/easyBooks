"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Books', href: '/books' },
        { name: 'Add Book', href: '/add-book' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-sm border-b border-violet-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Brand/Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-violet-600">
                            EasyBooks
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className="text-gray-700 hover:text-violet-500 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link 
                            href="/login" 
                            className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-500 transition-all font-semibold shadow-md shadow-violet-200"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-violet-500 focus:outline-none p-2"
                        >
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-violet-50 shadow-xl">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                href="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full text-center bg-violet-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-violet-100"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;