import Resources from '@/components/resources';
import ResourcesSkeleton from '@/components/skeletons/resources-skeleton';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <section>
        <h1 className="text-2xl font-bold">Vault</h1>
        <p className="mt-1 text-muted">
          A selection of useful links, tools I curated for frontend developers
          and designers to inspire, learn, and create.
        </p>
      </section>
      <Suspense fallback={<ResourcesSkeleton />}>
        <Resources />
      </Suspense>
    </>
  );
}
