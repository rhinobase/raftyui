import { forwardRef, useMemo, useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { InputGroup, Suffix } from "./input-group";
import { InputField } from "./input-field";

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

// Password Field
export type PasswordField = InputField;

export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
  ({ className, size = "md", variant = "outline", ...props }, forwardedRef) => {
    const [showPassword, { toggle }] = useBoolean();

    return (
      <InputGroup>
        <InputField
          {...props}
          type={showPassword ? "text" : "password"}
          variant={variant}
          size={size}
          className={className}
          ref={forwardedRef}
        />
        <Suffix>
          <Button
            type="button"
            size="icon"
            aria-label="show and hide password"
            variant="ghost"
            onClick={toggle}
            className="!z-[2]"
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
