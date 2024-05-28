import { TreeView as ArkTreeView, type TreeViewRootProps } from "@ark-ui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
  cloneElement,
  forwardRef,
} from "react";
import { classNames, getValidChildren } from "../utils";
import {
  type TreeViewContext,
  TreeViewProvider,
  useTreeViewContext,
} from "./context";

export type TreeView = TreeViewRootProps & Partial<TreeViewContext>;

export const TreeView = forwardRef<
  ElementRef<typeof ArkTreeView.Root>,
  TreeView
>(({ children, size = "md", className, ...props }, forwardedref) => (
  <TreeViewProvider value={{ size }}>
    <ArkTreeView.Root
      {...props}
      className={classNames("w-full", className)}
      ref={forwardedref}
    >
      <ArkTreeView.Tree>{children}</ArkTreeView.Tree>
    </ArkTreeView.Root>
  </TreeViewProvider>
));
TreeView.displayName = "TreeView";

export type TreeViewItem = ComponentPropsWithoutRef<typeof ArkTreeView.Branch>;

export const TreeViewItem = forwardRef<
  ElementRef<typeof ArkTreeView.Branch>,
  TreeViewItem
>(({ children, ...props }, forwardedRef) => {
  const validChildren = getValidChildren(children);

  const hasChildren = validChildren.some(
    (child) => child.type.displayName === TreeViewContent.displayName,
  );

  const items = validChildren.map((child) => {
    if (hasChildren) return cloneElement(child, { type: "branch" });
    return cloneElement(child, { type: "single" });
  });

  if (validChildren.length === 1)
    return <ArkTreeView.Item {...props}>{items}</ArkTreeView.Item>;

  return (
    <ArkTreeView.Branch {...props} ref={forwardedRef}>
      {items}
    </ArkTreeView.Branch>
  );
});
TreeViewItem.displayName = "TreeViewItem";

const treeViewLabelClasses = cva(
  "relative group/control hover:bg-secondary-100 dark:hover:bg-secondary-800/80 w-full flex items-center font-medium cursor-pointer select-none",
  {
    variants: {
      size: {
        sm: "rounded-sm text-xs py-1 pl-[calc(var(--depth)*18px)] pr-1",
        md: "rounded-base text-sm py-1.5 pl-[calc(var(--depth)*20px)] pr-1.5",
        lg: "rounded-md text-base py-2 pl-[calc(var(--depth)*22px)] pr-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const treeViewLabelIndicatorClasses = cva(
  "group/indicator absolute empty:hidden -translate-x-1/2",
  {
    variants: {
      size: {
        sm: "left-[calc(var(--depth)*15px)] size-3",
        md: "left-[calc(var(--depth)*17px)] size-3.5",
        lg: "left-[calc(var(--depth)*19px)] size-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type TreeViewLabel = ComponentPropsWithoutRef<
  typeof ArkTreeView.BranchControl
> & {
  indicatorIcon?: ReactNode;
  showIndicator?: boolean;
  type?: "single" | "branch";
};

export const TreeViewLabel = forwardRef<
  ElementRef<typeof ArkTreeView.BranchControl>,
  TreeViewLabel
>(
  (
    {
      children,
      indicatorIcon,
      showIndicator = true,
      className,
      type,
      ...props
    },
    forwardedref,
  ) => {
    const { size } = useTreeViewContext();

    if (type === "single")
      return (
        <ArkTreeView.ItemText
          {...props}
          className={classNames(treeViewLabelClasses({ size }), className)}
          ref={forwardedref}
        >
          {children}
        </ArkTreeView.ItemText>
      );
    return (
      <ArkTreeView.BranchControl
        {...props}
        className={classNames(treeViewLabelClasses({ size }), className)}
        ref={forwardedref}
      >
        {showIndicator && (
          <ArkTreeView.BranchIndicator
            className={treeViewLabelIndicatorClasses({ size })}
          >
            {indicatorIcon ?? (
              <ChevronRightIcon className="stroke-primary-500 dark:stroke-primary-400 size-full transform stroke-[3] duration-200 ease-in-out group-data-[state=open]/indicator:rotate-90" />
            )}
          </ArkTreeView.BranchIndicator>
        )}
        <ArkTreeView.BranchText className="font-medium">
          {children}
        </ArkTreeView.BranchText>
      </ArkTreeView.BranchControl>
    );
  },
);
TreeViewLabel.displayName = "TreeViewLabel";

const treeViewContentBorderClasses = cva(
  "bg-secondary-300 dark:bg-secondary-700 absolute top-0 z-[1] h-full w-px -translate-x-1/2",
  {
    variants: {
      size: {
        sm: "left-[calc(var(--depth)*15px)]",
        md: "left-[calc(var(--depth)*17px)]",
        lg: "left-[calc(var(--depth)*19px)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type TreeViewContent = ComponentPropsWithoutRef<
  typeof ArkTreeView.BranchContent
>;

export const TreeViewContent = forwardRef<
  ElementRef<typeof ArkTreeView.BranchContent>,
  TreeViewContent
>(({ children, className, ...props }, forwardedref) => {
  const { size } = useTreeViewContext();

  return (
    <ArkTreeView.BranchContent
      {...props}
      className={classNames("relative", className)}
      ref={forwardedref}
    >
      <div className={treeViewContentBorderClasses({ size })} />
      {children}
    </ArkTreeView.BranchContent>
  );
});
TreeViewContent.displayName = "TreeViewContent";
