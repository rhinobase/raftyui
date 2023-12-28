import { List, ListItem, classNames } from "@rafty/ui";
import { Fragment, HTMLAttributes, ReactNode, forwardRef } from "react";

export type Breadcrumbs = Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "onClick"
> & {
  seperator?: ReactNode;
  size?: "sm" | "md" | "lg";
  labels: string[];
  onClick?: (value: string) => void;
  children?: (props: { label: string; isLastElement?: boolean }) => JSX.Element;
};

export const Breadcrumbs = forwardRef<HTMLElement, Breadcrumbs>(
  (
    { seperator = "/", labels, onClick, children: Children, ...props },
    forwardedRef,
  ) => {
    const numOfLabels = labels.length - 1;

    const divider = (
      <ListItem className="font-medium opacity-50 dark:opacity-40">
        {seperator}
      </ListItem>
    );

    const components = labels
      .flatMap((label, index) => {
        // Is this the last element
        const isLastElement = index === numOfLabels;

        return [
          <Fragment key={label}>
            {Children ? (
              <Children label={label} isLastElement={isLastElement} />
            ) : (
              <ListItem>
                <span
                  key={label}
                  className={classNames(
                    !isLastElement &&
                      "hover:bg-secondary-100 dark:hover:bg-secondary-800 cursor-pointer opacity-60 transition-all ease-in-out hover:opacity-100 dark:opacity-50 dark:hover:opacity-100",
                    "rounded px-1.5 py-1 font-medium leading-none",
                  )}
                  onClick={() => onClick?.(label)}
                  onKeyDown={() => onClick?.(label)}
                >
                  {label}
                </span>
              </ListItem>
            )}
          </Fragment>,
          divider,
        ];
      })
      .slice(0, -1);

    return (
      <nav ref={forwardedRef} {...props}>
        <List className="flex items-center gap-1.5">{...components}</List>
      </nav>
    );
  },
);
Breadcrumbs.displayName = "Breadcrumbs";
