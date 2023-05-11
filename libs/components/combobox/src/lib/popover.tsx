import type { OverlayTriggerState } from 'react-stately';
import type { AriaPopoverProps } from '@react-aria/overlays';
import React from 'react';
import { usePopover, DismissButton } from '@react-aria/overlays';
import { classNames } from '@rhino/utils';

export type Popover = {
  children: React.ReactNode;
  state: OverlayTriggerState;
  className?: string;
  popoverRef?: React.RefObject<HTMLDivElement>;
} & Omit<AriaPopoverProps, 'popoverRef'>;

export function Popover(props: Popover) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { popoverRef = ref, state, children, className, isNonModal } = props;

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state
  );

  return (
    <>
      {!isNonModal && <div {...underlayProps} className="fixed top-0 left-0" />}
      <div
        {...popoverProps}
        ref={popoverRef}
        className={classNames(
          'z-10 shadow-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 dark:text-secondary-100 rounded-md mt-2 !left-0',
          className
        )}
      >
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </>
  );
}