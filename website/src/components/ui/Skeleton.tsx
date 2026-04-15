import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div className={`animate-pulse bg-surface-container-high rounded-lg ${className}`} />
  );
};

export const ProductSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="aspect-[4/5] w-full rounded-2xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-4 w-1/4 pt-2" />
      </div>
    </div>
  );
};

export default Skeleton;
