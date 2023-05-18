import { useEffect, useState } from "react";
import { Button } from "@rhino/button";
import { InputField } from "@rhino/input";
import { classNames } from "@rhino/utils";
import { AriaTextFieldProps } from "react-aria";
import { XMarkIcon } from "@heroicons/react/24/outline";

export type TagField = Omit<AriaTextFieldProps, "onChange" | "size"> & {
  initialData?: string[];
  onChange?: (tags: string[]) => void;
  className?: string;
};

export const TagField = ({
  className,
  initialData,
  onChange,
  ...props
}: TagField) => {
  const [tag, setTag] = useState<string[]>(initialData ?? []);

  useEffect(() => {
    if (onChange) onChange(tag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  return (
    <div className={classNames("w-full", className)}>
      <div className="flex w-full items-center gap-2">
        <InputField
          {...props}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              const data = event.currentTarget.value.trim();
              if (data.length !== 0 && data !== " ") {
                const tmp = [...new Set<string>([...tag, data])];
                setTag(tmp);
              }
              event.currentTarget.value = "";
            }
          }}
        />
        <Button
          variant="ghost"
          onClick={() => setTag([])}
          className={tag.length < 2 ? "!hidden" : ""}
        >
          Clear All
        </Button>
      </div>
      <div className="my-1.5 flex min-h-fit flex-wrap items-center justify-center gap-x-2">
        {tag.map((value, idx) => (
          <div
            key={idx}
            className={
              "bg-secondary-100 dark:bg-secondary-800 my-1 flex items-center justify-center gap-1 rounded-md py-[2px] pl-3 pr-[2px] font-semibold dark:text-zinc-100"
            }
          >
            <span className="leading-[0px]">{value}</span>
            <Button
              onClick={() => {
                setTag((prev) => {
                  prev.splice(
                    prev.findIndex((item) => item === value),
                    1
                  );
                  return [...prev];
                });
              }}
              colorScheme="error"
              variant="ghost"
              size="sm"
              className="!text-secondary-400 hover:!text-error-500 !p-[1px]"
            >
              <XMarkIcon className="h-3.5 w-3.5 stroke-[2]" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

TagField.displayName = "TagField";
