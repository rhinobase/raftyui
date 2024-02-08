import { RadioGroup, RadioGroupItem } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function RadioExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <RadioGroup isDisabled={isDisabled} defaultValue="2">
      <RadioGroupItem value="1" id="7">
        Radio 1
      </RadioGroupItem>
      <RadioGroupItem value="2" id="8">
        Radio 2
      </RadioGroupItem>
      <RadioGroupItem value="3" id="9">
        Radio 3
      </RadioGroupItem>
    </RadioGroup>
  );
}
