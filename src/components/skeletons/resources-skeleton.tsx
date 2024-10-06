import CategorySkeleton from './category-skeleton';
import ResourceGridSkeleton from './resource-grid-skeleton';

export default function ResourcesSkeleton() {
  return (
    <section className="py-16">
      <CategorySkeleton />
      <ResourceGridSkeleton />
    </section>
  );
}
