import React from 'react';

const BookCardSkeleton = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm animate-pulse">
            {/* Image Section Skeleton */}
            <div className="relative h-72 bg-gray-200">
                {/* Floating Badge Skeleton */}
                <div className="absolute top-4 right-4 bg-gray-300 h-7 w-12 rounded-full"></div>
                
                {/* Center Icons Skeleton (Optional) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
            </div>

            {/* Content Section Skeleton */}
            <div className="p-6 space-y-4">
                {/* Category Skeleton */}
                <div className="h-3 w-20 bg-gray-200 rounded-full"></div>
                
                {/* Title Skeleton */}
                <div className="h-6 w-full bg-gray-200 rounded-lg"></div>
                
                {/* Author Skeleton */}
                <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                
                {/* Bottom Section Skeleton */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    {/* Rating Skeleton */}
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-6 h-4 bg-gray-200 rounded"></div>
                    </div>
                    {/* Link Skeleton */}
                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default BookCardSkeleton;