import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

export type ListItem = HTMLAttributes<HTMLLIElement>;

export const ListItem = forwardRef<HTMLLIElement, ListItem>(
  function ListItem(props, forwardedRef) {
    return <li {...props} ref={forwardedRef} />;
  },
);
