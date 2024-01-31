import { CommandEmpty, CommandList } from "@rafty/ui";
import { useId } from "react";
import { useComboboxContext } from "../context";
import { InternalOptionsRender } from "./InternalOptionsRender";

export function InternalContentRender() {
  const { options } = useComboboxContext();
  const key = useId();

  return (
    <CommandList className="p-1">
      {options.map((option, index) => (
        <InternalOptionsRender key={`${index}-${key}`} {...option} />
      ))}
      <CommandEmpty>No data found</CommandEmpty>
    </CommandList>
  );
}
