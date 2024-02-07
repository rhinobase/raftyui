import { ToggleGroup, ToggleGroupItem } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function ToggleGroupExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <ToggleGroup defaultValue="2" type="single">
      <ToggleGroupItem disabled={isDisabled} value="1">
        1
      </ToggleGroupItem>
      <ToggleGroupItem disabled={isDisabled} value="2">
        2
      </ToggleGroupItem>
      <ToggleGroupItem disabled={isDisabled} value="3">
        3
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
