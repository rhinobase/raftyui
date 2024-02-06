import { PasswordField } from "@rafty/ui";

export function PasswordFieldExample() {
  return (
    <div className="space-y-2">
      <PasswordField variant="outline" size="sm" placeholder="Password" />
      <PasswordField variant="ghost" placeholder="Password" />
      <PasswordField variant="solid" size="lg" placeholder="Password" />
    </div>
  );
}
