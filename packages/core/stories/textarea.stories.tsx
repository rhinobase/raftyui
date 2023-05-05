import { Meta, StoryObj } from "@storybook/react";
import { FieldControl, FieldLabel } from "../src";
import { Textarea } from "../src/textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components / Textarea",
  args: {
    variant: "outline",
    disabled: false,
    required: false,
    readOnly: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Variants: Story = {
  render: ({ variant, disabled, required, readOnly }) => (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Textarea</h4>
        <FieldControl
          name=""
          disabled={disabled}
          readOnly={readOnly}
          required={required}
        >
          <FieldLabel>Enter Message</FieldLabel>
          <Textarea placeholder="abc" variant={variant} />
        </FieldControl>
      </div>
    </>
  ),
};
