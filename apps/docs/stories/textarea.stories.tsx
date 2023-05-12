import { Meta, StoryObj } from "@storybook/react";
import { FieldControl, FieldLabel } from "@rhino/field";
import { Textarea } from "@rhino/textarea";

const meta: Meta<typeof Textarea> = {
  title: "Form / Textarea",
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
          isDisabled={disabled}
          isReadOnly={readOnly}
          isRequired={required}
        >
          <FieldLabel>Enter Message</FieldLabel>
          <Textarea placeholder="abc" variant={variant} />
        </FieldControl>
      </div>
    </>
  ),
};
