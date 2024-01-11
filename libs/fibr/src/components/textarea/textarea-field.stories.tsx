import { Meta, StoryObj } from "@storybook/react";
import { TextareaField } from "./TextareaField";

const meta: Meta<typeof TextareaField> = {
  title: "fibr / TextareaField",
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
type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  render: ({ size }) => <TextareaField size={size} />,
};
