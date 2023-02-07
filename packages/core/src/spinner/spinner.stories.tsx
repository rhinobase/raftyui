import { Grid } from "@rhinobase/docs/components";
import { ISpinner, Spinner } from "./Spinner";

export default {
  title: "New/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "select" },
  },
};

export function Default(args: ISpinner) {
  return (
    <Grid>
      <Spinner {...args} />
    </Grid>
  );
}

Default.args = {
  size: "",
  inheritParent: true,
};
