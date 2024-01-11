import { TvIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "fibr / TextField",
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
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: ({ size }) => <TextField size={size} />,
};

export const prefixIcon: Story = {
  render: ({ size }) => (
    <TextField size={size} prefixIcon={<TvIcon height={16} width={16} />} />
  ),
};

export const prefixText: Story = {
  render: ({ size }) => <TextField size={size} prefixText="Text" />,
};

export const suffixIcon: Story = {
  render: ({ size }) => (
    <TextField size={size} suffixIcon={<TvIcon height={16} width={16} />} />
  ),
};

export const suffixText: Story = {
  render: ({ size }) => <TextField size={size} suffixText="Text" />,
};
