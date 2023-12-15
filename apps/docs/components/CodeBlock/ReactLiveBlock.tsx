import { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";
import { CopyButton } from "./CopyButton";
import { CodeContainer } from "./CodeContainer";
import { ReactLiveScope } from "./ReactLiveScope";

export type ReactLiveBlock = {
  code: string;
};

export function ReactLiveBlock({ code }: ReactLiveBlock) {
  // Editor code
  const [editorCode, setEditorCode] = useState(code.trim());

  // Change editor code based on user input
  const onChange = (value: string) => setEditorCode(value.trim());

  return (
    <LiveProvider code={editorCode} scope={ReactLiveScope}>
      <LivePreview className="not-porse dark:bg-secondary-900 dark:border-secondary-800 flex w-full items-center justify-center rounded-lg border bg-transparent p-4" />
      <div className="relative z-0">
        <CodeContainer>
          <LiveEditor onChange={onChange} theme={themes.dracula} />
        </CodeContainer>
        <CopyButton content={editorCode} />
      </div>
      <LiveError />
    </LiveProvider>
  );
}
