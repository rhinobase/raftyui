import {
  CodeEditorProps,
  PreviewProps,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackLayoutProps,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { dracula } from "@codesandbox/sandpack-themes";

export type SandpackEmbed = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  layoutOptions?: SandpackLayoutProps;
  editorOptions?: CodeEditorProps;
  previewOptions?: PreviewProps;
  files: {
    [x: string]: string;
  };
};

const ReactMainFile = `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="flex items-center justify-center h-screen">
      <App />
    </div>
  </StrictMode>
);`;

export function SandpackEmbed({
  dependencies,
  devDependencies,
  layoutOptions,
  editorOptions,
  previewOptions,
  files,
}: SandpackEmbed) {
  return (
    <SandpackProvider
      files={{
        ...files,
        "index.js": ReactMainFile,
      }}
      options={{
        externalResources: [
          "https://storybook.rafty.rhinobase.io/assets/preview-LCCjbVOj.css",
        ],
      }}
      theme={dracula}
      template="react"
      customSetup={{
        dependencies: {
          "@rafty/ui": "1.4.0",
          "date-fns": "^2.3.0",
          ...dependencies,
        },
        devDependencies: {
          "@rafty/plugin": "1.1.0",
          ...devDependencies,
        },
      }}
    >
      <SandpackLayout
        className="flex-col-reverse !rounded-xl lg:flex-row"
        {...layoutOptions}
      >
        <SandpackCodeEditor
          showLineNumbers
          showTabs={false}
          className="min-h-[350px]"
          {...editorOptions}
        />
        <SandpackPreview className="min-h-[350px]" {...previewOptions} />
      </SandpackLayout>
    </SandpackProvider>
  );
}
