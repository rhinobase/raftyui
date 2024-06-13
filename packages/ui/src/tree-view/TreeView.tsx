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
>(function TreeView(
  { children, size = "md", className, ...props },
  forwardedRef,
) {
  return (
    <TreeViewProvider value={{ size }}>
      <ArkTreeView.Root
        {...props}
        className={classNames("w-full", className)}
        ref={forwardedRef}
      >
        <ArkTreeView.Tree>{children}</ArkTreeView.Tree>
      </ArkTreeView.Root>
    </TreeViewProvider>
  );
});

export const treeViewItemClasses = cva(
  "group/single-label ring-primary-300 dark:ring-primary-100 outline-none focus-visible:ring-2",
  {
    variants: {
      size: {
        sm: "rounded-sm",
        md: "rounded-base",
        lg: "rounded-md",
      },
    },
  },
);

export type TreeViewItem = ComponentPropsWithoutRef<typeof ArkTreeView.Branch>;

export const TreeViewItem = forwardRef<
  ElementRef<typeof ArkTreeView.Branch>,
  TreeViewItem
>(function TreeViewItem({ children, className, ...props }, forwardedRef) {
  const { size } = useTreeViewContext();

  const validChildren = getValidChildren(children);

  const hasChildren = validChildren.some(
    (child) => child.type.displayName === TreeViewContent.displayName,
  );

  const items = validChildren.map((child) =>
    cloneElement(child, { type: hasChildren ? "branch" : "single" }),
  );

  if (validChildren.length === 1)
    return (
      <ArkTreeView.Item
        {...props}
        className={classNames(treeViewItemClasses({ size }), className)}
        ref={forwardedRef}
      >
        {items}
      </ArkTreeView.Item>
    );

  return (
    <ArkTreeView.Branch {...props} className={className} ref={forwardedRef}>
      {items}
    </ArkTreeView.Branch>
  );
});

export const treeViewLabelClasses = cva(
  "hover:bg-secondary-100 dark:hover:bg-secondary-800/80 w-full flex items-center font-medium cursor-pointer select-none outline-none focus-visible:ring-2 ring-primary-300 dark:ring-primary-100",
  {
    variants: {
      size: {
        sm: "rounded-sm text-xs py-1 pr-1 gap-1",
        md: "rounded-base text-sm py-1.5 pr-1.5 gap-1.5",
        lg: "rounded-md text-base py-2 pr-2 gap-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const treeViewLabelSingleClasses = {
  size: {
    sm: "pl-[calc((var(--depth)*20px))] group-data-[depth='1']/single-label:pl-[20px]",
    md: "pl-[calc((var(--depth)*22px))] group-data-[depth='1']/single-label:pl-[26px]",
    lg: "pl-[calc((var(--depth)*24px))] group-data-[depth='1']/single-label:pl-[32px]",
  },
};

export const treeViewLabelBranchClasses = {
  size: {
    sm: "pl-[calc((var(--depth)-1)*20px)] data-[depth='1']:pl-1",
    md: "pl-[calc((var(--depth)-1)*22px)] data-[depth='1']:pl-1.5",
    lg: "pl-[calc((var(--depth)-1)*24px)] data-[depth='1']:pl-2",
  },
};

export const treeViewLabelIndicatorClasses = cva(
  "data-[state=open]:rotate-90 transform duration-200 ease-in-out",
  {
    variants: {
      size: {
        sm: "size-3",
        md: "size-3.5",
        lg: "size-4",
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
>(function TreeViewLabel(
  { children, indicatorIcon, showIndicator = true, className, type, ...props },
  forwardedRef,
) {
  const { size } = useTreeViewContext();

  if (type === "single")
    return (
      <ArkTreeView.ItemText
        {...props}
        className={classNames(
          treeViewLabelClasses({ size }),
          // @ts-ignore
          treeViewLabelSingleClasses.size[size],
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </ArkTreeView.ItemText>
    );
  return (
    <ArkTreeView.BranchControl
      {...props}
      className={classNames(
        treeViewLabelClasses({ size }),
        // @ts-ignore
        treeViewLabelBranchClasses.size[size],
        className,
      )}
      ref={forwardedRef}
    >
      {showIndicator && (
        <ArkTreeView.BranchIndicator
          className={treeViewLabelIndicatorClasses({ size })}
        >
          {indicatorIcon ?? (
            <ChevronRightIcon className="stroke-primary-500 dark:stroke-primary-300 size-full stroke-[3]" />
          )}
        </ArkTreeView.BranchIndicator>
      )}
      <ArkTreeView.BranchText className="font-medium">
        {children}
      </ArkTreeView.BranchText>
    </ArkTreeView.BranchControl>
  );
});

// TODO: figureout the left props value calculation

// const treeViewContentBorderClasses = cva(
//   "bg-secondary-300 dark:bg-secondary-700 absolute top-0 z-[1] h-full w-px",
//   {
//     variants: {
//       size: {
//         sm: "left-[calc(var(--depth)*16px)]",
//         md: "left-[calc(var(--depth)*15px)]",
//         lg: "left-[calc(var(--depth)*20px)]",
//       },
//     },
//     defaultVariants: {
//       size: "md",
//     },
//   },
// );

export type TreeViewContent = ComponentPropsWithoutRef<
  typeof ArkTreeView.BranchContent
>;

export const TreeViewContent = forwardRef<
  ElementRef<typeof ArkTreeView.BranchContent>,
  TreeViewContent
>(function TreeViewContent({ children, className, ...props }, forwardedRef) {
  return (
    <ArkTreeView.BranchContent
      {...props}
      className={classNames("group/content relative", className)}
      ref={forwardedRef}
    >
      {/* <div className={treeViewContentBorderClasses({ size })} /> */}
      {children}
    </ArkTreeView.BranchContent>
  );
});
