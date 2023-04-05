import { Grid } from "@rhinobase/docs/components";
import { Skeleton } from "./Skeleton";
import React from "react";

const config = {
  title: "New/Skeleton",
  component: Skeleton,
};
export default config;

export function Default() {
  return (
    <Grid>
      <Skeleton className="h-10 w-40">Skeleton</Skeleton>
    </Grid>
  );
}
