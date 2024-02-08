import { PasswordField } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function PasswordFieldExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <div className="space-y-2">
      <PasswordField
        isDisabled={isDisabled}
        variant="outline"
        size="sm"
        placeholder="Password"
      />
      <PasswordField
        variant="ghost"
        isDisabled={isDisabled}
        placeholder="Password"
      />
      <PasswordField
        variant="solid"
        size="lg"
        isDisabled={isDisabled}
        placeholder="Password"
      />
    </div>
  );
}
