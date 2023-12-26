import { List, ListItem, classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { Children, HTMLAttributes, ReactNode, forwardRef } from "react";

export const breadcrumbsClass = cva("", {
  variants: {
    size: {
      sm: "p-2 text-sm",
      md: "p-2.5",
      lg: "p-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type Breadcrumbs = HTMLAttributes<HTMLElement> & {
  seperator?: ReactNode;
  size?: "sm" | "md" | "lg";
};

export const Breadcrumbs = forwardRef<HTMLElement, Breadcrumbs>(
  (
    { seperator = "/", children, size = "md", className, ...props },
    forwardedRef,
  ) => {
    return (
      <nav
        ref={forwardedRef}
        {...props}
        className={classNames(breadcrumbsClass({ size }), className)}
      >
        <List className="flex gap-2">
          {Children.toArray(children).map((child, index, arr) => {
            const isLast = index === arr.length - 1;

            return (
              <ListItem
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className={classNames(
                  isLast && "text-blue-500",
                  "flex items-center gap-1",
                )}
              >
                <span
                  className={classNames(
                    isLast
                      ? "cursor-text px-1"
                      : "hover:bg-secondary-300 rounded-md",
                  )}
                >
                  {child}
                </span>
                {!isLast && <span>{seperator}</span>}
              </ListItem>
            );
          })}
        </List>
      </nav>
    );
  },
);
Breadcrumbs.displayName = "Breadcrumbs";
