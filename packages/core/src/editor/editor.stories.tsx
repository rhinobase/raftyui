import React from "react";
import { Grid } from "@rhinobase/docs/components";
import { Editor } from "./Editor";

export default {
  title: "Forms/Editor",
  component: Editor,
};

export function Default() {
  return (
    <Grid>
      <div className="w-[600px]">
        <Editor />
      </div>
    </Grid>
  );
}
