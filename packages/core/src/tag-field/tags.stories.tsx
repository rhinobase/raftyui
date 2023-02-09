import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { TagField } from "./TagField";

export default {
  title: "Forms/TagField",
  component: TagField,
};

export function Default() {
  return (
    <Grid>
      <TagField />
    </Grid>
  );
}
