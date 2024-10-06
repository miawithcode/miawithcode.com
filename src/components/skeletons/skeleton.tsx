import { cn } from '@/lib/utils';

export default function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={cn('h-4 animate-pulse rounded bg-neutral-200', className)}
    />
  );
}
