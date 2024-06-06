"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
import { useAvatarGroupContext } from "../avatar-group/context";
import { type SizeType, classNames } from "../utils";

export const avatarClasses = cva(
  "dark:border-secondary-900 relative overflow-hidden rounded-full border-white group-data-[group=true]:absolute",
  {
    variants: {
      size: {
        sm: "size-7 border",
        md: "size-9 border-2",
        lg: "size-12 border-[2.5px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type Avatar = {
  name?: string | null;
  src?: string;
  size?: SizeType;
  isUnstyled?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Avatar = forwardRef<HTMLDivElement, Avatar>(function Avatar(
  { name, src, size = "md", className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const context = useAvatarGroupContext() ?? {
    size,
    isUnstyled,
  };

  return (
    <div
      {...props}
      className={
        context.isUnstyled
          ? className
          : classNames(avatarClasses({ size: context.size }), className)
      }
      ref={forwardedRef}
    >
      {name && src ? (
        <img alt={name} src={src} className="size-full object-cover" />
      ) : name ? (
        <img
          alt={name}
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            name,
          )}`}
          className="size-full object-cover"
        />
      ) : (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <title>avatar</title>
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </div>
  );
});
