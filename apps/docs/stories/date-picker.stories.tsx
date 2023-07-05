import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@rafty/ui";

const meta: Meta<typeof DatePicker> = {
  title: "Form / DatePicker",
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => (
    <>
      <div className="w-[280px]">
        <DatePicker onSelect={(date) => console.log(date)} />
      </div>
      <div className="w-[280px]">
        <DatePicker selected={new Date()} />
      </div>
    </>
  ),
};
