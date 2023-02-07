import { IconBaseProps } from "react-icons/lib";
import { VscLoading } from "react-icons/vsc";
import { classNames } from "@rhinobase/utils";

// Spinner Component
export type ISpinner = {
  size?: "sm" | "md" | "lg";
  inheritParent?: boolean;
} & IconBaseProps;

export function Spinner({ size = "md", ...props }: ISpinner) {
  return (
    <VscLoading
      className={removeDuplicate(
        props.className,
        classNames(
          size == "sm" && "text-base",
          size == "md" && "text-2xl",
          size == "lg" && "text-4xl",
          !props.inheritParent && "text-secondary-700 dark:text-secondary-400",
          "animate-spin"
        )
      )}
      style={props.style}
    />
  );
}
