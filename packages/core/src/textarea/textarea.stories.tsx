import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { Textarea } from "./Textarea";

export default {
  title: "Forms/Textarea",
  component: Textarea,
};

export function Default() {
  return (
    <Grid>
      <Textarea placeholder="abc" />
    </Grid>
  );
}
