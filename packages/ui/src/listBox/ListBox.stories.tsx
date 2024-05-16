import type { Meta, StoryObj } from "@storybook/react";
import { Listbox } from "./Listbox";

const meta: Meta<typeof Listbox> = {
  title: "Components / Listbox",
};

export default meta;
type Story = StoryObj<typeof Listbox>;

export const Default: Story = {
  args: {
    items: [
      { value: "hello", label: "Hello" },
      { value: "react", label: "React" },
      { value: "next", label: "Next" },
      { value: "php", label: "PHP" },
      { value: "dotnet", label: "DotNet" },
    ],
    defaultValue: ["react"],
    isDisabled: false,
    isReadOnly: false,
    isLoading: false,
    hidden: false,
  },
  render: (props) => <Listbox {...props} />,
};
