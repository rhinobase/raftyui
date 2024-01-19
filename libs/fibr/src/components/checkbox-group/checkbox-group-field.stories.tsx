import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
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
      <WeaverProvider
        blueprint={f.form({
          onSubmit: console.log,
          fields: {
            checkboxGroup: f.checkboxGroup({
              name: "checkboxGroup",
              label: "Checkbox Group",
              options: [
                { label: "Python", value: "py" },
                { label: "JavaScript", value: "js" },
                { label: "Java", value: "java" },
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
