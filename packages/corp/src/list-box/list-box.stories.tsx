import type { Meta, StoryObj } from "@storybook/react";
import { Listbox } from "./Listbox";

const meta: Meta<typeof Listbox> = {
  title: "Corp / Listbox",
  args: {
    isDisabled: false,
    isReadOnly: false,
    isLoading: false,
    isHidden: false,
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
};

export default meta;
type Story = StoryObj<typeof Listbox>;

const ITEMS = [
  { value: "hello", label: "Hello" },
  { value: "react", label: "React" },
  { value: "next", label: "Next" },
  { value: "php", label: "PHP" },
  { value: "dotnet", label: "DotNet" },
];

export const Default: Story = {
  render: (props) => <Listbox {...props} items={ITEMS} />,
};
