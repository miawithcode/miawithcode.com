import ResourceCardSkeleton from './resource-card-skeleton';

export default function ResourceGridSkeleton() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ResourceCardSkeleton />
        <ResourceCardSkeleton />
        <ResourceCardSkeleton />
        <ResourceCardSkeleton />
      </div>
    </div>
  );
}
