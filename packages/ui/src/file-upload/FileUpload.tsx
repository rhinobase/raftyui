import {
  FileUpload as ArkFileUpload,
  type FileUploadRootProps,
} from "@ark-ui/react";
import { DocumentIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";

export type FileUpload = FileUploadRootProps;

export function FileUpload({ className, ...props }: FileUpload) {
  return (
    <ArkFileUpload.Root {...props} className="w-full">
      <div className="relative h-[300px] w-full">
        <ArkFileUpload.Dropzone className="border-secondary-300 dark:border-secondary-700 absolute inset-0 flex h-full w-full cursor-pointer select-none items-center justify-center rounded-lg border border-dashed">
          <p className="text-secondary-500 text-sm font-medium">
            Drag your file(s) here
          </p>
        </ArkFileUpload.Dropzone>
      </div>
      <ArkFileUpload.ItemGroup className="mt-2 space-y-2">
        <ArkFileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <UploadItem key={index} file={file} />
            ))
          }
        </ArkFileUpload.Context>
      </ArkFileUpload.ItemGroup>
      <ArkFileUpload.HiddenInput />
    </ArkFileUpload.Root>
  );
}

function UploadItem({ file }: { file: File }) {
  console.log(file.type);
  return (
    <ArkFileUpload.Item
      key={file.name}
      file={file}
      className="border-secondary-300 dark:border-secondary-700 flex w-full items-center gap-2 rounded-md border p-2"
    >
      <ArkFileUpload.ItemPreview type=".*">
        {file.type.split("/")[0] === "image" ? (
          <ArkFileUpload.ItemPreviewImage className="size-8 object-cover" />
        ) : (
          <div className="flex size-8 items-center justify-center">
            <DocumentIcon className="text-secondary-500 size-6 stroke-2" />
          </div>
        )}
      </ArkFileUpload.ItemPreview>
      <div className="font-medium">
        <ArkFileUpload.ItemName className="text-sm" />
        <ArkFileUpload.ItemSizeText className="text-secondary-500 text-xs" />
      </div>
      <div className="flex-1" />
      <ArkFileUpload.ItemDeleteTrigger asChild>
        <Button
          variant="ghost"
          colorScheme="error"
          size="icon"
          className="rounded"
        >
          <TrashIcon className="size-3.5 stroke-2" />
        </Button>
      </ArkFileUpload.ItemDeleteTrigger>
    </ArkFileUpload.Item>
  );
}
