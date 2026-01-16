"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { LogOut, User } from 'lucide-react';
import Image from 'next/image';
import NavLink from '../Button/NavLink';
// import logo from '/assets/logo-1.png';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { data: session } = useSession();
    const dropdownRef = useRef(null);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Books', href: '/books' },
        { name: 'Add Book', href: '/add-book' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-sm border-b border-violet-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Brand/Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/">
                            <Image
                                src="/assets/logo-1.png"
                                width={500}           
                                height={500}         
                                alt='EasyBooks Logo'
                                priority              
                                className="w-auto h-68 object-contain -ml-12"
                            />
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-violet-500 font-medium transition-colors"
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* --- Auth Logic Start --- */}
                        {session ? (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-2 focus:outline-none"
                                >
                                    {/* Avatar */}
                                    <div className="w-10 h-10 rounded-full bg-violet-600 border-2 border-white shadow-sm flex items-center justify-center text-white font-bold overflow-hidden cursor-pointer">
                                        {session.user?.image ? (
                                            <Image src={session.user.image} alt="User" width={120} height={120} className="w-full h-full object-cover" />
                                        ) : (
                                            <span>{session.user?.name?.charAt(0).toUpperCase()}</span>
                                        )}
                                    </div>
                                </button>

                                {/* Dropdown Menu */}
                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-violet-50 py-3 animate-in fade-in zoom-in duration-200 origin-top-right">
                                        <div className="px-5 py-3 border-b border-gray-50 mb-2">
                                            <p className="text-sm font-bold text-gray-900 truncate">{session.user?.name}</p>
                                            <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                                        </div>

                                        <Link href="/profile" className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-violet-50 transition-colors">
                                            <User size={18} className="text-violet-500" /> My Profile
                                        </Link>

                                        <button
                                            onClick={() => signOut()}
                                            className="w-full flex items-center gap-3 px-5 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            <LogOut size={18} /> Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-500 transition-all font-semibold shadow-md shadow-violet-200"
                            >
                                Login
                            </Link>
                        )}
                        {/* --- Auth Logic End --- */}
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
                        {/* Mobile User Info */}
                        {session && (
                            <div className="flex items-center gap-3 px-3 py-4 border-b border-gray-50 mb-2">
                                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
                                    {session.user?.name?.charAt(0).toUpperCase()}
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-sm font-bold text-gray-900 truncate">{session.user?.name}</p>
                                    <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                                </div>
                            </div>
                        )}

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
                            {session ? (
                                <button
                                    onClick={() => { signOut(); setIsMenuOpen(false); }}
                                    className="block w-full text-center bg-red-50 text-red-600 py-3 rounded-lg font-semibold border border-red-100"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block w-full text-center bg-violet-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-violet-100"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;