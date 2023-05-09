import { Meta, StoryObj } from "@storybook/react";
import { DatePickers, FieldControl } from "../src";

const meta: Meta<typeof DatePickers> = {
  title: "Components / DatePickers",
  // args: {
  //   picker: "date",
  // },
  // argTypes: {
  //   picker: {
  //     control: "select",
  //     options: ["date", "month", "year"],
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof DatePickers>;

export const Variants: Story = {
  render: () => (
    <>
      <div className="w-[300px]">
        <FieldControl name="date">
          <DatePickers />
        </FieldControl>
      </div>
    </>
  ),
};
