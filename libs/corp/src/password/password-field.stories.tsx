import { BellIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { PasswordField } from "./PasswordField";

const meta: Meta<typeof PasswordField> = {
  title: "Corp / PasswordField",
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
type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  render: ({ size }) => <PasswordField size={size} />,
};
export const prefixText: Story = {
  render: ({ size }) => <PasswordField size={size} prefixText="Password" />,
};
export const prefixIcon: Story = {
  render: ({ size }) => (
    <PasswordField
      size={size}
      prefixIcon={<BellIcon height={16} width={16} />}
    />
  ),
};
