import { Meta, StoryObj } from "@storybook/react";
import { DatePicker, FieldControl } from "../src";

const meta: Meta<typeof DatePicker> = {
  title: "Components / DatePicker",
  args: {
    picker: "date",
  },
  argTypes: {
    picker: {
      control: "select",
      options: ["date", "month", "year"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Variants: Story = {
  render: ({ picker }) => (
    <>
      <div className="w-[300px]">
        <FieldControl name="date">
          <DatePicker
            onSelect={(value) => console.log(value)}
            picker={picker}
          />
        </FieldControl>
      </div>
    </>
  ),
};
