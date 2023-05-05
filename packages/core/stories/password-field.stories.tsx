import { PasswordField } from "../src/password-field/PasswordField";
import { FieldControl, FieldLabel } from "../src/field";

const config = {
  title: "New/Password Field",
  component: PasswordField,
};
export default config;

export function Default() {
  return (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Password Field</h4>
        <FieldControl name="password">
          <PasswordField name="password" />
        </FieldControl>
        <h4>Password Field invalid</h4>
        <FieldControl name="password" invalid>
          <PasswordField name="password" />
        </FieldControl>
        <h4>Password Field disabled</h4>
        <FieldControl name="password" disabled>
          <PasswordField name="password" />
        </FieldControl>
        <h4>Password Field readOnly</h4>
        <FieldControl name="password" readOnly>
          <PasswordField name="password" />
        </FieldControl>
        <h4>Password Field required</h4>
        <FieldControl name="password" required>
          <FieldLabel>Enter Password</FieldLabel>
          <PasswordField name="password" />
        </FieldControl>
      </div>
    </>
  );
}
