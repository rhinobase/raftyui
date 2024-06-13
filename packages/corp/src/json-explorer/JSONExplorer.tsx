import {
  TreeView,
  TreeViewContent,
  TreeViewItem,
  TreeViewLabel,
  useTreeViewContext,
} from "@rafty/ui";
import { cva } from "class-variance-authority";
import { type ElementRef, type PropsWithChildren, forwardRef } from "react";

type JSONValue =
  | string
  | number
  | boolean
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
      value && typeof value === "object" && !Array.isArray(value);
    const isArray = Array.isArray(value);
    const Singleton = !isObject && !isArray;

    return (
      <TreeViewItem key={key} value={!Singleton ? key : String(value)}>
        <TreeViewLabel className="group">
          <span className="text-primary-500 dark:text-primary-300 font-medium">
            {key} :
          </span>
          {Singleton && <span>{String(value)}</span>}
          {isArray && <LabelRender>{`[ ] ${value.length} items`}</LabelRender>}
          {isObject && (
            <LabelRender>{`{ } ${Object.keys(value).length} key`}</LabelRender>
          )}
        </TreeViewLabel>
        {!Singleton && (
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
