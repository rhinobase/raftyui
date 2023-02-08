import React from "react";
import { classNames } from "@rhinobase/utils";
import { FieldProvider } from "./context";
export interface FieldControl {
  name: string;
  orientation?: "row" | "col" | "row-reverse";
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  invalid?: boolean;
  isDev?: boolean;
  loading?: boolean;
}

export function FieldControl({
  children,
  orientation = "col",
  ...props
}: FieldControl & { children: React.ReactNode }) {
  return (
    <FieldProvider value={{ ...props, orientation }}>
      <div
        className={classNames(
          orientation == "col" && "flex-col gap-1",
          orientation == "row" && "flex-row items-center gap-2",
          orientation == "row-reverse" && "flex-row-reverse items-center gap-2",
          "flex w-full"
        )}
      >
        {children}
      </div>
    </FieldProvider>
  );
}
