import { Meta, StoryObj } from "@storybook/react";
import { RangePicker } from "@rafty/ui";

const meta: Meta<typeof RangePicker> = {
  title: "Form / RangePicker",
};

export default meta;
type Story = StoryObj<typeof RangePicker>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-5">
      <RangePicker
        data-cy="range-picker"
        onSelect={(range) => console.log(range)}
      />
      <RangePicker
        data-cy="range-picker"
        selected={{
          from: new Date(2022, 1, 20),
          to: new Date(2022, 2, 20),
        }}
      />
    </div>
  ),
};
