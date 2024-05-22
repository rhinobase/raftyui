import { type HTMLAttributes, forwardRef } from "react";

// List Component
export type List = HTMLAttributes<HTMLUListElement>;

export const List = forwardRef<HTMLUListElement, List>(
  ({ className, ...props }, forwardedRef) => (
    <ul ref={forwardedRef} {...props} className={className}>
      {props.children}
    </ul>
  ),
);

List.displayName = "List";
