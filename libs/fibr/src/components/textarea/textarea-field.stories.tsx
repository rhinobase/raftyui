import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { TextareaField } from "./TextareaField";

const meta: Meta<TextareaField> = {
  title: "fibr / TextareaField",
  args: {
    defaultValue: "",
    description: "This is field description",
    disabled: false,
    hidden: false,
    label: "Label",
    placeholder: "",
    required: false,
    tooltip: "This is Textarea field",
  },
};

export default meta;
type Story = StoryObj<TextareaField>;

export const Default: Story = {
  render: (props) => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              textarea: f.textarea({
                ...props,
                name: "textarea",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
