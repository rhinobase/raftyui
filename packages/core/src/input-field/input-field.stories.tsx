import { Grid } from "@rhinobase/docs/components";
import { InputField } from "./InputField";
import React from "react";

export default {
  title: "New/InputField",
  component: InputField,
};

export function Default() {
  return (
    <Grid>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Input Field</h4>

        <InputField placeholder="Enter Text" />

        <h4>Input Field isDisabled</h4>

        <InputField placeholder="Enter Text" disabled />

        <h4>Input Field isReadOnly</h4>

        <InputField placeholder="Enter Text" readOnly />

        <h4>Input Field isInvalid</h4>

        <InputField placeholder="Enter Text" invalid />
      </div>
    </Grid>
  );
}
