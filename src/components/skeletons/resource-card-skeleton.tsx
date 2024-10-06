import { Card, CardContent } from '../ui/card';
import Skeleton from './skeleton';

export default function ResourceCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-3">
        <Skeleton className="h-40 w-full rounded-xl" />

        <Skeleton className="mt-2 h-4 w-10" />
        <Skeleton className="mt-1 w-full" />
        <Skeleton className="mt-1 w-1/2" />
        <Skeleton className="mt-3 w-8 rounded-md" />
      </CardContent>
    </Card>
  );
}
