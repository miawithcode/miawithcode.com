import React from 'react';
import Skeleton from './skeleton';

export default function CategorySkeleton() {
  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <React.Fragment key={index}>
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-14 rounded-full" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </React.Fragment>
      ))}
    </div>
  );
}
