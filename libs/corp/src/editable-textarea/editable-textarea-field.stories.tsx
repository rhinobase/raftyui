import { PencilSquareIcon, TvIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { EditableTextareaField } from "./EditableTextareaField";

const meta: Meta<typeof EditableTextareaField> = {
  title: "Corp / EditableTextareaField",
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
type Story = StoryObj<typeof EditableTextareaField>;

export const Default: Story = {
  render: ({ size }) => <EditableTextareaField size={size} />,
};

export const editIcon: Story = {
  render: ({ size }) => (
    <EditableTextareaField
      size={size}
      editIcon={<PencilSquareIcon height={16} width={16} />}
    />
  ),
};
