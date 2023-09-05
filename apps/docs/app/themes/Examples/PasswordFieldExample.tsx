import { FieldControl, Label, PasswordField, Text } from "@rafty/ui";

export function PasswordFieldExample() {
  return (
    <FieldControl name="p" isRequired>
      <Label>Password</Label>
      <PasswordField />
      <Text className="text-xs text-secondary-500 dark:text-secondary-400">
        This is our password field
      </Text>
    </FieldControl>
  );
}
