import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@rafty/ui";
import { useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";

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
  render: function Render({ size, isDisabled, isRequired }) {
    const [state, setState] = useState<CheckedState>("indeterminate");

    return (
      <div className="flex w-80 flex-col gap-3 dark:text-white">
        <h2 className="font-bold">CheckBox</h2>

        <Checkbox
          name="blue"
          isDisabled={isDisabled}
          size={size}
          isRequired={isRequired}
        >
          Blue
        </Checkbox>

        <h2 className="font-bold">CheckBox indeterminate</h2>
        <Checkbox
          id="red1"
          name="red1"
          size={size}
          checked={state}
          onCheckedChange={(checked) =>
            checked ? setState(true) : setState("indeterminate")
          }
        >
          Name
        </Checkbox>
        <h2 className="font-bold">CheckBox Without Children</h2>
        <Checkbox id="" size={size} />
      </div>
    );
  },
};

export const Checked: Story = {
  render: ({ size, isDisabled, isRequired }) => (
    <Checkbox
      id=""
      size={size}
      isDisabled={isDisabled}
      isRequired={isRequired}
      checked
    >
      Name
    </Checkbox>
  ),
};
