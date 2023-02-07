import { Grid } from "@rhinobase/storybook/components";
import { Kbd } from "./Kbd";

export default {
  title: "New/Kbd",
  component: Kbd,
};

export function Default() {
  return (
    <Grid>
      <span>
        <Kbd>Shift</Kbd> + <Kbd>A</Kbd>
      </span>
    </Grid>
  );
}
