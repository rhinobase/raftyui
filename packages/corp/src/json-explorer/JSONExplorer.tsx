import {
  TreeView,
  TreeViewContent,
  TreeViewItem,
  TreeViewLabel,
  classNames,
  useTreeViewContext,
} from "@rafty/ui";
import { cva } from "class-variance-authority";
import { type ElementRef, type PropsWithChildren, forwardRef } from "react";

type JSONValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export type JSONExplorerData = Record<string, JSONValue>;

export type JSONExplorer = TreeView & {
  data: JSONExplorerData;
};

export const JSONExplorer = forwardRef<
  ElementRef<typeof TreeView>,
  JSONExplorer
>(function JSONExplorer({ data, ...props }, forwardRef) {
  return (
    <TreeView {...props} ref={forwardRef}>
      <CreateTree tree={data} />
    </TreeView>
  );
});

function CreateTree({ tree }: { tree: JSONExplorerData }) {
  return Object.entries(tree).map(([key, value]) => {
    const isObject =
      value != null && typeof value === "object" && !Array.isArray(value);
    const isArray = Array.isArray(value);
    const isSingleton = !isObject && !isArray;

    return (
      <TreeViewItem key={key} value={!isSingleton ? key : String(value)}>
        <TreeViewLabel
          className={classNames("group", isSingleton && "items-start")}
        >
          <span className="text-primary-500 dark:text-primary-300 font-medium">
            {key} :
          </span>
          {isSingleton && (
            <span className="flex-1 overflow-hidden text-ellipsis">
              {String(value)}
            </span>
          )}
          {isArray && <LabelRender>{`[ ] ${value.length} items`}</LabelRender>}
          {isObject && (
            <LabelRender>{`{ } ${Object.keys(value).length} key`}</LabelRender>
          )}
        </TreeViewLabel>
        {!isSingleton && (
          <TreeViewContent>
            <CreateTree tree={value as JSONExplorerData} />
          </TreeViewContent>
        )}
      </TreeViewItem>
    );
  });
}

const jsonExplorerLabelClasses = cva(
  "text-secondary-500 dark:text-secondary-400 group-data-[state=closed]:text-green-600 dark:group-data-[state=closed]:text-green-300",
  {
    variants: {
      size: {
        sm: "ml-1 text-[10px]",
        md: "ml-2 text-xs",
        lg: "ml-3 text-sm",
      },
    },
  },
);

function LabelRender({ children }: PropsWithChildren) {
  const { size } = useTreeViewContext();

  return <span className={jsonExplorerLabelClasses({ size })}>{children}</span>;
}
