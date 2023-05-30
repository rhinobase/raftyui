import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@rafty/ui";

const meta: Meta<typeof DatePicker> = {
  title: "Form / DatePicker",
  args: {
    size: "md",
    variant: "outline",
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
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: ({ size, variant }) => (
    <>
      <div className="w-[500px]">
        <DatePicker
          data-cy="datepicker"
          size={size}
          variant={variant}
          onChange={(date) => console.log(typeof date, date)}
        />
      </div>
    </>
  ),
};
