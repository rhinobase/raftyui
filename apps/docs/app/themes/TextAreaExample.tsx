import { FieldControl, Label, Text, Textarea } from "@rafty/ui";

export default function TextAreaExample() {
  return (
    <FieldControl name="textarea" isRequired>
      <Label>TextArea</Label>
      <Textarea />
      <Text className="text-xs text-secondary-500 dark:text-secondary-400">
        This is our sample textarea
      </Text>
    </FieldControl>
  );
}
