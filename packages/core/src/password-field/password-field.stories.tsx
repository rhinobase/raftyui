import { Grid } from "@rhinobase/docs/components";
import { PasswordField } from "./PasswordField";
import React from "react";

const config = {
  title: "New/Password Field",
  component: PasswordField,
};
export default config;

export function Default() {
  return (
    <Grid>
      <PasswordField name="password" />
    </Grid>
  );
}
