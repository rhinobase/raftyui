import { themes } from "prism-react-renderer";
import { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { CodeContainer } from "./CodeContainer";
import { CopyButton } from "./CopyButton";
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
      <LivePreview className="not-prose dark:bg-secondary-900 dark:border-secondary-800 flex w-full items-center justify-center rounded-lg border bg-transparent p-4" />
      <div className="dark relative z-0">
        <CodeContainer>
          <LiveEditor
            onChange={onChange}
            theme={themes.dracula}
            className="overflow-x-auto rounded-lg font-mono [&>*]:w-max [&>*]:lg:min-w-[768px]"
            data-gramm="false"
          />
        </CodeContainer>
        <CopyButton content={editorCode} />
      </div>
      <LiveError className="my-0 overflow-x-auto rounded-lg bg-red-500 p-4 font-mono text-white" />
    </LiveProvider>
  );
}
