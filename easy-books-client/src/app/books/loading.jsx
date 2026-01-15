import BookCardSkeleton from '@/components/Skeleton/BookCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-4 gap-8'>
            {
                [...Array(12).map((_, index) => <BookCardSkeleton key={index}></BookCardSkeleton>)]
            }
        </div>
    );
};

export default loading;