import BookDetailsSkeleton from '@/components/Skeleton/BookDetailsSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <BookDetailsSkeleton></BookDetailsSkeleton>
        </div>
    );
};

export default loading;