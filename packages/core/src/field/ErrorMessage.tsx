import React from "react";

export default function ErrorMessage(props: { children: JSX.Element }) {
  return (
    <p className="my-0.5 text-sm text-red-600 dark:text-red-400">
      {props.children}
    </p>
  );
}
