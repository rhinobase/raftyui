import type { Meta, StoryObj } from "@storybook/react";
import dateFormat from "dateformat";
import { RangePicker } from "./RangePicker";

const meta: Meta<typeof RangePicker> = {
  title: "Form / RangePicker",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RangePicker>;

export const Default: Story = {
  render: (props) => <RangePicker {...props} />,
};

export const DefaultValue: Story = {
  render: () => {
    const date = new Date();
    const firstDate = dateFormat(date, "isoDate");
    const tmp = date;
    tmp.setDate(tmp.getDate() + 10);
    const secondDate = dateFormat(tmp, "isoDate");

    return <RangePicker defaultValue={[firstDate, secondDate]} />;
  },
};
