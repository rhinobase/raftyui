import React from "react";
import { classNames } from "@rhinobase/lib";
import { FieldProvider, IFieldControl } from "./context";

export function FieldControl({
  children,
  orientation = "col",
  ...props
}: IFieldControl & { children: React.ReactNode }) {
  return (
    <FieldProvider value={{ ...props, orientation }}>
      <div
        className={classNames(
          orientation == "col" && "flex-col gap-1",
          orientation == "row" && "flex-row items-center gap-2",
          orientation == "row-reverse" && "flex-row-reverse items-center gap-2",
          "flex w-full"
        )}>
        {children}
      </div>
    </FieldProvider>
  );
}
