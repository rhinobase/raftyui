import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@rafty/ui";
import { useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form / Checkbox",
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: function Render({ size }) {
    const [state, setState] = useState<CheckedState>("indeterminate");

    return (
      <>
        <div className="flex w-80 flex-col gap-3 dark:text-white">
          <h2 className="font-bold">CheckBox</h2>

          <Checkbox id="green" name="green" defaultChecked size={size}>
            Green
          </Checkbox>

          <Checkbox id="green" name="green" defaultChecked size={size} />

          <h2 className="font-bold">CheckBox Disabled</h2>
          <Checkbox name="blue" disabled size={size}>
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
            Red
          </Checkbox>
          <h2 className="font-bold">CheckBox Checked Disabled</h2>

          <Checkbox name="red1" disabled defaultChecked size={size}>
            Red
          </Checkbox>
          <h2 className="font-bold">CheckBox defaultChecked</h2>

          <Checkbox id="green1" value="green1" defaultChecked size={size}>
            Green
          </Checkbox>
          <h2 className="font-bold">CheckBox Without Children</h2>
          <Checkbox id="" size={size} />
        </div>
      </>
    );
  },
};
