import ResourceCardSkeleton from './resource-card-skeleton';

export default function ResourceGridSkeleton() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ResourceCardSkeleton />
      <ResourceCardSkeleton />
      <ResourceCardSkeleton />
      <ResourceCardSkeleton />
    </div>
  );
}
