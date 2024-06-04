import {
  TreeView,
  TreeViewContent,
  TreeViewItem,
  TreeViewLabel,
} from "@rafty/ui";
import { type ElementRef, type PropsWithChildren, forwardRef } from "react";

type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

type JSONExplorerData = Record<string, JSONValue>;

export type JSONExplorer = TreeView & {
  data: JSONExplorerData;
};

export const JSONExplorer = forwardRef<
  ElementRef<typeof TreeView>,
  JSONExplorer
>(({ data, ...props }, forwardRef) => {
  return (
    <TreeView {...props} ref={forwardRef}>
      <CreateTree tree={data} />
    </TreeView>
  );
});
JSONExplorer.displayName = "JSONExplorer";

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

const LabelRender = ({ children }: PropsWithChildren) => (
  <span className="text-secondary-500 dark:text-secondary-400 ml-2 text-xs group-data-[state=closed]:text-green-600 dark:group-data-[state=closed]:text-green-300">
    {children}
  </span>
);
