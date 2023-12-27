import { List, ListItem, classNames } from "@rafty/ui";
import {
  Fragment,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
  forwardRef,
} from "react";

type ItemType = {
  label?: ReactNode;
  onClick?: MouseEventHandler<HTMLSpanElement>;
};

export type Breadcrumbs = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  seperator?: ReactNode;
  size?: "sm" | "md" | "lg";
  items: ItemType[];
  children?: (props: { isLastElement?: boolean } & ItemType) => ReactNode;
};

export const Breadcrumbs = forwardRef<HTMLElement, Breadcrumbs>(
  (
    { seperator = "/", items, children, size = "md", className, ...props },
    forwardedRef,
  ) => {
    return (
      <nav ref={forwardedRef} {...props}>
        <List className="flex items-center gap-2">
          {items.map(({ label, onClick }, index, arr) => {
            const isLast = index === arr.length - 1;
            const title_string = typeof label === "string";

            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: label is ReactNode
              <Fragment key={index}>
                {children ? (
                  children({ label, onClick, isLastElement: isLast })
                ) : (
                  <ListItem>
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <span
                      className={classNames(
                        title_string && isLast && "text-blue-500",
                        !title_string && "hover:bg-secondary-300 rounded-md",
                        "px-2",
                      )}
                      onClick={onClick}
                    >
                      {title_string ? <p>{label}</p> : label}
                    </span>
                  </ListItem>
                )}
                {!isLast && <ListItem>{seperator}</ListItem>}
              </Fragment>
            );
          })}
        </List>
      </nav>
    );
  },
);
Breadcrumbs.displayName = "Breadcrumbs";
