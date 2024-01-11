import { classNames } from "@rafty/ui";
import type { HTMLAttributes, PropsWithChildren } from "react";
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
} & UseFormProps<TFieldValues, TContext> &
  Pick<HTMLAttributes<HTMLFormElement>, "className" | "style">;

export function Form({
  onSubmit,
  onError,
  children,
  className,
  style,
  ...props
}: PropsWithChildren<Form>) {
  // Adding provider for forms
  const methods = useForm(props);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, onError)}
        className={classNames("space-y-3", className)}
        style={style}
      >
        {children}
      </form>
    </FormProvider>
  );
}
