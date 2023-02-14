import { Grid } from "@rhinobase/docs/components";
import { PasswordField } from "./PasswordField";
import React from "react";

export default {
  title: "New/Password Field",
  component: PasswordField,
};

export function Default() {
  return (
    <Grid>
      <PasswordField name="password" />
    </Grid>
  );
}
