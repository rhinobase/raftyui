import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@rafty/ui";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Form / Checkbox",
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: function Render() {
    const [state, setState] = useState<
      "checked" | "unchecked" | "indeterminate"
    >("indeterminate");
    return (
      <>
        <div className="flex w-80 flex-col gap-3 dark:text-white">
          <Checkbox id="green" name="green" defaultChecked size="sm">
            Green
          </Checkbox>
          <h2 className="font-bold">CheckBox indeterminate</h2>

          <Checkbox name="blue">Blue</Checkbox>
          <h2 className="font-bold">CheckBox Disabled</h2>

          <Checkbox
            name="red1"
            size="lg"
            data-state={state}
            onCheckedChange={(checked) =>
              checked ? setState("checked") : setState("indeterminate")
            }
          >
            Red
          </Checkbox>
          <h2 className="font-bold">CheckBox Checked Disabled</h2>

          <Checkbox name="red1">Red</Checkbox>
          <h2 className="font-bold">CheckBox DefaultValue</h2>

          <Checkbox name="green1" value="green1">
            Green
          </Checkbox>
          <h2 className="font-bold">CheckBox validationState</h2>
        </div>
      </>
    );
  },
};
