import { Grid } from "@rhinobase/docs/components";
import { Button } from "../button";
import { Alert, IAlert } from "./Alert";
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
export function Default(args: IAlert) {
  return (
    <Grid>
      <div className="space-y-2">
        <Alert {...args} status="error" />
        <Alert {...args} status="info" />
        <Alert {...args} status="success" />
        <Alert {...args} status="warning" />
      </div>
    </Grid>
  );
}

Default.args = {
  status: "success",
  title: "Success Banner",
  message: "Data uploaded to the server. Fire on!",
};

export function WithAction(args: IAlert) {
  return (
    <Grid>
      <div className="space-y-2">
        <Alert {...args} status="error" />
        <Alert {...args} status="info" />
        <Alert {...args} status="success" />
        <Alert {...args} status="warning" />
      </div>
    </Grid>
  );
}

WithAction.args = {
  status: "success",
  title: "Success Banner",
  message: "Data uploaded to the server. Fire on!",
  action: <Button variant="ghost">Get Started</Button>,
};
