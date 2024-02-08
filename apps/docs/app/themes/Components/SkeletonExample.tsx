import { Skeleton } from "@rafty/ui";

export function SkeletonExample() {
  return (
    <div className="h-[150px] space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-14 w-14 rounded-full" />
        <Skeleton className="h-6 flex-1" />
      </div>
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-full" />
    </div>
  );
}
