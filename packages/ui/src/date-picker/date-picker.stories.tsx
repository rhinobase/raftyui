import type { Meta, StoryObj } from "@storybook/react";
import dateFormat from "dateformat";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Form / DatePicker",
  args: {
    disabled: false,
    size: "md",
    placeholder: "Select a date",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (props) => <DatePicker {...props} />,
};

export const DefaultValue: Story = {
  render: (props) => {
    const date = new Date();
    const currentDate = dateFormat(date, "isoDate");

    return <DatePicker {...props} defaultValue={currentDate} />;
  },
};
