import { Meta, StoryObj } from "@storybook/react";
import { FieldControl, FieldLabel } from "../src";
import { Textarea } from "../src/textarea";
import { within, fireEvent, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = await canvas.getByPlaceholderText("abc");

    // Test for find textarea
    await expect(textarea).toBeInTheDocument();
    await expect(textarea).toHaveValue("");
    await expect(textarea);

    // Test for text input
    await fireEvent.change(textarea, { target: { value: "Bird" } });
    await expect(textarea).toHaveValue("Bird");
  },
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
