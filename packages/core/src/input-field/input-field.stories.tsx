import { FormProvider, useForm } from "react-hook-form";
import { Grid } from "@rhinobase/storybook/components";
import { InputField, FieldControl, IFieldControl } from "@rhinobase/ui";

export default {
  title: "New/InputField",
  component: InputField,
};

export function Default() {
  const form = useForm();

  const control: IFieldControl = { name: "name" };
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

        <InputField placeholder="Enter Text" />

        <h4>Input Field isRequired</h4>

        <InputField placeholder="Enter Text" />
      </div>
    </Grid>
  );
}
