import { Spinner } from "@rafty/ui";

export const spinner_examples = {
  "spinner:usage": <Spinner />,
  "spinner:size": (
    <div className="flex gap-1">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
