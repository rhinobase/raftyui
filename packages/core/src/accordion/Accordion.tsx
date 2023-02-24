import * as DisclosurePrimitive from "@radix-ui/react-accordion";
import { ComponentProps, forwardRef } from "react";
import React from "react";
import { classNames } from "@rhinobase/utils";
import {
  AccordionContext,
  AccordionProvider,
  useAccordionContext,
} from "./context";

//AccordionComponent

type Root = AccordionContext &
  ComponentProps<(typeof DisclosurePrimitive)["Root"]>;
export const Root = forwardRef<HTMLDivElement, Root>(
  ({ children, className, size = "md", ...props }, forwardedRef) => (
    <AccordionProvider value={{ size }}>
      <DisclosurePrimitive.Root
        {...props}
        ref={forwardedRef}
        className={classNames("w-full", className)}
      >
        {children}
      </DisclosurePrimitive.Root>
    </AccordionProvider>
  ),
);

Root.displayName = "Accordian.Root";

//AccordionItemComponent

type Item = ComponentProps<(typeof DisclosurePrimitive)["Item"]>;
export const Item = forwardRef<HTMLDivElement, Item>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <DisclosurePrimitive.Item
        {...props}
        className={classNames("w-full", className)}
        ref={forwardedRef}
      >
        {children}
      </DisclosurePrimitive.Item>
    );
  },
);

Item.displayName = "Accordian.Item";

//AccordionTriggerComponent
type Trigger = AccordionContext &
  ComponentProps<(typeof DisclosurePrimitive)["Trigger"]> & {
    openIcon?: JSX.Element;
    closeIcon?: JSX.Element;
  };
export const Trigger = React.forwardRef<HTMLButtonElement, Trigger>(
  (
    { children, className, openIcon: OpenIcon, closeIcon: CloseIcon, ...props },
    forwardedRef,
  ) => {
    const { size } = useAccordionContext();
    return (
      <DisclosurePrimitive.Header>
        <DisclosurePrimitive.Trigger
          className={classNames(
            size == "sm" && "px-3 py-1 text-sm",
            size == "md" && "px-3 py-2",
            size == "lg" && "px-3 py-3 text-lg",
            "text-secondary-700 hover:bg-secondary-50/80 dark:text-secondary-300 dark:hover:bg-secondary-800/20 group flex w-full items-center justify-between font-semibold transition-all",
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <>
            {OpenIcon && (
              <span className="hidden stroke-1 group-data-[state=open]:block">
                {OpenIcon}
              </span>
            )}
            {CloseIcon && (
              <span className="stroke-1 group-data-[state=close]:block group-data-[state=open]:hidden">
                {CloseIcon}
              </span>
            )}
            {!OpenIcon && !CloseIcon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 transform stroke-2 duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </>
        </DisclosurePrimitive.Trigger>
      </DisclosurePrimitive.Header>
    );
  },
);

Trigger.displayName = "Accordian.Trigger";

//AccordionContentComponent

type Content = ComponentProps<(typeof DisclosurePrimitive)["Content"]>;
export const Content = forwardRef<HTMLDivElement, Content>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useAccordionContext();
    return (
      <DisclosurePrimitive.Content
        className={classNames(
          size == "sm" && "px-3 pb-3 pt-1 text-sm",
          size == "md" && "px-3 pt-2 pb-4",
          size == "lg" && "px-3 pt-2 pb-4",
          "dark:text-secondary-100 w-full",
          className,
        )}
        {...props}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </DisclosurePrimitive.Content>
    );
  },
);

Content.displayName = "Accordian.Content";
