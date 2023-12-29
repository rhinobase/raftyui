import { List, ListItem, buttonClasses, classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import {
  ElementType,
  Fragment,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

export const breadCrumbsClasses = cva("flex items-center", {
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

export const breadCrumbItemClasses = cva("!rounded-base", {
  variants: {
    size: {
      sm: "!px-1.5 !py-0.5",
      md: "!py-1 !px-2",
      lg: "!py-1.5 !px-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const dividerClasses = cva(
  "select-none font-semibold opacity-50 dark:opacity-40",
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

export type Breadcrumbs = Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "onClick"
> & {
  as?: ElementType;
  seperator?: ReactNode;
  size?: "sm" | "md" | "lg";
  items: { label: string; href?: string }[];
  onClick?: (value: string) => void;
  children?: (props: {
    label: string;
    href?: string;
    isLastElement?: boolean;
  }) => JSX.Element;
};

export const Breadcrumbs = forwardRef<HTMLElement, Breadcrumbs>(
  (
    {
      seperator = "/",
      as = "a",
      items,
      size = "md",
      onClick,
      children: Children,
      ...props
    },
    forwardedRef,
  ) => {
    const numOfLabels = items.length - 1;

    const divider = (
      <ListItem className={dividerClasses({ size })}>{seperator}</ListItem>
    );

    const components = items
      .flatMap(({ label, href }, index) => {
        // Is this the last element
        const isLastElement = index === numOfLabels;

        let BreadcrumbItem = as;
        if (!href) BreadcrumbItem = "span";

        return [
          <Fragment key={label}>
            {Children ? (
              <Children
                label={label}
                href={href}
                isLastElement={isLastElement}
              />
            ) : (
              <ListItem>
                <BreadcrumbItem
                  href={href}
                  className={classNames(
                    buttonClasses({
                      variant: "ghost",
                      size,
                      active: isLastElement,
                      colorScheme: isLastElement ? "primary" : "secondary",
                    }),
                    breadCrumbItemClasses({ size }),
                  )}
                  onClick={() => onClick?.(label)}
                  onKeyDown={() => onClick?.(label)}
                >
                  {label}
                </BreadcrumbItem>
              </ListItem>
            )}
          </Fragment>,
          divider,
        ];
      })
      .slice(0, -1);

    return (
      <nav ref={forwardedRef} {...props}>
        <List className={breadCrumbsClasses({ size })}>{...components}</List>
      </nav>
    );
  },
);

Breadcrumbs.displayName = "Breadcrumbs";
