import { Thread, ThreadType, createThread, useThread } from "@fibr/react";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormProps,
  useForm,
} from "react-hook-form";

export type Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
> = {
  onSubmit: SubmitHandler<FieldValues>;
  onError?: SubmitErrorHandler<FieldValues>;
} & UseFormProps<TFieldValues, TContext> & {
    components?: Record<string, ThreadType>;
  };

export function Form() {
  // Getting component config
  const config = useThread<Form>();
  const { components = {}, onSubmit, onError, ...props } = config;

  // Adding provider for forms
  const methods = useForm(props);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, onError)}
        className="space-y-3"
      >
        {Object.entries(components).map(([id, field]) => (
          <Thread key={id} {...field} />
        ))}
      </form>
    </FormProvider>
  );
}

export const form = createThread<Form>("form");
