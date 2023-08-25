import { ReactNode } from "react";

// Error Message Component
export type ErrorMessage = {
  children: ReactNode;
};

export function ErrorMessage({ children }: ErrorMessage) {
  return (
    <p className="my-0.5 text-sm text-red-600 dark:text-red-400">{children}</p>
  );
}
