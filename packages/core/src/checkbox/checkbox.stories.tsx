import { Grid } from "@rhinobase/storybook/components";
import { Checkbox } from "./Checkbox";

export default {
  title: "New/Checkbox",
  component: Checkbox,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export function Default() {
  return (
    <Grid>
      <div className="w-40">
        <Checkbox name="red">Red</Checkbox>
        <Checkbox name="green">Green</Checkbox>
        <Checkbox name="blue" data-state="indeterminate">
          Blue
        </Checkbox>
        <br />
        <Checkbox name="red1" size="sm">
          Red
        </Checkbox>
        <Checkbox name="green1" size="md">
          Green
        </Checkbox>
        <Checkbox name="blue1" size="lg">
          Blue
        </Checkbox>
      </div>
    </Grid>
  );
}
