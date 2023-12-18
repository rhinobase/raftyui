"use client";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { useAvatarGroupContext } from "../avatar-group/context";
import { classNames } from "../utils";

export type Avatar = {
  name?: string | null;
  src?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  style?: HTMLAttributes<HTMLDivElement>["style"];
  size?: "sm" | "md" | "lg";
};

export const avatarClasses = cva(
  "dark:border-secondary-900 relative overflow-hidden rounded-full border-white group-data-[group=true]:absolute",
  {
    variants: {
      size: {
        sm: "h-7 w-7 border",
        md: "h-9 w-9 border-2",
        lg: "h-12 w-12 border-[2.5px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export function Avatar({ name, src, className, style, size = "md" }: Avatar) {
  const context = useAvatarGroupContext() ?? {
    size,
  };

  return (
    <div
      className={classNames(avatarClasses({ size: context.size }), className)}
      style={style}
    >
      {name && src ? (
        <img alt={name} src={src} className="h-full w-full object-cover" />
      ) : name ? (
        <img
          alt={name}
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            name,
          )}`}
          className="h-full w-full object-cover"
        />
      ) : (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <title>avatar</title>
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </div>
  );
}
Avatar.displayName = "Avatar";
