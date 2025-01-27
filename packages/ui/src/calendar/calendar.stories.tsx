import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar.js";

const meta: Meta<typeof Calendar> = {
  title: "Form / Calendar",
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
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: (props) => <Calendar {...props} />,
};
