import { RadioGroup, RadioGroupItem } from "@rafty/ui";

export const radio_examples = {
  "radio:usage": (
    <RadioGroup>
      <div className="flex flex-col gap-4">
        <RadioGroupItem value="1">Radio 1</RadioGroupItem>
        <RadioGroupItem value="2">Radio 2</RadioGroupItem>
        <RadioGroupItem value="3">Radio 3</RadioGroupItem>
      </div>
    </RadioGroup>
  ),
  "radio:default": (
    <RadioGroup defaultValue="2">
      <div className="flex flex-col gap-4">
        <RadioGroupItem value="1">Radio 1</RadioGroupItem>
        <RadioGroupItem value="2">Radio 2</RadioGroupItem>
        <RadioGroupItem value="3">Radio 3</RadioGroupItem>
      </div>
    </RadioGroup>
  ),
  "radio:disabled": (
    <RadioGroup defaultValue="1" disabled>
      <div className="flex flex-col gap-4">
        <RadioGroupItem value="1">Radio 1</RadioGroupItem>
        <RadioGroupItem value="2">Radio 2</RadioGroupItem>
        <RadioGroupItem value="3">Radio 3</RadioGroupItem>
      </div>
    </RadioGroup>
  ),
};
