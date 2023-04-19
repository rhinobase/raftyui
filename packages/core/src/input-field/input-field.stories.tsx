import { Grid } from "@rhinobase/docs/components";
import { InputField } from "./InputField";
import React from "react";
import { FieldControl } from "../field";

const config = {
  title: "Forms/Input Field",
  component: InputField,
};
export default config;

export function Default() {
  return (
    <Grid>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Input Field</h4>
        <FieldControl name="ss">
          <InputField placeholder="Enter Text" />
        </FieldControl>

        <h4>Input Field isDisabled</h4>

        <FieldControl name="ss" disabled>
          <InputField placeholder="Enter Text" />
        </FieldControl>

        <h4>Input Field isReadOnly</h4>

        <FieldControl name="ss" readOnly>
          <InputField placeholder="Enter Text" readOnly />
        </FieldControl>

        <h4>Input Field isInvalid</h4>
        <FieldControl name="ss" invalid>
          <InputField placeholder="Enter Text" />
        </FieldControl>
      </div>
    </Grid>
  );
}
