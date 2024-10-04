'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { useVaultContext } from '@/context/vault-context-provider';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function ResourcesGrid({ className }: { className?: string }) {
  const { resources } = useVaultContext();

  return (
    <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', className)}>
      {resources.map((resource) => (
        <a key={resource.id} href={resource.link} target="_blank">
          <Card className="relative">
            <CardContent className="p-3">
              <div className="rounded-xl border border-border p-1">
                <div className="relative h-40 w-full overflow-hidden rounded-xl">
                  <Image
                    src={resource.imageUrl}
                    alt={resource.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardTitle className="mt-2">{resource.name}</CardTitle>
              <CardDescription className="mt-1">
                {resource.description}
              </CardDescription>
              <div className="mt-3">
                <span className="rounded-md border border-border bg-neutral-50 px-2 py-1 text-sm text-muted">
                  {resource.category}
                </span>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
