import { Switch } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function SwitchExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <div className="flex items-center gap-4">
      <Switch isDisabled={isDisabled} size="sm" />
      <Switch isDisabled={isDisabled} size="md" defaultChecked />
      <Switch isDisabled={isDisabled} size="lg" defaultChecked />
    </div>
  );
}
