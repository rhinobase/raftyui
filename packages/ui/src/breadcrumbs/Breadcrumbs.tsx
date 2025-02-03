"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
import { buttonClasses } from "../button/index.js";
import { List, ListItem } from "../list/index.js";
import { classNames } from "../utils/index.js";
import {
  type BreadcrumbsContext,
  BreadcrumbsProvider,
  useBreadcrumbsContext,
} from "./context.js";

export const breadcrumbsClasses = cva("flex items-center", {
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
  function Breadcrumbs({ size = "md", children, ...props }, forwardedRef) {
    return (
      <BreadcrumbsProvider value={{ size }}>
        <nav {...props} ref={forwardedRef}>
          <List className={breadcrumbsClasses({ size })}>{children}</List>
        </nav>
      </BreadcrumbsProvider>
    );
  },
);

export const breadcrumbsDividerClasses = cva(
  "select-none font-medium text-secondary-400 dark:text-secondary-600",
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
  function BreadcrumbDivider(
    { children = "/", className, ...props },
    forwardedRef,
  ) {
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

export const breadcrumbsItemClasses = cva("rounded font-medium leading-tight", {
  variants: {
    size: {
      sm: "px-1.5 py-0.5",
      md: "py-1 px-2",
      lg: "py-1.5 px-2.5",
    },
    active: {
      true: "text-primary-500 dark:text-primary-300",
      false: "text-black dark:text-white",
    },
  },
  defaultVariants: {
    size: "md",
    active: false,
  },
});

export type BreadcrumbItem = HTMLAttributes<HTMLLIElement> & {
  isUnstyled?: boolean;
  isActive?: boolean;
};

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItem>(
  function BreadcrumbItem(
    { className, isUnstyled, isActive, ...props },
    forwardedRef,
  ) {
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
                breadcrumbsItemClasses({ size, active: isActive }),
                className,
              )
        }
        ref={forwardedRef}
      />
    );
  },
);
