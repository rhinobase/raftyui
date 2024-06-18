import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form / Checkbox",
  args: {
    size: "md",
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    isInvalid: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (props) => {
    return <Checkbox {...props} />;
  },
};

export const WithChildren: Story = {
  render: (props) => (
    <Checkbox {...props} id="name">
      Name
    </Checkbox>
  ),
};

export const Indeterminate: Story = {
  render: (props) => (
    <Checkbox {...props} id="name" checked="indeterminate">
      Name
    </Checkbox>
  ),
};
