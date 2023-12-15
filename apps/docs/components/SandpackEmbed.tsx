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

type SandpackEmbed = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  layoutOptions?: SandpackLayoutProps;
  editorOptions?: CodeEditorProps;
  previewOptions?: PreviewProps;
  files: {
    [x: string]: string;
  };
  isHorizontal?: boolean;
};

const ReactMainFile = `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <div className="flex items-center justify-center h-screen">
      <App />
    </div>
  </StrictMode>
);`;

const TailwindConfigFile = `module.exports = {
  darkMode: "class",
  content: ["./**/*.{js,ts,jsx,tsx}","./node_modules/@rafty/ui/**/*.js"],
  plugins: [require("@rafty/plugin")],
}`;

const PostCssConfigFile = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

const StyleCssFile = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

export default function SandpackEmbed({
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
        "tailwind.config.js": TailwindConfigFile,
        "postcss.config.js": PostCssConfigFile,
        "styles.css": StyleCssFile,
        "index.tsx": ReactMainFile,
      }}
      theme={dracula}
      template="vite-react-ts"
      customSetup={{
        dependencies: {
          "@rafty/ui": "1.4.0",
          "date-fns": "^2.3.0",
          ...dependencies,
        },
        devDependencies: {
          "@rafty/plugin": "1.1.0",
          tailwindcss: "^3.3.6",
          postcss: "^8.4.31",
          autoprefixer: "^10.4.16",
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
