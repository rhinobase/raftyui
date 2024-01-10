import { TvIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { EmailField } from "./EmailField";

const meta: Meta<typeof EmailField> = {
  title: "Corp / EmailField",
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
type Story = StoryObj<typeof EmailField>;

export const Default: Story = {
  render: ({ size }) => <EmailField size={size} />,
};

export const prefixIcon: Story = {
  render: ({ size }) => (
    <EmailField size={size} prefixIcon={<TvIcon height={16} width={16} />} />
  ),
};

export const prefixText: Story = {
  render: ({ size }) => <EmailField size={size} prefixText="Email" />,
};

export const suffixIcon: Story = {
  render: ({ size }) => (
    <EmailField size={size} suffixIcon={<TvIcon height={16} width={16} />} />
  ),
};

export const suffixText: Story = {
  render: ({ size }) => <EmailField size={size} suffixText="Email" />,
};

export const DefaultValue: Story = {
  render: ({ size }) => (
    <EmailField size={size} suffixText="Email" defaultValue="hello" />
  ),
};

export const Value: Story = {
  render: ({ size }) => (
    <EmailField size={size} suffixText="Email" value="world" />
  ),
};

export const Custom: Story = {
  render: ({ size }) => {
    const [value, setValue] = useState<string>();
    console.log(value);

    return (
      <EmailField
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
