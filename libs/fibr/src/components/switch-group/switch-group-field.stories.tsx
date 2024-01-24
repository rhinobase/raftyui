import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { SwitchGroupField } from "./SwitchGroupField";

const meta: Meta<typeof SwitchGroupField> = {
  title: "fibr / SwitchGroupField",
};

export default meta;
type Story = StoryObj<typeof SwitchGroupField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              switchGroup: f.switchGroup({
                name: "switchGroup",
                label: "Switch Group",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
