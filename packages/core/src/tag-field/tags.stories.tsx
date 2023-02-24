import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { TagField } from "./TagField";

const config = {
  title: "Forms/Tag Field",
  component: TagField,
};
export default config;

export function Default() {
  return (
    <Grid>
      <TagField />
    </Grid>
  );
}
