import type { CheckedState } from "@radix-ui/react-checkbox";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FieldControl } from "../field-control";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form / Checkbox",
  args: {
    size: "md",
    isDisabled: false,
    isRequired: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isDisabled: {},
    isRequired: {},
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: ({ size, isDisabled, isRequired }) => {
    return (
      <Checkbox isDisabled={isDisabled} size={size} isRequired={isRequired} />
    );
  },
};

export const WithChildren: Story = {
  render: ({ size, isDisabled, isRequired }) => (
    <FieldControl name="name" isRequired>
      <Checkbox
        id="name"
        size={size}
        isDisabled={isDisabled}
        isRequired={isRequired}
      >
        Name
      </Checkbox>
    </FieldControl>
  ),
};

export const Indeterminate: Story = {
  render: ({ size, isDisabled, isRequired }) => {
    const [state, setState] = useState<CheckedState>("indeterminate");

    return (
      <Checkbox
        id="name"
        size={size}
        checked={state}
        isDisabled={isDisabled}
        isRequired={isRequired}
        onCheckedChange={(checked) =>
          checked ? setState(true) : setState("indeterminate")
        }
      >
        Name
      </Checkbox>
    );
  },
};
