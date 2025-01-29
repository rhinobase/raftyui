import { classNames } from "@rafty/ui";

export function LightMode({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"g">) {
  return <g className={classNames("dark:hidden", className)} {...props} />;
}
