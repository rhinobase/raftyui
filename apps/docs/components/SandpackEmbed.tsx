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
  isHorizontal = false,
}: SandpackEmbed) {
  return (
    <SandpackProvider
      files={files}
      theme={dracula}
      template="react-ts"
      customSetup={{
        dependencies: {
          "@rafty/ui": "1.1.1",
          "core-js": "latest",
          ...dependencies,
        },
        devDependencies: {
          ...devDependencies,
        },
      }}
    >
      <SandpackLayout
        className="flex-col-reverse md:flex-row"
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
