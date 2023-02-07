import { Grid } from "@rhinobase/docs/components";
import { Button } from "../button";
import { Card, CardBody, CardFooter, CardHeader } from "./Card";
import React from "react";

export default {
  title: "New/Card",
  component: Card,
};

export function Default() {
  return (
    <Grid>
      <Card>
        <CardHeader>Customer dashboard</CardHeader>
        <CardBody>
          View a summary of all your customers over the last month.
        </CardBody>
        <CardFooter>
          <div className="flex-1" />
          <Button
            variant="ghost"
            className="border border-zinc-300 dark:border-zinc-700"
          >
            View here
          </Button>
        </CardFooter>
      </Card>
    </Grid>
  );
}
