import { Spinner } from "@rafty/ui";

export const spinner_examples = {
  "spinner:usage": <Spinner />,
  "spinner:size": (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
  "spinner:InheritParent": (
    <div className="text-primary-500 dark:text-primary-400 flex gap-1">
      <Spinner inheritParent />
    </div>
  ),
};
