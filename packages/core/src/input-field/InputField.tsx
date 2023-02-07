import { forwardRef } from "react";
import { classNames } from "@rhinobase/lib";

// InputField Component (With ErrorMessage)
export const InputField = forwardRef<HTMLInputElement, JSX.IntrinsicElements["input"]>(
  ({ defaultValue, className, ...props }, forwardedRef) => {
    return (
      <>
        <input
          {...props}
          className={classNames(
            "px-lg py-base dark:text-secondary-200 block w-full appearance-none rounded-md border bg-transparent shadow-sm autofill:bg-transparent dark:border-zinc-700",
            "focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-500/30 dark:focus:border-primary-400 focus:outline-none focus:ring-2",
            "read-only:focus:ring-0",
            "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
            className
          )}
          ref={forwardedRef}
        />
      </>
    );
  }
);
// export const InputField = forwardRef<HTMLInputElement, JSX.IntrinsicElements["input"]>(
//   ({ defaultValue, className, ...props }, forwardedRef) => {
//     const { name, required, disabled, readOnly, loading, invalid, hidden } = useFieldControl();

//     const { control } = useFormContext();
//     const {
//       field,
//       formState: { errors },
//     } = useController({
//       name: props.name && props.name != "" ? props.name : name,
//       control,
//       defaultValue,
//     });

//     return (
//       <>
//         <input
//           {...field}
//           {...props}
//           required={required}
//           disabled={disabled || loading}
//           readOnly={readOnly}
//           className={classNames(
//             invalid
//               ? "!border-error-500 dark:border-error-400"
//               : "border-secondary-300 dark:border-secondary-700",
//             "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
//             "focus:read-only:border-secondary-300 dark:focus:read-only:border-secondary-700 focus:read-only:ring-0",
//             loading && "cursor-progress",
//             "focus:ring-primary-100 border-secondary-300 px-lg py-base placeholder-secondary-400 dark:border-secondary-700 dark:text-secondary-200 dark:focus:ring-secondary-300 focus:border-primary-500 block w-full appearance-none rounded-md border bg-transparent shadow-sm autofill:bg-transparent focus:outline-none focus:ring-2",
//             hidden && "hidden",
//             className
//           )}
//           ref={forwardedRef}
//         />
//         <ErrorMessage
//           errors={errors}
//           name={name}
//           render={({ message }) => <p className="text-error-600 dark:text-error-400 text-sm">{message}</p>}
//         />
//       </>
//     );
//   }
// );
