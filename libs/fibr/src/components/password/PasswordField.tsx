import { ThreadWithNameType } from "@fibr/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { InputField } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { forwardRef, useState } from "react";
import { FieldWrapper } from "../FieldWrapper";
import { InputWrapper } from "../InputWrapper";

export const iconClasses = cva(
  "stroke-2 text-secondary-400 hover:text-secondary-800 pointer-events-auto cursor-pointer transition-all ease-in-out dark:text-secondary-500 dark:hover:text-secondary-100",
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

// export type PasswordField = Omit<InputField, "type"> &
//   Pick<InputWrapper, "prefixIcon" | "prefixText"> &
//   ThreadWithNameType;

// export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
//   ({ size = "md", prefixIcon, prefixText, ...props }, forwardedRef) => {
//     const [show, setShow] = useState(false);
//     const Icon = show ? EyeIcon : EyeSlashIcon;

//     return (
//       <FieldWrapper name={props.name} label={props.label}>
//         <InputWrapper
//           size={size}
//           prefixIcon={prefixIcon}
//           prefixText={prefixText}
//           suffixIcon={
//             <Icon
//               className={iconClasses({ size })}
//               onClick={() => setShow((prev) => !prev)}
//             />
//           }
//         >
//           <InputField
//             {...props}
//             type={show ? "text" : "password"}
//             ref={forwardedRef}
//           />
//         </InputWrapper>
//       </FieldWrapper>
//     );
//   },
// );
// PasswordField.displayName = "PasswordField";

export function PasswordField(props: ThreadWithNameType) {
  const [show, setShow] = useState(false);
  const Icon = show ? EyeIcon : EyeSlashIcon;

  return (
    <FieldWrapper name={props.name} label={props.label}>
      <InputWrapper
        size="md"
        suffixIcon={
          <Icon
            className={iconClasses({ size: "md" })}
            onClick={() => setShow((prev) => !prev)}
          />
        }
      >
        <InputField type={show ? "text" : "password"} />
      </InputWrapper>
    </FieldWrapper>
  );
}
