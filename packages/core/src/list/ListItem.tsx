import { classNames } from "@rhinobase/utils";
import React from "react";

export const ListItem = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <li className={classNames(props.className)}>{props.children}</li>;
};
