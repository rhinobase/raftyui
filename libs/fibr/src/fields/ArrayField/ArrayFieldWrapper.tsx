"use client";
import { Button, classNames } from "@rafty/ui";
import { useFieldArray, useFormContext } from "react-hook-form";
import { HiArrowDown, HiArrowUp, HiPlus, HiTrash } from "react-icons/hi";

type ArrayFieldWrapper = {
  name: string;
  isSortable?: boolean;
  children: (props: { index: number }) => JSX.Element;
  className?: string;
};

export function ArrayFieldWrapper({
  name,
  isSortable = true,
  children: Component,
}: ArrayFieldWrapper) {
  const { control } = useFormContext();
  const { fields, append, remove, insert, move } = useFieldArray({
    control,
    name: name,
  });

  return (
    <>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className={classNames(
            "border-secondary-200 dark:bg-secondary-900 flex min-h-[120px] items-center gap-2 rounded-md border px-2 py-1 dark:border-white/30",
          )}
        >
          {isSortable && (
            <div className="space-y-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => move(index, index - 1)}
                isDisabled={index === 0}
              >
                <HiArrowUp />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => move(index, index + 1)}
                isDisabled={index === fields.length - 1}
              >
                <HiArrowDown />
              </Button>
            </div>
          )}
          <Component index={index} />
          <div className="space-y-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => insert(index + 1, null)}
            >
              <HiPlus />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => remove(index)}>
              <HiTrash className="text-red-500" />
            </Button>
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        onClick={() => append(null)}
        leftIcon={<HiPlus />}
        className="mt-2 w-max"
      >
        Add
      </Button>
    </>
  );
}
