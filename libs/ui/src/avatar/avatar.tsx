import React from "react";
import { classNames } from "@rafty/utils";
import { useAvatarGroupContext } from "./context";

export type Avatar = {
  name?: string | null;
  src?: string;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  size?: "sm" | "md" | "lg";
};

const avatarClasses = {
  size: {
    sm: "h-7 w-7 border",
    md: "h-9 w-9 border-2",
    lg: "h-12 w-12 border-[2.5px]",
  },
};

export function Avatar({ name, src, className, style, size = "md" }: Avatar) {
  const context = useAvatarGroupContext() ?? {
    size: size,
  };

  const avatarSize = context.size;

  return (
    <div
      className={classNames(
        avatarClasses.size[avatarSize],
        "relative overflow-hidden border-white dark:border-secondary-900 rounded-full group-data-[group=true]:absolute",
        className
      )}
      style={style}
    >
      {name && src ? (
        <img alt={name} src={src} className="object-cover w-full h-full" />
      ) : name ? (
        <img
          alt={name}
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            name
          )}`}
          className="object-cover w-full h-full"
        />
      ) : (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </div>
  );
}
