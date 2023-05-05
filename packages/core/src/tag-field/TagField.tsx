import { forwardRef, useEffect, useState } from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import { classNames } from "../utils";

export type TagField = Omit<JSX.IntrinsicElements["input"], "onChange"> & {
  initialData?: string[];
  onChange?: (tags: string[]) => void;
};
export const TagField = forwardRef<HTMLInputElement, TagField>(
  ({ className, initialData, onChange, ...props }, forwardedRef) => {
    const [tag, setTag] = useState<string[]>(initialData ?? []);

    useEffect(() => {
      if (onChange) onChange(tag);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tag]);

    return (
      <div className={classNames("w-full", className)}>
        <div className="flex w-full items-center gap-2">
          <InputField
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                event.preventDefault();
                const data = event.currentTarget.value.trim();
                if (data.length != 0 && data != " ") {
                  const tmp = [...new Set<string>([...tag, data])];
                  setTag(tmp);
                }
                event.currentTarget.value = "";
              }
            }}
            {...props}
            ref={forwardedRef}
          />
          <Button
            variant="ghost"
            onClick={() => setTag([])}
            hidden={tag.length < 2}
          >
            Clear All
          </Button>
        </div>
        <div className="my-1.5 flex min-h-fit flex-wrap items-center justify-center gap-x-2">
          {tag.map((value, idx) => (
            <div
              key={value}
              className={
                "bg-secondary-100 dark:bg-secondary-800 my-1 flex items-center justify-center gap-1 rounded-md py-[2px] pl-3 pr-[2px] font-semibold dark:text-zinc-100"
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
      </div>
    );
  }
);

TagField.displayName = "TagField";
