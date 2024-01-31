import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { dracula } from "@codesandbox/sandpack-themes";
import {
  ComboboxContent,
  FibrContent,
  FormikContent,
  ReactHookFormContent,
  TanstackTableContent,
} from "./contents";

const Index = `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <App />
  </StrictMode>
);`;

export type SandpackEmbed = { name: string };

export function SandpackEmbed({ name }: SandpackEmbed) {
  let data = { files: {}, dependencies: {} };

  switch (name) {
    case "formik":
      data = FormikContent;
      break;
    case "react-hook-form":
      data = ReactHookFormContent;
      break;
    case "fibr":
      data = FibrContent;
      break;
    case "tanstack-table":
      data = TanstackTableContent;
      break;
    case "combobox":
      data = ComboboxContent;
      break;
  }

  const { dependencies, files } = data;

  return (
    <SandpackProvider
      files={{
        ...files,
        "index.js": Index,
      }}
      options={{
        externalResources: [
          "https://storybook.rafty.rhinobase.io/assets/preview-qLl2qDKw.css",
        ],
      }}
      theme={dracula}
      template="react"
      customSetup={{
        dependencies: {
          "@rafty/ui": "latest",
          "date-fns": "^2.3.0",
          ...dependencies,
        },
        devDependencies: {
          "@rafty/plugin": "latest",
        },
      }}
    >
      <SandpackLayout className="flex-col rounded-xl">
        <SandpackPreview className="min-h-[400px]" />
        <SandpackCodeEditor showLineNumbers className="min-h-[400px]" />
      </SandpackLayout>
    </SandpackProvider>
  );
}
