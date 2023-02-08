import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { Switch } from "./Switch";

export default {
  title: "New/Switch",
  component: Switch,
};

export function Default() {
  return (
    <Grid>
      <div className="flex items-center gap-6 rounded-md border p-4 dark:border-zinc-700">
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </div>
    </Grid>
  );
}

export function Variant() {
  return (
    <Grid>
      <div className="grid w-[640px] grid-cols-2 items-center gap-6 rounded-md border p-4 dark:border-zinc-700">
        <div className="flex items-center justify-between">
          isChecked <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          Disabled <Switch defaultChecked disabled />
        </div>
      </div>
    </Grid>
  );
}
