import { CheckIcon } from "@heroicons/react/24/outline";
import { CommandGroup, CommandItem } from "@rafty/ui";
import type { RangeTuple } from "fuse.js";
import { type ReactNode, useId } from "react";
import { useComboboxContext } from "../context";
import type { ComboboxOptionType } from "../types";

export function InternalOptionsRender({
  option: { label, value, matches },
}: {
  option: ComboboxOptionType;
  index: number;
}) {
  const key = useId();
  const { selected, onSelectionChange } = useComboboxContext();

  if (Array.isArray(value))
    return (
      <CommandGroup heading={label} className="p-0">
        {value.map((val, index) => (
          <InternalOptionsRender
            key={`${index}-${key}`}
            option={val}
            index={index}
          />
        ))}
      </CommandGroup>
    );

  // Checking if the current value is selected
  const isSelected = selected.findIndex((val) => val === value) !== -1;
  return (
    <CommandItem onSelect={() => onSelectionChange(value)}>
      {highlightMatches(label, matches)}
      {isSelected && (
        <>
          <span className="flex-1" />
          <CheckIcon className="stroke-primary-500 dark:stroke-primary-300 size-3.5 min-h-3.5 min-w-3.5 stroke-2" />
        </>
      )}
    </CommandItem>
  );
}

function highlightMatches(
  inputText: string,
  regions: readonly RangeTuple[] = [],
) {
  const children: ReactNode[] = [];
  let nextUnhighlightedRegionStartingIndex = 0;

  regions.forEach((region, i) => {
    const lastRegionNextIndex = region[1] + 1;

    children.push(
      ...[
        inputText
          .substring(nextUnhighlightedRegionStartingIndex, region[0])
          .replace(" ", "\u00A0"),
        <span key={`${i}-${region}`} className="bg-yellow-200/80">
          {inputText
            .substring(region[0], lastRegionNextIndex)
            .replace(" ", "\u00A0")}
        </span>,
      ],
    );

    nextUnhighlightedRegionStartingIndex = lastRegionNextIndex;
  });

  children.push(
    inputText
      .substring(nextUnhighlightedRegionStartingIndex)
      .replace(" ", "\u00A0"),
  );

  return children;
}
