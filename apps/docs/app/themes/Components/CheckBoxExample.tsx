import { Checkbox } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function CheckBoxExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <div className="space-y-3">
      <Checkbox isDisabled={isDisabled} size="sm" id="6">
        Checkbox
      </Checkbox>
      <Checkbox isDisabled={isDisabled} defaultChecked size="md" id="7">
        Checkbox
      </Checkbox>
      <Checkbox isDisabled={isDisabled} size="lg" id="8">
        Checkbox
      </Checkbox>
    </div>
  );
}
