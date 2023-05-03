import { Grid } from "@rhinobase/docs/components";
import { Button } from "../button";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "./Alert";
import React from "react";

const config = {
  title: "New/ Alert",
  component: Alert,
  argTypes: {
    status: { control: "select" },
    action: {
      table: {
        disable: true,
      },
    },
  },
};
export default config;
export function Default() {
  return (
    <Grid>
      <div className="space-y-2">
        <Alert size="md" status="error">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert size="md" status="info">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert size="md" status="success">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert size="md" status="warning">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      </div>
    </Grid>
  );
}
