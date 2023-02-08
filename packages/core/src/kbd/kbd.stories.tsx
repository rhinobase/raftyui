import { Grid } from "@rhinobase/docs/components";
import { Kbd } from "./Kbd";
import React from "react";

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
