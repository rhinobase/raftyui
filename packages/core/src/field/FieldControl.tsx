import { forwardRef } from "react";
import { FieldControlContext, FieldControlProvider } from "./context";
import { classNames } from "../utils";

export type FieldControl = Partial<FieldControlContext> & {
  name: FieldControlContext["name"];
} & JSX.IntrinsicElements["div"];

export const FieldControl = forwardRef<HTMLDivElement, FieldControl>(
  (
    {
      name,
      orientation = "col",
      required = false,
      disabled = false,
      readOnly = false,
      hidden = false,
      invalid = false,
      loading = false,
      children,
      className,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <FieldControlProvider
        value={{
          name,
          orientation,
          required,
          disabled,
          readOnly,
          hidden,
          invalid,
          loading,
        }}
      >
        <div
          {...props}
          className={classNames(
            orientation == "col" && "flex-col gap-1",
            orientation == "row" && "flex-row items-center gap-2",
            orientation == "row-reverse" &&
              "flex-row-reverse items-center gap-2",
            "flex w-full",
            className
          )}
          ref={forwardedRef}
        >
          {children}
        </div>
      </FieldControlProvider>
    );
  }
);

FieldControl.displayName = "FieldControl";
