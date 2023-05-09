import { forwardRef, useRef } from "react";
import { Button } from "../button";
import { useFieldControlContext } from "../field";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { InputGroup, Suffix } from "../input-field";
import { useMemo, useState } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { mergeRefs } from "../utils/mergeRefs";
import { classNames } from "../utils";
import { inputFieldClasses } from "../input-field/InputField";

type InitialState = boolean | (() => boolean);

function useBoolean(initialState: InitialState = false) {
  const [value, setValue] = useState(initialState);
  const callbacks = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    []
  );
  return [value, callbacks] as const;
}

// PasswordField Component
export type PasswordField = Omit<AriaTextFieldProps, "size"> & {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "solid" | "ghost";
};
export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
  ({ className, size = "md", variant = "outline", ...props }, forwardedRef) => {
    const [showPassword, { toggle }] = useBoolean();
    const ref = useRef(null);
    const { inputProps } = useTextField(props, ref);
    const controls = useFieldControlContext() ?? {};

    return (
      <InputGroup>
        <input
          {...controls}
          {...inputProps}
          type={showPassword ? "text" : "password"}
          className={classNames(
            inputFieldClasses({
              size: size,
              variant,
              invalid: controls.isInvalid,
            }),
            className
          )}
          ref={mergeRefs(forwardedRef, ref)}
        />
        <Suffix>
          <Button
            size="icon"
            aria-label="show and hide password"
            variant="ghost"
            onPress={toggle}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-4 w-4 stroke-2" />
            ) : (
              <EyeIcon className="h-4 w-4 stroke-2" />
            )}
          </Button>
        </Suffix>
      </InputGroup>
    );
  }
);
PasswordField.displayName = "PasswordField";
