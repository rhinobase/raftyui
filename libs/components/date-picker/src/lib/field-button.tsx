import { useRef } from "react";
import { useButton, AriaButtonProps } from "react-aria";
import { Button } from "@rhino/button";

export function CalendarButton(props: AriaButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <Button {...buttonProps} ref={ref}>
      {props.children}
    </Button>
  );
}

export function FieldButton({
  children,
  variant = "solid",
  ...props
}: AriaButtonProps & {
  variant?: "solid" | "outline" | "ghost";
}) {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  return (
    <Button {...buttonProps} ref={ref} variant={variant} isActive={isPressed}>
      {children}
    </Button>
  );
}
