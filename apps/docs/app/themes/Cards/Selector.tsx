"use state";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Command,
  CommandGroup,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
} from "@rafty/ui";
import { ReactNode, useEffect, useRef, useState } from "react";

type Selector = {
  value: string;
  children: ReactNode;
};

export function Selector({ value, children }: Selector) {
  const triggerRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    // @ts-ignore
    setContentWidth(triggerRef.current?.offsetWidth);
  }, []);

  return (
    <Popover open={isOpen} onOpenChange={setOpen} modal>
      <PopoverTrigger
        variant="outline"
        role="combobox"
        aria-expanded={isOpen}
        className="w-full justify-between capitalize"
        rightIcon={
          <ChevronUpDownIcon
            height={16}
            width={16}
            className={classNames(
              isOpen
                ? "text-primary-500"
                : "text-secondary-500 dark:text-secondary-400",
              "shrink-0 stroke-2",
            )}
          />
        }
        ref={triggerRef}
      >
        {value}
      </PopoverTrigger>
      <PopoverContent
        className="p-0"
        style={{ width: contentWidth, maxWidth: "none" }}
      >
        <Command shouldFilter={false}>
          <CommandList className="max-h-full">
            <CommandGroup>{children}</CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
