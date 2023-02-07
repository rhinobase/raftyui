import { Grid } from "@rhinobase/storybook/components";
import { ReactSelect } from "./ReactSelect";

export default {
  title: "New/ReactSelect",
  component: ReactSelect,
  //   argTypes: {
  //     type: { control: "select" },
  //   },
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanill", label: "Vanill" },
];

export function Default() {
  return (
    <Grid>
      <div className="w-80">
        <ReactSelect options={options} type="multiple" />
      </div>
    </Grid>
  );
}
