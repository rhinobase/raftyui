import { Meta, StoryObj } from "@storybook/react";
import { InputField, NumberField } from "@rafty/ui";
import { useState } from "react";

const meta: Meta<typeof InputField> = {
  title: "Form / NumberField",
  args: {
    size: "md",
    variant: "outline",
    disabled: false,
    required: false,
    readOnly: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: function NumberFieldStory() {
    const [value, setValue] = useState(0);
    return (
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4 className="font-bold">Number Field - {value}</h4>
        <NumberField value={value} onChange={setValue} />
      </div>
    );
  },
};
