"use client";
import { eventHandler } from "@rafty/shared";
import { List, ListItem, buttonClasses, classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import {
  ElementType,
  Fragment,
  HTMLAttributes,
  forwardRef,
  useId,
} from "react";
import {
  BreadcrumbsContext,
  BreadcrumbsProvider,
  useBreadcrumbsContext,
} from "./context";

const breadcrumbClasses = cva("flex items-center", {
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

const breadcrumbItemClasses = cva("rounded font-medium leading-tight", {
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

const dividerClasses = cva(
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

type ItemType = {
  label: string;
  href?: string;
};

export type Breadcrumbs = Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "onClick"
> & {
  as?: ElementType;
  items: ItemType[];
  onClick?: (value: string) => void;
  children?: (props: ItemType & { isLastElement?: boolean }) => JSX.Element;
} & Partial<BreadcrumbsContext>;

export const Breadcrumbs = forwardRef<HTMLElement, Breadcrumbs>(
  (
    {
      as = "a",
      items,
      size = "md",
      separator = "/",
      onClick,
      children: Children,
      ...props
    },
    forwardedRef,
  ) => {
    const key = useId();

    const handleSelect = (label: string) =>
      eventHandler(() => onClick?.(label));

    const components = items
      .flatMap(({ label, href }, index) => {
        // Is this the last element
        const isLastElement = index === items.length - 1;

        let BreadcrumbItem = as;
        if (!href) BreadcrumbItem = "span";

        const uniqueKey = `${index}-${key}`;

        return [
          <Fragment key={uniqueKey}>
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
                    breadcrumbItemClasses({ size }),
                  )}
                  onClick={handleSelect(label)}
                  onKeyDown={handleSelect(label)}
                >
                  {label}
                </BreadcrumbItem>
              </ListItem>
            )}
          </Fragment>,
          <Divider key={`divider-${uniqueKey}`} />,
        ];
      })
      .slice(0, -1);

    return (
      <BreadcrumbsProvider value={{ size, separator }}>
        <nav {...props} ref={forwardedRef}>
          <List className={breadcrumbClasses({ size })}>{components}</List>
        </nav>
      </BreadcrumbsProvider>
    );
  },
);
Breadcrumbs.displayName = "Breadcrumbs";

function Divider() {
  const { separator, size } = useBreadcrumbsContext();
  return <ListItem className={dividerClasses({ size })}>{separator}</ListItem>;
}
