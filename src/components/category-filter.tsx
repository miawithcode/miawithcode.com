'use client';

import { Button } from '@/components/ui/button';
import { useVaultContext } from '@/context/vault-context-provider';
import { categories } from '@/db/schema';
import { cn } from '@/lib/utils';

export default function CategoryFilter() {
  const { handleCategoryFilter, activeCategory } = useVaultContext();

  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <Button
          variant={'outline'}
          key={category}
          className={cn('rounded-full border border-border bg-neutral-100', {
            'bg-neutral-800 text-white': category === activeCategory,
          })}
          onClick={() => handleCategoryFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
