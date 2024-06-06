"use client";
import EditorJS, {
  type API,
  type BlockMutationEvent,
  type OutputData,
  type ToolConstructable,
  type ToolSettings,
} from "@editorjs/editorjs";
import { type ValueOrFunction, classNames, getValue } from "@rafty/ui";
import { type HtmlHTMLAttributes, useEffect, useState } from "react";
import { EDITOR_JS_TOOLS } from "./EditorConstants";
import "./style.css";

export type RichTextEditor = {
  onChange?: (
    api: API,
    event: BlockMutationEvent | BlockMutationEvent[],
  ) => void;
  className?: HtmlHTMLAttributes<HTMLDivElement>["className"];
  isReadOnly?: ValueOrFunction;
  data?: OutputData;
  placeholder?: string;
  tools?: { [toolName: string]: ToolConstructable | ToolSettings };
};

export function RichTextEditor({
  onChange,
  className,
  isReadOnly,
  data,
  tools,
  placeholder = "Type Something...",
}: RichTextEditor) {
  const readOnly = getValue(isReadOnly);
  let initialized = false;

  const [editor, setEditor] = useState<EditorJS>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!initialized) {
      initialized = true;
      setEditor(
        new EditorJS({
          placeholder,
          holder: "editorjs",
          tools: { ...EDITOR_JS_TOOLS, ...tools },
          readOnly,
          data,
          onChange,
        }),
      );
    }
  }, []);

  return (
    <div
      className={classNames(
        "border-secondary-300 dark:border-secondary-700 h-[400px] w-full overflow-hidden overflow-y-auto rounded-md border px-3 py-2 ",
        className,
      )}
    >
      <div id="editorjs" />
    </div>
  );
}
