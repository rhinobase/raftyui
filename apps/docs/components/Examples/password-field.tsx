import { PasswordField } from "@rafty/ui";

export const password_field_examples = {
  "password-field:usage": <PasswordField />,
  "password-field:size": (
    <div className="space-y-2">
      <PasswordField size="sm" />
      <PasswordField size="md" />
      <PasswordField size="lg" />
    </div>
  ),
  "password-field:variant": (
    <div className="space-y-2">
      <PasswordField variant="outline" />
      <PasswordField variant="ghost" />
      <PasswordField variant="solid" />
    </div>
  ),
};
