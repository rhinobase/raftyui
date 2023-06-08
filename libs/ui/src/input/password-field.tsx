import { forwardRef, useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { InputGroup, Suffix } from "./input-group";
import { InputField } from "./input-field";

// Password Field
export type PasswordField = InputField;

export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
  ({ className, size = "md", variant = "outline", ...props }, forwardedRef) => {
    const [showPassword, setShowPassword] = useState(false);

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
            onClick={() => setShowPassword((prev) => !prev)}
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
