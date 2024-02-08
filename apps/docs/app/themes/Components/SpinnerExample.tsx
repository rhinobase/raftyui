import { Spinner } from "@rafty/ui";

export function SpinnerExample() {
  return (
    <div className="text-primary-500 dark:text-primary-400 flex items-center justify-center gap-4">
      <Spinner size="sm" inheritParent />
      <Spinner size="md" inheritParent />
      <Spinner size="lg" inheritParent />
    </div>
  );
}
