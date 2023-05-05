import { Checkbox } from "../src";

const config = {
  title: "New/Checkbox",
  // component: Checkbox,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default config;

export function Default() {
  return (
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
        <Checkbox name="red1" disabled checked>
          Red
        </Checkbox>
        <h2 className="font-bold">CheckBox DefaultValue</h2>
        <Checkbox name="green1" value="green1" defaultValue="green1">
          Green
        </Checkbox>

        <h2 className="font-bold">CheckBox checked</h2>
        <Checkbox name="blue1" checked>
          Blue
        </Checkbox>
        <h2 className="font-bold">CheckBox defaultChecked</h2>
        <Checkbox name="pink" defaultChecked>
          Pink
        </Checkbox>
        <h2 className="font-bold">CheckBox validationState</h2>
        <Checkbox name="pink" defaultChecked validationState="invalid">
          I accept the terms and conditions
        </Checkbox>
      </div>
    </>
  );
}
