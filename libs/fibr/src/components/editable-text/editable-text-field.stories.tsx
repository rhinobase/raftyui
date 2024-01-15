import { PlusIcon, TvIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { EditableTextField } from "./EditableTextField";

const meta: Meta<typeof EditableTextField> = {
  title: "fibr / EditableTextField",
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
type Story = StoryObj<typeof EditableTextField>;

export const Default: Story = {
  render: ({ size }) => <EditableTextField size={size} />,
};

export const prefixIcon: Story = {
  render: ({ size }) => (
    <EditableTextField
      size={size}
      prefixIcon={<TvIcon height={16} width={16} />}
    />
  ),
};
export const prefixText: Story = {
  render: ({ size }) => <EditableTextField size={size} prefixText="Edit" />,
};

export const suffixText: Story = {
  render: ({ size }) => <EditableTextField size={size} suffixText="Edit" />,
};

export const suffixIcon: Story = {
  render: ({ size }) => (
    <EditableTextField
      size={size}
      suffixIcon={<TvIcon height={16} width={16} />}
    />
  ),
};

export const editIcon: Story = {
  render: ({ size }) => (
    <EditableTextField
      size={size}
      editIcon={<PlusIcon height={16} width={16} />}
    />
  ),
};

export const Custom: Story = {
  render: ({ size }) => {
    const [value, setValue] = useState<string>();
    console.log(value);

    return (
      <EditableTextField
        size={size}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
