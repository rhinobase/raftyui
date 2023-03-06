import React from "react";
import { Button } from "../button";
import * as Dialog from "../dialog";
import * as Tab from "../tabs";

export function UploadField() {
  return (
    <div className="relative rounded-md border border-dashed border-zinc-400 py-8 px-12 transition-colors dark:border-zinc-600">
      <Dialog.Root size="lg">
        <Dialog.Trigger className="absolute top-0 left-0 z-10 h-full w-full opacity-0 outline-none" />
        <Dialog.Overlay />
        <Dialog.Content className="!p-0">
          <Tab.Root defaultValue="Home" orientation="vertical" size="sm">
            <Tab.List className="data-[orientation=vertical]:!px-0 data-[orientation=vertical]:!py-0">
              <div>
                <Button
                  colorScheme="primary"
                  className="!my-6 mx-auto !w-max"
                  leftIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  }
                >
                  Upload Media
                </Button>
              </div>
              <Tab.Trigger
                value="Home"
                className="data-[state=active]:!text-primary-500 data-[orientation=vertical]:data-[state=active]:bg-primary-50 data-[orientation=vertical]:data-[state=active]:hover:bg-primary-50 data-[orientation=vertical]:hover:bg-primary-50/50 !rounded-none"
              >
                Home
              </Tab.Trigger>
              <div className="dark:bg-secondary-700 bg-secondary-200 !my-4 mx-auto h-[1px] w-4/5" />
              <div className="text-secondary-500/90 mb-1 select-none px-3 text-xs font-bold uppercase">
                Manage
              </div>
              <Tab.Trigger
                value="SiteFiles"
                className="data-[state=active]:!text-primary-500 data-[orientation=vertical]:data-[state=active]:bg-primary-50 data-[orientation=vertical]:data-[state=active]:hover:bg-primary-50 data-[orientation=vertical]:hover:bg-primary-50/50 !rounded-none"
              >
                Site Files
              </Tab.Trigger>
              <Tab.Trigger
                value="Trash"
                className="data-[state=active]:!text-primary-500 data-[orientation=vertical]:data-[state=active]:bg-primary-50 data-[orientation=vertical]:data-[state=active]:hover:bg-primary-50 data-[orientation=vertical]:hover:bg-primary-50/50 !rounded-none"
              >
                Trash
              </Tab.Trigger>
              <div className="dark:bg-secondary-700 bg-secondary-200 !my-4 mx-auto h-[1px] w-4/5" />
            </Tab.List>
            <div className="mx-auto w-full">
              <Tab.Content value="Home"></Tab.Content>
              <Tab.Content value="SiteFiles"></Tab.Content>
              <Tab.Content value="Trash"></Tab.Content>
            </div>
          </Tab.Root>
        </Dialog.Content>
      </Dialog.Root>
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
