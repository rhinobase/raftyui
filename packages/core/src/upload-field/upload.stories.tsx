import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { UploadField } from "./UploadField";

const config = {
  title: "Forms/Upload Field",
  component: UploadField,
};
export default config;

export function Default() {
  return (
    <Grid>
      <UploadField />
    </Grid>
  );
}
