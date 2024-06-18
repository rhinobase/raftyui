import type { ReactNode } from "react";

export type RadioGroupProps = {
  type: "radio";
  options: {
    value: string;
    label?: ReactNode;
    description?: string;
  }[];
  defaultValue?: string;
  orientaion?: "horizontal" | "vertical";
};
