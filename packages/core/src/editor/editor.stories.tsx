import React from "react";
import { Grid } from "@rhinobase/docs/components";
import { Editor } from "./Editor";

const config = {
  title: "Forms/Editor",
  component: Editor,
};
export default config;

export function Default() {
  return (
    <Grid>
      <div className="w-[600px]">
        <Editor />
      </div>
    </Grid>
  );
}
