import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { Textarea } from "./Textarea";
import { FieldControl } from "../field";

const config = {
  title: "Forms/Textarea",
  component: Textarea,
};
export default config;

export function Default() {
  return (
    <Grid>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Textarea</h4>
        <FieldControl name="">
          <Textarea placeholder="abc" />
        </FieldControl>

        <h4>Textarea Invalid</h4>
        <FieldControl name="" invalid>
          <Textarea placeholder="abc" />
        </FieldControl>
      </div>
    </Grid>
  );
}
