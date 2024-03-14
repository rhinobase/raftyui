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
  render: ({ size, isDisabled, isRequired, isReadOnly }) => {
    return (
      <Checkbox
        isDisabled={isDisabled}
        size={size}
        isRequired={isRequired}
        isReadOnly={isReadOnly}
      />
    );
  },
};

export const WithChildren: Story = {
  render: ({ size, isDisabled, isRequired, isReadOnly }) => (
    <Checkbox
      id="name"
      size={size}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
    >
      Name
    </Checkbox>
  ),
};

export const Indeterminate: Story = {
  render: ({ size, isDisabled, isRequired, isReadOnly }) => {
    const [state, setState] = useState<CheckedState>("indeterminate");

    return (
      <Checkbox
        id="name"
        size={size}
        checked={state}
        isDisabled={isDisabled}
        isRequired={isRequired}
        isReadOnly={isReadOnly}
        onCheckedChange={(checked) =>
          checked ? setState(true) : setState("indeterminate")
        }
      >
        Name
      </Checkbox>
    );
  },
};
