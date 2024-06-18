import { classNames } from "@rafty/ui";
import type { HTMLAttributes, PropsWithChildren } from "react";

export function CodeContainer({
  children,
  className,
}: PropsWithChildren<Pick<HTMLAttributes<HTMLDivElement>, "className">>) {
  return (
    <div className={classNames("my-2 rounded-lg", className)}>{children}</div>
  );
}
