import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { CheckboxField } from "./CheckboxField";

const meta: Meta<typeof CheckboxField> = {
  title: "fibr / CheckboxField",
};

export default meta;
type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              checkbox: f.checkbox({
                name: "checkbox",
                label: "Checkbox",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
