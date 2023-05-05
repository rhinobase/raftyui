import { ReactNode } from "react";

export function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <p className="my-0.5 text-sm text-red-600 dark:text-red-400">{children}</p>
  );
}
