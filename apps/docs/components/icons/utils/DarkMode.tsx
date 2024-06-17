import { classNames } from "@rafty/ui";

export function DarkMode({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"g">) {
  return (
    <g className={classNames("hidden dark:inline", className)} {...props} />
  );
}
