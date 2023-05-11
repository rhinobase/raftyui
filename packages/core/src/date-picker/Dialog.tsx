import { AriaDialogProps, useDialog } from "react-aria";
import React from "react";

interface DialogProps extends AriaDialogProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export function Dialog({ title, children, ...props }: DialogProps) {
  const ref = React.useRef(null);
  const { dialogProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  );
}
