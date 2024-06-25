import { type HTMLAttributes, forwardRef } from "react";

export type List = HTMLAttributes<HTMLUListElement>;

export const List = forwardRef<HTMLUListElement, List>(function List(
  { className, ...props },
  forwardedRef,
) {
  return (
    <ul ref={forwardedRef} {...props} className={className}>
      {props.children}
    </ul>
  );
});
