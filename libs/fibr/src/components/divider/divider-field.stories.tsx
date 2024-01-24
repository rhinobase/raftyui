import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { DividerField } from "./DividerField";

const meta: Meta<typeof DividerField> = {
  title: "fibr / DividerField",
};

export default meta;
type Story = StoryObj<typeof DividerField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            fields: {
              divider: f.divider({
                name: "divider",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
