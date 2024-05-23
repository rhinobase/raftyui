"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
import { buttonClasses } from "../button";
import { List, ListItem } from "../list";
import { classNames } from "../utils";
import {
  type BreadcrumbsContext,
  BreadcrumbsProvider,
  useBreadcrumbsContext,
} from "./context";

const breadcrumbsClasses = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-1.5",
      lg: "gap-2",
    },
    defaultVariants: {
      size: "md",
    },
  },
});

export type Breadcrumbs = HTMLAttributes<HTMLElement> &
  Partial<BreadcrumbsContext>;

export const Breadcrumbs = forwardRef<HTMLElement, Breadcrumbs>(
  ({ size = "md", children, ...props }, forwardedRef) => (
    <BreadcrumbsProvider value={{ size }}>
      <nav {...props} ref={forwardedRef}>
        <List className={breadcrumbsClasses({ size })}>{children}</List>
      </nav>
    </BreadcrumbsProvider>
  ),
);
Breadcrumbs.displayName = "Breadcrumbs";

export const breadcrumbsDividerClasses = cva(
  "select-none font-medium opacity-50 dark:opacity-40",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type BreadcrumbDivider = HTMLAttributes<HTMLLIElement>;

export const BreadcrumbDivider = forwardRef<HTMLLIElement, BreadcrumbDivider>(
  ({ children = "/", className, ...props }, forwardedRef) => {
    const { size } = useBreadcrumbsContext();
    return (
      <ListItem
        {...props}
        className={classNames(breadcrumbsDividerClasses({ size }), className)}
        ref={forwardedRef}
      >
        {children}
      </ListItem>
    );
  },
);
BreadcrumbDivider.displayName = "BreadcrumbDivider";

export const breadcrumbsItemClasses = cva("rounded font-medium leading-tight", {
  variants: {
    size: {
      sm: "px-1.5 py-0.5",
      md: "py-1 px-2",
      lg: "py-1.5 px-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type BreadcrumbItem = HTMLAttributes<HTMLLIElement> & {
  isUnstyled?: boolean;
  isActive?: boolean;
};

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItem>(
  ({ className, isUnstyled, isActive, ...props }, forwardedRef) => {
    const { size } = useBreadcrumbsContext();

    return (
      <ListItem
        {...props}
        className={
          isUnstyled
            ? className
            : classNames(
                buttonClasses({
                  variant: "ghost",
                  size,
                  active: isActive,
                  colorScheme: isActive ? "primary" : "secondary",
                }),
                breadcrumbsItemClasses({ size }),
                className,
              )
        }
        ref={forwardedRef}
      />
    );
  },
);
BreadcrumbItem.displayName = "BreadcrumbItem";
