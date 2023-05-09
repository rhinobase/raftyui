import { Checkbox, CheckboxGroup } from "../src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Components / Checkbox",
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <>
      <div className="flex w-80 flex-col gap-3">
        <h2 className="font-bold">CheckBox</h2>
        <Checkbox name="red" id="sample">
          Red
        </Checkbox>
        <Checkbox name="green">Green</Checkbox>
        <h2 className="font-bold">CheckBox indeterminate</h2>
        <Checkbox name="blue" isIndeterminate>
          Blue
        </Checkbox>
        <h2 className="font-bold">CheckBox Disabled</h2>
        <Checkbox name="red1" isDisabled>
          Red
        </Checkbox>
        <h2 className="font-bold">CheckBox Checked Disabled</h2>
        <Checkbox name="red1" isDisabled defaultSelected>
          Red
        </Checkbox>
        <h2 className="font-bold">CheckBox DefaultValue</h2>
        <Checkbox name="green1" value="green1">
          Green
        </Checkbox>

        <h2 className="font-bold">CheckBox validationState</h2>
        <Checkbox name="pink" defaultSelected validationState="invalid">
          I accept the terms and conditions
        </Checkbox>

        <CheckboxGroup label="Favorite sports">
          <Checkbox value="soccer" isDisabled>
            Soccer
          </Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
          <Checkbox value="basketball">Basketball</Checkbox>
        </CheckboxGroup>
      </div>
    </>
  ),
};
