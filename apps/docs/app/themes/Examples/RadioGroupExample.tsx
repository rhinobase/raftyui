import { RadioGroup, RadioGroupItem } from "@rafty/ui";

export function RadioGroupExample() {
  return (
    <RadioGroup defaultValue="1">
      <div className="flex flex-col gap-4">
        <RadioGroupItem value="1">Radio 1</RadioGroupItem>
        <RadioGroupItem value="2">Radio 2</RadioGroupItem>
        <RadioGroupItem value="3">Radio 3</RadioGroupItem>
      </div>
    </RadioGroup>
  );
}
