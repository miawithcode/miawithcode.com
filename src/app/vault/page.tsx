import CategoryFilter from '@/components/category-filter';
import ResourcesGrid from '@/components/resources-grid';
import VaultContextProvider from '@/context/vault-context-provider';
import { getResources } from '@/lib/queries/vault';

export default async function Page() {
  const resources = await getResources();

  return (
    <>
      <section>
        <h1 className="text-2xl font-bold">Vault</h1>
        <p className="mt-1 text-muted">
          A selection of useful links, tools I curated for frontend developers
          and designers to inspire, learn, and create.
        </p>
      </section>

      <section className="mt-16">
        <VaultContextProvider data={resources}>
          <CategoryFilter />
          <ResourcesGrid className="mt-6" />
        </VaultContextProvider>
      </section>
    </>
  );
}
