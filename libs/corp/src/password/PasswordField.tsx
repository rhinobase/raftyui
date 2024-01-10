import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { InputField } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { forwardRef, useState } from "react";
import { InputWrapper } from "../InputWrapper";

export const iconClasses = cva(
  "stroke-2 text-secondary-400 hover:text-secondary-800 cursor-pointer transition-all ease-in-out dark:text-secondary-500 dark:hover:text-secondary-100",
  {
    variants: {
      size: {
        sm: "h-[18px] w-[18px] p-0.5",
        md: "h-6 w-6 p-1",
        lg: "h-[30px] w-[30px] p-1.5",
      },
    },
  },
);

export type PasswordField = Omit<InputField, "type"> &
  Pick<InputWrapper, "prefixIcon" | "prefixText">;

export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
  ({ size = "md", prefixIcon, prefixText, ...props }, forwardedRef) => {
    const [show, setShow] = useState(false);
    const Icon = show ? EyeIcon : EyeSlashIcon;

    return (
      <InputWrapper
        size={size}
        prefixIcon={prefixIcon}
        prefixText={prefixText}
        suffixIcon={
          <Icon
            className={iconClasses({ size })}
            onClick={() => setShow((prev) => !prev)}
          />
        }
      >
        <InputField
          {...props}
          type={show ? "text" : "password"}
          ref={forwardedRef}
        />
      </InputWrapper>
    );
  },
);
PasswordField.displayName = "PasswordField";
