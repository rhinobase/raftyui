"use client";
import {
  FileUpload as ArkFileUpload,
  type FileUploadRootProps,
} from "@ark-ui/react";
import { DocumentIcon, TrashIcon } from "@heroicons/react/24/outline";
import { type ElementRef, forwardRef } from "react";
import { Button } from "../button";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export type FileUpload = FileUploadRootProps & {
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
};

export const FileUpload = forwardRef<
  ElementRef<typeof ArkFileUpload.Root>,
  FileUpload
>(function FileUpload(
  { className, isDisabled, isLoading, ...props },
  forwardedRef,
) {
  const disabled =
    props.disabled || getValue(isDisabled) || getValue(isLoading);

  return (
    <ArkFileUpload.Root
      {...props}
      className={classNames("w-full", className)}
      disabled={disabled}
      ref={forwardedRef}
    >
      <div className="relative h-[300px] w-full">
        <ArkFileUpload.Dropzone className="border-secondary-300 dark:border-secondary-700 absolute inset-0 flex size-full cursor-pointer select-none items-center justify-center rounded-lg border border-dashed">
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
});

function UploadItem(props: { file: File }) {
  return (
    <ArkFileUpload.Item
      key={props.file.name}
      file={props.file}
      className="border-secondary-300 dark:border-secondary-700 flex w-full items-center gap-2 rounded-md border p-2"
    >
      <ArkFileUpload.ItemPreview type=".*">
        {props.file.type.split("/")[0] === "image" ? (
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
