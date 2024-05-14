import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Form / DatePicker",
  args: {
    startOfWeek: 1,
    positioning: {
      placement: "top-start",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (props) => <DatePicker {...props} />,
};

export const DefaultValue: Story = {
  render: () => {
    const date = new Date();
    // const currentDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

    return <DatePicker defaultValue={[date.toISOString().split("T")[0]]} />;
  },
};
