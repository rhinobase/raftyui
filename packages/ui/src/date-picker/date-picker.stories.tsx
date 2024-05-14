import type { Meta, StoryObj } from "@storybook/react";
import dateFormat from "dateformat";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Form / DatePicker",
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (props) => (
    <DatePicker
      {...props}
      format={(date) => `${date.day}/${date.month}/${date.year}`}
    />
  ),
};

export const DefaultValue: Story = {
  render: () => {
    const date = new Date();
    const currentDate = dateFormat(date, "isoDate");

    return <DatePicker defaultValue={[currentDate]} />;
  },
};
