import { FormProvider, useForm } from "react-hook-form";
import { Grid } from "@rhinobase/storybook/components";
import { PasswordField, FieldControl, IFieldControl } from "@rhinobase/ui";

export default {
  title: "New/PasswordField",
  component: PasswordField,
};

export function Default() {
  const form = useForm();

  const control: IFieldControl = { name: "name" };
  return (
    <Grid>
      <FormProvider {...form}>
        <FieldControl {...control}>
          <PasswordField name="password" />
        </FieldControl>
      </FormProvider>
    </Grid>
  );
}
