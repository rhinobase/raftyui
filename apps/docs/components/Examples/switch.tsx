import { Switch } from "@rafty/ui";

export const switch_examples = {
  "switch:usage": <Switch />,

  "switch:size": (
    <div className="flex items-center gap-4">
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  ),

  "switch:disabled": <Switch isDisabled />,
  "switch:readonly": <Switch isReadOnly />,

  "switch:selected": <Switch checked />,

  "switch:required": <Switch size="lg" isRequired />,
};
