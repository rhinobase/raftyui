import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "@rafty/ui";

const meta: Meta<typeof Checkbox> = {
  title: "Form / Checkbox",
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <>
      <div className="flex w-80 flex-col gap-3 dark:text-white">
        <h2 className="font-bold">CheckBox</h2>
        <CheckboxGroup>
          <Checkbox
            name="red"
            id="sample"
            onChange={(value) => console.log(value)}
            value="red"
          >
            Red
          </Checkbox>
        </CheckboxGroup>
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
        <Checkbox name="green1" value="green1" defaultSelected>
          Green
        </Checkbox>

        <h2 className="font-bold">CheckBox validationState</h2>
        <Checkbox name="pink" defaultSelected validationState="invalid">
          I accept the terms and conditions
        </Checkbox>
      </div>
    </>
  ),
};

export const CheckBoxGroup: Story = {
  render: () => (
    <>
      <div className="flex w-80 flex-col gap-3">
        <h2 className="font-bold">CheckBox</h2>

        <CheckboxGroup
          label="Favorite sports"
          onChange={(value) => console.log(value)}
          value={["baseball"]}
        >
          <div className="flex flex-col gap-4">
            <Checkbox value="soccer" isDisabled>
              Soccer
            </Checkbox>
            <Checkbox value="baseball">Baseball</Checkbox>
            <Checkbox value="basketball">Basketball</Checkbox>
          </div>
        </CheckboxGroup>
      </div>
    </>
  ),
};
