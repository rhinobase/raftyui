import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { SwitchField } from "./SwitchField";

const meta: Meta<typeof SwitchField> = {
  title: "fibr / SwitchField",
};

export default meta;
type Story = StoryObj<typeof SwitchField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              switch: f.switchField({
                name: "switch",
                label: "Switch",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
