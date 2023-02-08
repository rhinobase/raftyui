import { HiCurrencyDollar, HiPlusCircle } from "react-icons/hi2";
import { Grid } from "@rhinobase/storybook/components";
import {
  FieldControl,
  FieldLabel,
  FieldGroup,
  Button,
  SwitchField,
  InputField,
  Checkbox,
} from "@rhinobase/ui";

export default {
  title: "Forms/Field Control",
  component: FieldControl,
  argTypes: {
    orientation: { control: "select" },
  },
};

export function Default(args: FieldControl) {
  const form = useForm();
  return (
    <Grid>
      <FormProvider {...form}>
        <FieldControl {...args}>
          <FieldLabel>String Field</FieldLabel>
          <FieldGroup
            prefixIcon={HiCurrencyDollar}
            prefix="INR"
            suffix="asd"
            suffixIcon={HiPlusCircle}
          >
            <InputField />
          </FieldGroup>
        </FieldControl>
        <FieldControl {...args}>
          <FieldLabel>Switch field</FieldLabel>
          <SwitchField />
        </FieldControl>
        <FieldControl {...args}>
          <FieldLabel>Checkbox Field</FieldLabel>
          <Checkbox name="checkbox" />
        </FieldControl>
      </FormProvider>
    </Grid>
  );
}

Default.args = {
  name: "label",
  type: "string",
};

export function InvaildField(args: IFieldControl) {
  const form = useForm({
    resolver: zodResolver(z.object({ email: z.string().email() })),
  });
  return (
    <Grid>
      <form onSubmit={form.handleSubmit((values) => console.log(values))}>
        <FormProvider {...form}>
          <FieldControl {...args} name="email">
            <FieldLabel>EMAIL</FieldLabel>
            <FieldGroup>
              <InputField />
            </FieldGroup>
          </FieldControl>
        </FormProvider>
        <Button className="mt-1" type="submit">
          Submit
        </Button>
        <DevTool control={form.control} />
      </form>
    </Grid>
  );
}
