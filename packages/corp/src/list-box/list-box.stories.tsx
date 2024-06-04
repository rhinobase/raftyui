import type { Meta, StoryObj } from "@storybook/react";
import { Listbox } from "./Listbox";

const meta: Meta<typeof Listbox> = {
  title: "Corp / Listbox",
};

export default meta;
type Story = StoryObj<typeof Listbox>;

const OPTIONS = [
  { value: "hello", label: "Hello" },
  { value: "react", label: "React" },
  { value: "next", label: "Next" },
  { value: "php", label: "PHP" },
  { value: "dotnet", label: "DotNet" },
];

export const Default: Story = {
  args: {
    isDisabled: false,
    isReadOnly: false,
    isLoading: false,
    hidden: false,
    defaultValue: "react",
    type: "single",
    size: "md",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multi"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  render: (props) => <Listbox {...props} items={OPTIONS} />,
};
