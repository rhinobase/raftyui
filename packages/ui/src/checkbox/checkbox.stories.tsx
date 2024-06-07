import type { CheckedState } from "@radix-ui/react-checkbox";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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
  render: (props) => {
    const [state, setState] = useState<CheckedState>("indeterminate");

    return (
      <Checkbox
        {...props}
        id="name"
        onCheckedChange={(checked) =>
          checked ? setState(true) : setState("indeterminate")
        }
      >
        Name
      </Checkbox>
    );
  },
};
