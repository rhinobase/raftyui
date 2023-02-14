import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { TagField } from "./TagField";

export default {
  title: "Forms/Tag Field",
  component: TagField,
};

export function Default() {
  return (
    <Grid>
      <TagField />
    </Grid>
  );
}
