import { useRef } from "react";
import { useButton, AriaButtonProps } from "react-aria";
import { Button } from "@rhino/button";

export type CalendarButton = AriaButtonProps & Button;

export function CalendarButton({
  children,
  variant,
  isActive,
  ...props
}: CalendarButton) {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <Button
      {...buttonProps}
      variant={variant}
      isActive={isActive}
      size="sm"
      className="!p-1"
      ref={ref}
    >
      {children}
    </Button>
  );
}
