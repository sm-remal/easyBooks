import React from 'react';

const BookDetailsSkeleton = () => {
    return (
        <div className="min-h-screen bg-white pt-10 pb-20 animate-pulse">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Back Button Skeleton */}
                <div className="h-6 w-32 bg-gray-200 rounded-md mb-10"></div>

                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* LEFT: Image Skeleton */}
                    <div className="w-full lg:w-2/5">
                        <div className="aspect-[3/4] w-full bg-gray-200 rounded-[2.5rem] border-8 border-gray-50"></div>
                    </div>

                    {/* RIGHT: Content Skeleton */}
                    <div className="w-full lg:w-3/5 space-y-8">
                        <div>
                            {/* Category Badge */}
                            <div className="h-8 w-24 bg-gray-200 rounded-full mb-6"></div>
                            {/* Title */}
                            <div className="h-12 w-3/4 bg-gray-200 rounded-xl mb-4"></div>
                            {/* Author */}
                            <div className="h-8 w-1/4 bg-gray-200 rounded-lg"></div>
                        </div>

                        {/* Stats Bar Skeleton */}
                        <div className="flex items-center gap-8 py-6 border-y border-gray-100">
                            <div className="h-6 w-20 bg-gray-200 rounded"></div>
                            <div className="h-6 w-32 bg-gray-200 rounded"></div>
                        </div>

                        {/* Price & Description */}
                        <div className="space-y-4">
                            <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-gray-100 rounded"></div>
                                <div className="h-4 w-full bg-gray-100 rounded"></div>
                                <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
                            </div>
                        </div>

                        {/* Buttons Skeleton */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <div className="h-14 flex-1 bg-gray-200 rounded-xl"></div>
                            <div className="h-14 flex-1 bg-gray-200 rounded-xl"></div>
                        </div>

                        {/* Trust Badges Skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                            <div className="h-20 bg-gray-50 rounded-2xl border border-gray-100"></div>
                            <div className="h-20 bg-gray-50 rounded-2xl border border-gray-100"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailsSkeleton;