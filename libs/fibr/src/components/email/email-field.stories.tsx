import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { EmailField } from "./EmailField";

const meta: Meta<typeof EmailField> = {
  title: "fibr / EmailField",
};

export default meta;
type Story = StoryObj<typeof EmailField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              email: f.email({
                name: "email",
                label: "Email",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
