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
      files={files}
      theme={dracula}
      template="vite-react-ts"
      customSetup={{
        dependencies: {
          "@rafty/ui": "latest",
          ...dependencies,
        },
        devDependencies: {
          "@rafty/plugin": "latest",
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
          className="min-h-[350px]"
          {...editorOptions}
        />
        <SandpackPreview className="min-h-[350px]" {...previewOptions} />
      </SandpackLayout>
    </SandpackProvider>
  );
}
