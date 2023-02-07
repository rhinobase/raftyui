import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";
import { Control, useController, useFormContext } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useBoolean } from "@rhinobase/lib/hooks/useBoolean";
import { Button, useFieldControl } from "@rhinobase/ui";

// PasswordField Component
export const PasswordField = forwardRef<HTMLInputElement, JSX.IntrinsicElements["input"]>(
  ({ ...props }, forwardedRef) => {
    const { name, required, disabled, readOnly, loading } = useFieldControl();
    const { control } = useFormContext();
    const {
      field,
      formState: { errors },
    } = useController({ name: props.name && props.name != "" ? props.name : name, control });
    const [showPassword, { toggle }] = useBoolean();

    return (
      <>
        <div className="relative flex w-full items-center">
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="password"
            {...field}
            {...props}
            required={required}
            readOnly={readOnly}
            disabled={disabled || loading}
            className="focus:border-primary-500 focus:ring-primary-500 block w-full appearance-none rounded-md border border-secondary-300 bg-transparent px-md py-base placeholder-secondary-400 shadow-sm focus:outline-none focus:ring-2 dark:border-secondary-700 dark:text-secondary-200 dark:focus:ring-secondary-300"
            ref={forwardedRef}
          />
          <Button
            size="sm"
            aria-label="show and hide password"
            variant="ghost"
            className="absolute right-1 m-1 !px-base"
            onClick={toggle}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </div>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p className="text-sm text-error-600 dark:text-error-400">{message}</p>}
        />
      </>
    );
  }
);
