import { List, ListItem, buttonClasses, classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import {
  ElementType,
  Fragment,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from "react";

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

const breadcrumbItemClasses = cva("!rounded-base", {
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

const dividerClasses = cva(
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

type ItemType = {
  label: string;
  href?: string;
};

export type Breadcrumbs = Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "onClick"
> & {
  as?: ElementType;
  seperator?: ReactNode;
  size?: "sm" | "md" | "lg";
  items: ItemType[];
  onClick?: (value: string) => void;
  children?: (props: ItemType & { isLastElement?: boolean }) => JSX.Element;
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
    const key = useId();

    const handleClick = (e: KeyboardEvent, label: string) => {
      if (e.type === "click" || (e.type === "keydown" && e.key === "Enter"))
        onClick?.(label);
    };

    const components = items
      .flatMap(({ label, href }, index) => {
        // Is this the last element
        const isLastElement = index === items.length - 1;

        let BreadcrumbItem = as;
        if (!href) BreadcrumbItem = "span";

        return [
          <Fragment key={`${key}-${index}`}>
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
                  onClick={(e: KeyboardEvent) => handleClick(e, label)}
                  onKeyDown={(e: KeyboardEvent) => handleClick(e, label)}
                >
                  {label}
                </BreadcrumbItem>
              </ListItem>
            )}
          </Fragment>,
          <Divider key={key + index} seperator={seperator} size={size} />,
        ];
      })
      .slice(0, -1);

    return (
      <nav ref={forwardedRef} {...props}>
        <List className={breadcrumbClasses({ size })}>{components}</List>
      </nav>
    );
  },
);

Breadcrumbs.displayName = "Breadcrumbs";

type Divider = Pick<Breadcrumbs, "size" | "seperator">;

function Divider({ size, seperator }: Divider) {
  return <ListItem className={dividerClasses({ size })}>{seperator}</ListItem>;
}
