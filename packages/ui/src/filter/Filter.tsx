"use client";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
  type FieldValues,
  FormProvider,
  type UseFieldArrayRemove,
  type UseFormRegister,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Button } from "../button";
import { InputField } from "../input-field";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "../menu";
import { Select, SelectItem } from "../select";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

const OPTIONS = [
  {
    value: "A",
    label: "<",
  },
  {
    value: "B",
    label: "<=",
  },
  {
    value: "C",
    label: ">",
  },
  {
    value: "D",
    label: ">=",
  },
  {
    value: "E",
    label: "=",
  },
  {
    value: "F",
    label: "!=",
  },
  {
    value: "G",
    label: "is",
  },
  {
    value: "H",
    label: "is not",
  },
  {
    value: "I",
    label: "includes",
  },
  {
    value: "J",
    label: "does not include",
  },
  {
    value: "K",
    label: "is true",
  },
  {
    value: "L",
    label: "is false",
  },
  {
    value: "M",
    label: "is empty",
  },
  {
    value: "N",
    label: "is not empty",
  },
  {
    value: "O",
    label: "intersects",
  },
  {
    value: "P",
    label: "is one of",
  },
  {
    value: "Q",
    label: "is none of",
  },
  {
    value: "R",
    label: "is before",
  },
  {
    value: "S",
    label: "is after",
  },
];

export type Filter = {
  hidden?: ValueOrFunction;
  className?: string;
};

export function Filter({ hidden, className }: Filter) {
  const methods = useForm();
  const { register, reset } = methods;
  const [length, setLength] = useState<number>();

  const isHidden = getValue(hidden);

  const getLength = (value: number) => {
    setLength(value);
  };

  return (
    <FormProvider {...methods}>
      <div
        className={classNames("w-full space-y-3 p-4", className)}
        hidden={isHidden}
      >
        <FilterGroup
          register={register}
          currentDepth={0}
          getLength={getLength}
        />
        {length !== 0 && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => reset({ filter_0: [] })}
          >
            Clear
          </Button>
        )}
      </div>
    </FormProvider>
  );
}

type ItemType = {
  conditionInput: string;
  conditionSelect: string;
  valueInput: string;
};

export function FilterGroup({
  register,
  currentDepth,
  getLength,
  groupValues,
}: {
  register: UseFormRegister<FieldValues>;
  currentDepth: number;
  getLength?: (value: number) => void;
  groupValues?: ItemType[];
}) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `filter_${currentDepth}`,
  });

  useEffect(() => {
    getLength?.(fields.length);
  }, [fields.length, getLength]);

  return (
    <div className="w-full space-y-3">
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2">
          {index === 0 ? "Where" : "And"}
          <div className="space-y-3">
            <FilterItem
              register={register}
              index={index}
              remove={remove}
              currentDepth={currentDepth}
            />
            {field.type === "group" && (
              <FilterGroup
                register={register}
                currentDepth={currentDepth + 1}
                groupValues={field.items}
              />
            )}
          </div>
        </div>
      ))}
      <Menu>
        <MenuTrigger
          variant="ghost"
          size="sm"
          rightIcon={<ChevronDownIcon className="size-4 stroke-2" />}
        >
          Add
        </MenuTrigger>
        <MenuContent>
          <MenuItem onClick={() => append({ type: "rule", options: "I" })}>
            Add filter rule
          </MenuItem>
          <MenuItem
            onClick={() => {
              append({
                type: "group",
                options: "I",
              });
            }}
          >
            Add filter group
          </MenuItem>
        </MenuContent>
      </Menu>
    </div>
  );
}
function FilterItem({
  register,
  index,
  remove,
  currentDepth,
}: {
  register: UseFormRegister<FieldValues>;
  index: number;
  remove: UseFieldArrayRemove;
  currentDepth: number;
}) {
  return (
    <div className={classNames("flex w-full items-center gap-2")}>
      <InputField {...register(`filter_${currentDepth}.${index}.inp1`)} />
      <Select
        {...register(`filter_${currentDepth}.${index}.options`)}
        className="w-full"
      >
        {OPTIONS.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </Select>
      <InputField {...register(`filter_${currentDepth}.${index}.inp2`)} />
      <Button size="icon" variant="ghost" onClick={() => remove(index)}>
        <XMarkIcon className="size-4 stroke-2 text-red-500" />
      </Button>
    </div>
  );
}
