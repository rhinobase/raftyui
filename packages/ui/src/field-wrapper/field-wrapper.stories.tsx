import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import type { PropsWithChildren } from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import z from "zod";
import { InputField } from "../input-field";
import { Switch } from "../switch";
import { FieldWrapper } from "./FieldWrapper";

const meta: Meta<FieldWrapper> = {
  title: "Corp / FieldWrapper",
  component: FieldWrapper,
  decorators: [
    (Story) => (
      <FormWrapper>
        <Story />
      </FormWrapper>
    ),
  ],
};

export default meta;
type Story = StoryObj<FieldWrapper>;

export const FlexColumn: Story = {
  render: () => {
    const { register } = useFormContext();

    return (
      <FieldWrapper
        name="name"
        label="Label"
        description="this is a sample description"
      >
        <InputField id="name" {...register("name")} />
      </FieldWrapper>
    );
  },
};

export const FlexRow: Story = {
  render: () => {
    const { register } = useFormContext();

    return (
      <FieldWrapper
        name="name"
        label="Label"
        description="this is a sample description"
        orientation="row"
        className="justify-between"
      >
        <InputField id="name" className="max-w-md" {...register("name")} />
      </FieldWrapper>
    );
  },
};

export const FlexRowReverse: Story = {
  render: () => {
    const { control } = useFormContext();

    return (
      <FieldWrapper
        name="valid"
        label="Label"
        description="this is a sample description"
        orientation="row-reverse"
      >
        <Controller
          name="valid"
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <Switch
              id={name}
              size="sm"
              checked={value}
              onCheckedChange={onChange}
              isDisabled={disabled}
              ref={ref}
            />
          )}
        />
      </FieldWrapper>
    );
  },
};

const schema = z.object({
  name: z.string().max(20).optional(),
  valid: z.boolean().optional(),
});

function FormWrapper(props: PropsWithChildren) {
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <form className="w-full">{props.children}</form>
    </FormProvider>
  );
}
