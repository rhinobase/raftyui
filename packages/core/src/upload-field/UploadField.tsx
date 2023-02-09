import React from "react";
import * as Dialog from "../dialog";
import * as Tab from "../tabs";

export function UploadField() {
  return (
    <div className="relative rounded-md border border-dashed border-zinc-300 py-8 px-12 transition-colors dark:border-zinc-600">
      <Dialog.Root>
        <Dialog.Trigger className="absolute top-0 left-0 z-10 h-full w-full opacity-0 outline-none" />
        <Dialog.Content className="!p-0">
          <Tab.Root defaultValue="Home" orientation="vertical" size="sm">
            <Tab.List className="!bg-transparent">
              <Tab.Trigger
                value="Home"
                className="data-[state=active]:!text-primary-500"
              >
                Home
              </Tab.Trigger>
              <div className="h-[1px] w-full bg-zinc-200" />
              <Tab.Trigger
                value="SiteFiles"
                className="data-[state=active]:!text-primary-500"
              >
                Site Files
              </Tab.Trigger>
              <Tab.Trigger
                value="Trash"
                className="data-[state=active]:!text-primary-500"
              >
                Trash
              </Tab.Trigger>
              <div className="h-[1px] w-full bg-zinc-200" />
            </Tab.List>
            <div className="mx-auto w-full">
              <Tab.Content value="Home"></Tab.Content>
              <Tab.Content value="SiteFiles"></Tab.Content>
              <Tab.Content value="Trash"></Tab.Content>
            </div>
          </Tab.Root>
        </Dialog.Content>
      </Dialog.Root>
      {/* <input type="file" className="absolute z-10 h-full w-full opacity-0 outline-none" /> */}
      <div className="z-0 flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-400 dark:text-zinc-600">
        <svg
          className="mx-auto h-10 w-10"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-center text-sm">
          <span className="text-primary-500 dark:text-primary-300 mt-2">
            Upload a file{" "}
          </span>
          or drag and drop
        </div>
      </div>
    </div>
  );
}
