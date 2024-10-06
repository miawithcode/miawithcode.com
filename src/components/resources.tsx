import CategoryFilter from '@/components/category-filter';
import ResourcesGrid from '@/components/resources-grid';
import { getResources } from '@/lib/queries/vault';
import VaultContextProvider from '@/context/vault-context-provider';

export default async function Resources() {
  const resources = await getResources();

  return (
    <section className="py-16">
      <VaultContextProvider data={resources}>
        <CategoryFilter />
        <ResourcesGrid className="mt-6" />
      </VaultContextProvider>
    </section>
  );
}
