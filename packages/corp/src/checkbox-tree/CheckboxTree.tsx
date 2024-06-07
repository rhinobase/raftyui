"use client";
import {
  Checkbox,
  TreeView,
  TreeViewContent,
  TreeViewItem,
  TreeViewLabel,
  useTreeViewContext,
} from "@rafty/ui";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef, useEffect, useState } from "react";

export type CheckboxTreeData = {
  label: string;
  value: string;
  children?: CheckboxTreeData[];
};

export type CheckboxTree = {
  data: CheckboxTreeData[];
  onCheckedChange?: (check: Record<string, boolean>) => void;
  checked?: Record<string, boolean>;
  defaultChecked?: Record<string, boolean>;
} & Omit<TreeView, "defaultChecked">;

export const CheckboxTree = forwardRef<
  ElementRef<typeof TreeView>,
  CheckboxTree
>(
  (
    { data, checked: value, defaultChecked, onCheckedChange, ...props },
    forwardedRef,
  ) => {
    const initialValue = value ?? defaultChecked;
    const [checked, setChecked] = useState<Record<string, boolean>>(
      initialValue || {},
    );

    const handleToggle = (
      data: CheckboxTreeData[] | string,
      isChecked: boolean,
    ) => {
      const updateState = (items: CheckboxTreeData[], checked: boolean) => {
        let newState: Record<string, boolean> = {};
        for (const item of items) {
          newState[item.value] = checked;
          if (item.children)
            newState = { ...newState, ...updateState(item.children, checked) };
        }

        return newState;
      };

      if (typeof data === "string") {
        setChecked((prev) => ({ ...prev, [data]: isChecked }));
      } else {
        setChecked((prev) => ({
          ...prev,
          ...updateState(data, isChecked),
        }));
      }
    };

    useEffect(() => {
      if (checked) onCheckedChange?.(checked);
    }, [checked, onCheckedChange]);

    return (
      <TreeView {...props} ref={forwardedRef}>
        <CreateTree tree={data} checked={checked} onToggle={handleToggle} />
      </TreeView>
    );
  },
);

const labelClasses = cva("[&>span]:flex [&>span]:items-center", {
  variants: {
    size: {
      sm: "[&>span]:gap-1",
      md: "[&>span]:gap-1.5",
      lg: "[&>span]:gap-2",
    },
  },
});

type CreateTree = {
  tree: CheckboxTreeData[];
  checked: Record<string, boolean>;
  onToggle: (data: CheckboxTreeData[] | string, isChecked: boolean) => void;
};

function CreateTree({ tree, checked, onToggle }: CreateTree) {
  const { size } = useTreeViewContext();

  const getCheckboxState = (
    item: CheckboxTreeData,
  ): { checked: boolean; indeterminate: boolean } => {
    if (item.children) {
      const childElements = item.children.map((child) =>
        getCheckboxState(child),
      );
      const allChecked = childElements.every((element) => element.checked);
      const someChecked = childElements.some(
        (element) => element.checked || element.indeterminate,
      );

      return { checked: allChecked, indeterminate: someChecked && !allChecked };
    }

    return { checked: checked[item.value] || false, indeterminate: false };
  };

  return tree.map(({ label, children, value }) => {
    const checkboxState = getCheckboxState({ label, children, value });

    return (
      <TreeViewItem key={value} value={value}>
        <TreeViewLabel className={labelClasses({ size })}>
          <Checkbox
            size={size}
            onClick={(e) => e.stopPropagation()}
            checked={
              checkboxState.indeterminate
                ? "indeterminate"
                : checkboxState.checked
            }
            onCheckedChange={(check) => {
              onToggle(value, Boolean(check));
              if (children) onToggle(children, Boolean(check));
            }}
          >
            {label}
          </Checkbox>
        </TreeViewLabel>
        {children && (
          <TreeViewContent>
            <CreateTree tree={children} checked={checked} onToggle={onToggle} />
          </TreeViewContent>
        )}
      </TreeViewItem>
    );
  });
}
