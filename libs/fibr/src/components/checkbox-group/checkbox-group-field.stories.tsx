import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { CheckboxGroupField } from "./CheckboxGroupField";

const meta: Meta<typeof CheckboxGroupField> = {
  title: "fibr / CheckboxGroupField",
};

export default meta;
type Story = StoryObj<typeof CheckboxGroupField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              checkboxGroup: f.checkboxGroup({
                name: "checkboxGroup",
                label: "Checkbox Group",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
