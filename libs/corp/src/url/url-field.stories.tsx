import { LinkIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { UrlField } from "./UrlField";

const meta: Meta<typeof UrlField> = {
  title: "Corp / UrlField",
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
type Story = StoryObj<typeof UrlField>;

export const Default: Story = {
  render: ({ size }) => <UrlField size={size} placeholder="example.com" />,
};

export const prefixText: Story = {
  render: ({ size }) => (
    <UrlField size={size} prefixText="https://" placeholder="example.com" />
  ),
};

export const prefixIcon: Story = {
  render: ({ size }) => (
    <UrlField
      size={size}
      prefixIcon={<LinkIcon height={16} width={16} />}
      placeholder="example.com"
    />
  ),
};

export const suffixText: Story = {
  render: ({ size }) => (
    <UrlField size={size} suffixText="URL" placeholder="example.com" />
  ),
};

export const suffixIcon: Story = {
  render: ({ size }) => (
    <UrlField
      size={size}
      suffixIcon={<LinkIcon height={16} width={16} />}
      placeholder="example.com"
    />
  ),
};
