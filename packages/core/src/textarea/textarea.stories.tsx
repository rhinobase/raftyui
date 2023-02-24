import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { Textarea } from "./Textarea";

const config = {
  title: "Forms/Textarea",
  component: Textarea,
};
export default config;

export function Default() {
  return (
    <Grid>
      <Textarea placeholder="abc" />
    </Grid>
  );
}
