import React, { ReactNode } from "react";

export function ErrorMessage(props: {
  children: JSX.Element | string | ReactNode;
}) {
  return (
    <p className="my-0.5 text-sm text-red-600 dark:text-red-400">
      {props.children}
    </p>
  );
}
