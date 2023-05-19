import { Grid } from "@rhinobase/docs/components";
import { Button } from "../button";
import * as Card from "./Card";
import React from "react";

const config = {
  title: "New/Card",
  component: Card,
};
export default config;

export function Default() {
  return (
    <Grid>
      <Card.Root>
        <Card.Header>Customer dashboard</Card.Header>
        <Card.Body>
          View a summary of all your customers over the last month.
        </Card.Body>
        <Card.Footer>
          <div className="flex-1" />
          <Button
            variant="ghost"
            className="border border-zinc-300 dark:border-zinc-700"
          >
            View here
          </Button>
        </Card.Footer>
      </Card.Root>
    </Grid>
  );
}
