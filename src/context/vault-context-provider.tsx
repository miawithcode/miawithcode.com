'use client';

import { InsertResource } from '@/db/schema';
import { createContext, useContext, useMemo, useState } from 'react';

type TVaultContext = {
  resources: InsertResource[];
  activeCategory: string | null;
  handleCategoryFilter: (category: string) => void;
};

const VaultContext = createContext<TVaultContext | null>(null);

export default function VaultContextProvider({
  children,
  data: resources,
}: {
  children: React.ReactNode;
  data: InsertResource[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredResources = useMemo(() => {
    if (activeCategory) {
      return resources.filter(
        (resource) => resource.category === activeCategory,
      );
    }
    return resources;
  }, [resources, activeCategory]);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <VaultContext.Provider
      value={{
        resources: filteredResources,
        activeCategory,
        handleCategoryFilter,
      }}
    >
      {children}
    </VaultContext.Provider>
  );
}

export function useVaultContext() {
  const context = useContext(VaultContext);

  if (!context) {
    throw new Error(
      'useVaultContext must be used within a VaultContextProvider',
    );
  }

  return context;
}
