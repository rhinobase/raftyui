import { ReactNode, forwardRef } from 'react';
import { classNames } from '@rhino/utils';
import {
  FieldControlContext,
  FieldControlProvider,
  useFieldControlContext,
} from './context';

// Field Control Component
export type FieldControl = Partial<FieldControlContext> & {
  name: FieldControlContext['name'];
} & JSX.IntrinsicElements['div'];

export const FieldControl = forwardRef<HTMLDivElement, FieldControl>(
  (
    {
      name,
      orientation = 'col',
      isRequired = false,
      isDisabled = false,
      isReadOnly = false,
      isInvalid = false,
      isLoading = false,
      children,
      className,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <FieldControlProvider
        value={{
          name,
          orientation,
          isRequired,
          isDisabled,
          isReadOnly,
          isInvalid,
          isLoading,
        }}
      >
        <div
          {...props}
          className={classNames(
            orientation === 'col' && 'flex-col gap-1',
            orientation === 'row' && 'flex-row items-center gap-2',
            orientation === 'row-reverse' &&
              'flex-row-reverse items-center gap-2',
            'flex w-full',
            className
          )}
          ref={forwardedRef}
        >
          {children}
        </div>
      </FieldControlProvider>
    );
  }
);

FieldControl.displayName = 'FieldControl';

// Field Label Component
export type FieldLabel = JSX.IntrinsicElements['label'];
export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabel>(
  ({ children, className, ...props }, forwardedRef) => {
    const { name, isRequired } = useFieldControlContext();

    return (
      <label
        {...props}
        htmlFor={name}
        className={classNames(
          'text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium',
          className
        )}
        ref={forwardedRef}
      >
        {children}
        {isRequired && (
          <span className="text-error-500 dark:error-red-400">*</span>
        )}
      </label>
    );
  }
);
FieldLabel.displayName = 'FieldLabel';

// Error Message Component
export function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <p className="my-0.5 text-sm text-red-600 dark:text-red-400">{children}</p>
  );
}
