import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
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
      <WeaverProvider
        blueprint={f.form({
          onSubmit: console.log,
          fields: {
            radioGroup: f.radioGroup({
              name: "radioGroup",
              label: "Radio",
              options: [
                { label: "Python", value: "py" },
                { label: "JavaScript", value: "js" },
              ],
            }),
          },
        })}
      >
        <div className="w-full">
          <Loom />
        </div>
      </WeaverProvider>
    </FibrProvider>
  ),
};