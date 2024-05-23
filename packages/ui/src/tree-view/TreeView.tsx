import { TreeView as ArkTreeView } from "@ark-ui/react";
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

export type TreeView = ComponentPropsWithoutRef<typeof ArkTreeView.Root> &
  Partial<TreeViewContext>;

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
      <ArkTreeView.Tree className="space-y-2.5">{children}</ArkTreeView.Tree>
    </ArkTreeView.Root>
  </TreeViewProvider>
));
TreeView.displayName = "TreeView";

export type TreeViewItem = ComponentPropsWithoutRef<typeof ArkTreeView.Branch>;

export const TreeViewItem = forwardRef<
  ElementRef<typeof ArkTreeView.Branch>,
  TreeViewItem
>(({ children, ...props }, forwardedref) => {
  const validChildren = getValidChildren(children);

  const hasChildren = validChildren.some(
    (child) => child.type.displayName === TreeViewContent.displayName,
  );

  const items = validChildren.map((child) => {
    if (!hasChildren && child.type.displayName === TreeViewLabel.displayName)
      return cloneElement(child, { indicator: false });
    return child;
  });

  return (
    <ArkTreeView.Branch {...props} ref={forwardedref}>
      {items}
    </ArkTreeView.Branch>
  );
});
TreeViewItem.displayName = "TreeViewItem";

const treeViewLabelClasses = cva(
  "hover:bg-secondary-100/60 dark:hover:bg-secondary-800 flex w-full items-center gap-2 font-medium transition-all ease-in-out",
  {
    variants: {
      size: {
        sm: "rounded text-xs py-1.5 pl-[calc(var(--depth)*10px)] pr-1 data-[depth='1']:pl-1",
        md: "rounded-md text-sm py-2 pl-[calc(var(--depth)*15px)] pr-1.5 data-[depth='1']:pl-1.5",
        lg: "rounded-lg text-base py-2.5 pl-[calc(var(--depth)*20px)] pr-2 data-[depth='1']:pl-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const treeViewIndicatorClasses = cva(
  "stroke-primary-500 dark:storke-primary-400 transform stroke-2 duration-200 ease-in-out group-data-[state=open]/indicator:rotate-90",
  {
    variants: {
      size: {
        sm: "size-3",
        md: "size-4",
        lg: "size-5",
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
  indicator?: ReactNode;
};

export const TreeViewLabel = forwardRef<
  ElementRef<typeof ArkTreeView.BranchControl>,
  TreeViewLabel
>(({ children, indicator, className, ...props }, forwardedref) => {
  const { size } = useTreeViewContext();

  return (
    <ArkTreeView.BranchControl
      {...props}
      className={classNames(treeViewLabelClasses({ size }), className)}
      ref={forwardedref}
    >
      <ArkTreeView.BranchIndicator className="group/indicator">
        {indicator ?? (
          <ChevronRightIcon className={treeViewIndicatorClasses({ size })} />
        )}
      </ArkTreeView.BranchIndicator>
      <ArkTreeView.BranchText className="font-medium">
        {children}
      </ArkTreeView.BranchText>
    </ArkTreeView.BranchControl>
  );
});
TreeViewLabel.displayName = "TreeViewLabel";

export type TreeViewContent = ComponentPropsWithoutRef<
  typeof ArkTreeView.BranchContent
>;

export const TreeViewContent = forwardRef<
  ElementRef<typeof ArkTreeView.BranchContent>,
  TreeViewContent
>(({ children, className, ...props }, forwardedref) => (
  <ArkTreeView.BranchContent
    {...props}
    className={classNames("relative", className)}
    ref={forwardedref}
  >
    <div className="bg-secondary-300 dark:bg-secondary-700 absolute left-3.5 top-0 h-full w-px" />
    {children}
  </ArkTreeView.BranchContent>
));
TreeViewContent.displayName = "TreeViewContent";
