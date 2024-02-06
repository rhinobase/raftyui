import { Switch } from "@rafty/ui";

export function SwitchExample() {
  return (
    <div className="flex items-center gap-4">
      <Switch size="sm" />
      <Switch size="md" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
  );
}
