"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        id: 1,
        question: "How can I track my book order?",
        answer: "Once your order is shipped, you will receive an email with a tracking number and a link to track your package in real-time."
    },
    {
        id: 2,
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary depending on your location."
    },
    {
        id: 3,
        question: "Can I return a book if I'm not satisfied?",
        answer: "Absolutely! We have a 30-day return policy. If the book is in its original condition, you can return it for a full refund."
    },
    {
        id: 4,
        question: "Are there any discounts for students?",
        answer: "Yes! Students get an extra 10% discount on all textbooks. Simply verify your student ID during checkout."
    },
    {
        id: 5,
        question: "How do I sell my old books on EasyBooks?",
        answer: "You can go to the 'Add Book' section, fill in the details and upload photos. Once approved, your book will be listed for sale."
    }
];

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-10 bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-4">
                        Common <span className="text-violet-600">Questions</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about EasyBooks services and policies.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div 
                            key={faq.id} 
                            className={`border rounded-2xl transition-all duration-300 ${
                                openId === faq.id 
                                ? 'border-violet-200 bg-white shadow-xl shadow-violet-100/50' 
                                : 'border-gray-200 bg-white hover:border-violet-100'
                            }`}
                        >
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold transition-colors ${
                                    openId === faq.id ? 'text-violet-600' : 'text-gray-800'
                                }`}>
                                    {faq.id}. {faq.question}
                                </span>
                                <ChevronDown 
                                    className={`text-gray-400 transition-transform duration-300 ${
                                        openId === faq.id ? 'rotate-180 text-violet-600' : ''
                                    }`} 
                                    size={24} 
                                />
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ${
                                    openId === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Support CTA */}
                <div className="mt-12 text-center p-8 bg-violet-600 rounded-xl shadow-lg">
                    <h4 className="text-white text-xl font-bold mb-2">Still have questions?</h4>
                    <p className="text-violet-100 mb-6">We're here to help you 24/7.</p>
                    <button className="bg-white text-violet-600 px-8 py-3 rounded-full font-bold hover:bg-violet-50 transition-colors">
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;