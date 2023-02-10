import React from "react";
import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import { useEffect } from "react";
import { EDITOR_JS_TOOLS } from "./EditorTool";

export function Editor(props: { configuration?: EditorConfig }) {
  useEffect(() => {
    if (!window) return;
    const editor = new EditorJS({
      holder: "editorjs",
      tools: EDITOR_JS_TOOLS,
      data: {
        time: new Date().getTime(),
        version: EditorJS.version,
        blocks: [],
      },
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
      placeholder: "Let`s Start writing!",
      ...props.configuration,
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div className="px-xl py-base min-h-[500px] w-full rounded-md border">
      <div id="editorjs" />
    </div>
  );
}
