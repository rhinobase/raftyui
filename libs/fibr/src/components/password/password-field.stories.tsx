import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { PasswordField } from "./PasswordField";

const meta: Meta<typeof PasswordField> = {
  title: "fibr / PasswordField",
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              password: f.password({
                name: "password",
                label: "Password",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
