import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { RadioGroupField } from "./RadioGroupField";

const meta: Meta<typeof RadioGroupField> = {
  title: "fibr / RadioGroupField",
};

export default meta;
type Story = StoryObj<typeof RadioGroupField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              radioGroup: f.radioGroup({
                name: "radioGroup",
                label: "Radio",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
