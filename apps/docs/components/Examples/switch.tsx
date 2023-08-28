import { Switch } from "@rafty/ui";

export const switch_examples = {
  "switch:usage": <Switch />,

  "switch:size": (
    <div>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  ),

  "switch:disabled": <Switch disabled />,

  "switch:selected": <Switch checked />,

  "switch:required": <Switch size="lg" required />,
};
