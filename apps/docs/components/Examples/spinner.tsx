import { Spinner } from "@rafty/ui";

export const spinner_examples = {
  "spinner:usage": <Spinner />,
  "spinner:size": (
    <div className="flex gap-4 items-center">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
  "spinner:InheritParent": (
    <div className="flex gap-1 text-primary-500 dark:text-primary-400">
      <Spinner inheritParent />
    </div>
  ),
};
