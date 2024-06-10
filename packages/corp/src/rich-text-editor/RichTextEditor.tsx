"use client";
import EditorJS, {
  type API,
  type BlockMutationEvent,
  type OutputData,
  type ToolConstructable,
  type ToolSettings,
} from "@editorjs/editorjs";
import { type ValueOrFunction, classNames, getValue } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, useEffect } from "react";
import { EDITOR_JS_TOOLS } from "./EditorConstants";
import "./style.css";

const richTextEditorClasses = cva(
  "h-[400px] w-full overflow-hidden overflow-y-auto rounded-md border px-3 py-2",
  {
    variants: {
      invalid: {
        true: "border-red-500 dark:border-red-300",
        false: "border-secondary-300 dark:border-secondary-700",
      },
      hidden: {
        true: "hidden",
        false: "",
      },
    },
  },
);

export type RichTextEditor = {
  onChange?: (
    api: API,
    event: BlockMutationEvent | BlockMutationEvent[],
  ) => void;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  isReadOnly?: ValueOrFunction;
  data?: OutputData;
  placeholder?: string;
  tools?: { [toolName: string]: ToolConstructable | ToolSettings };
  isHidden?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  id?: string;
};

export function RichTextEditor({
  onChange,
  className,
  isReadOnly = false,
  data,
  tools,
  isHidden = false,
  isInvalid = false,
  id = "editorjs",
  placeholder = "Type Something...",
}: RichTextEditor) {
  const readOnly = getValue(isReadOnly);
  const hidden = getValue(isHidden);
  const invalid = getValue(isInvalid);

  const editor = new EditorJS({
    placeholder,
    holder: id,
    tools: { ...EDITOR_JS_TOOLS, ...tools },
    readOnly,
    data,
    onChange,
    autofocus: true,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    editor.readOnly?.toggle(readOnly);
  }, [readOnly]);

  return (
    <div
      id={id}
      className={classNames(
        richTextEditorClasses({ hidden, invalid }),
        className,
      )}
    />
  );
}
