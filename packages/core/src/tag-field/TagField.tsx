import { forwardRef, useState } from "react";
import { classNames } from "@rhinobase/utils";
import { Button } from "../button";
import React from "react";

export type TagField = JSX.IntrinsicElements["input"];
export const TagField = forwardRef<HTMLInputElement, TagField>(
  ({ defaultValue, className, ...props }, forwardedRef) => {
    const [tag, setTag] = useState<string[]>([]);

    return (
      <>
        <input
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              event.preventDefault();
              const data = event.currentTarget.value;
              // console.log(typeof(data))
              const tmp = [
                ...new Set<string>([
                  ...tag,
                  ...data
                    .split(/[ ,.]+/)
                    .filter(
                      (word) => word.length != 0 && !"[]()./".includes(word)
                    )
                    .map((word) => word.toLowerCase()),
                ]),
              ];
              setTag(tmp);
              event.currentTarget.value = "";
            }
          }}
          {...props}
          className={classNames(
            "px-lg py-base dark:text-secondary-200 block w-full appearance-none rounded-md border bg-transparent shadow-sm autofill:bg-transparent dark:border-zinc-700",
            "focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-500/30 dark:focus:border-primary-300 focus:outline-none focus:ring-2",
            "read-only:focus:ring-0",
            "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
            className
          )}
          ref={forwardedRef}
        />
        <div className="my-7 flex min-h-fit items-center justify-center gap-1">
          {tag.map((value, idx) => (
            <div
              className={
                "py-sm pl-lg pr-sm bg-secondary-100 dark:bg-secondary-800 my-1 flex items-center justify-center gap-1 rounded-md font-semibold dark:text-zinc-100"
              }
            >
              <span className="leading-[0px]">{value}</span>
              <Button
                onClick={() => {
                  setTag((prev) => {
                    prev.splice(
                      prev.findIndex((item) => item == value),
                      1
                    );
                    return [...prev];
                  });
                }}
                key={idx}
                colorScheme="error"
                variant="ghost"
                className="!text-secondary-400 hover:!text-error-500 !p-[1px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </>
    );
  }
);
