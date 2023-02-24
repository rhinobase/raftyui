import { Grid } from "@rhinobase/docs/components";
import { FieldControl } from "./FieldControl";
import { FieldGroup } from "./FieldGroup";
import { FieldLabel } from "./FieldLabel";
import { Switch } from "../switch";
import { InputField } from "../input-field";
import { Checkbox } from "../checkbox";
import React from "react";

const config = {
  title: "Forms/Field Control",
  component: FieldControl,
  argTypes: {
    orientation: { control: "select" },
  },
};

export default config;

export function Default(args: FieldControl) {
  return (
    <Grid>
      <FieldControl {...args}>
        <FieldLabel>String Field</FieldLabel>
        <FieldGroup
          prefixIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          prefix="INR"
          suffix="asd"
          suffixIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        >
          <InputField />
        </FieldGroup>
      </FieldControl>
      <FieldControl {...args}>
        <FieldLabel>Switch field</FieldLabel>
        <Switch />
      </FieldControl>
      <FieldControl {...args}>
        <FieldLabel>Checkbox Field</FieldLabel>
        <Checkbox name="checkbox" />
      </FieldControl>
    </Grid>
  );
}

Default.args = {
  name: "label",
  type: "string",
};

export function InvaildField(args: FieldControl) {
  return (
    <Grid>
      <FieldControl {...args} name="email">
        <FieldLabel>EMAIL</FieldLabel>
        <FieldGroup>
          <InputField />
        </FieldGroup>
      </FieldControl>
    </Grid>
  );
}
