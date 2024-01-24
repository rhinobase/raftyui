import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { PercentField } from "./PercentField";

const meta: Meta<typeof PercentField> = {
  title: "fibr / PercentField",
};

export default meta;
type Story = StoryObj<typeof PercentField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            fields: {
              percent: f.percent({
                name: "percent",
                label: "Percent",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
