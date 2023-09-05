import { FieldControl, Label, RangePicker, Text } from "@rafty/ui";

export default function RangePickerExample() {
  return (
    <FieldControl name="rangepicker" isRequired>
      <Label>Select Days</Label>
      <RangePicker />
      <Text className="text-xs text-secondary-500 dark:text-secondary-400">
        This is our RangePicker component
      </Text>
    </FieldControl>
  );
}
