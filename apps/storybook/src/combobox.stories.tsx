import * as React from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
} from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Form / Combobox",
};

export default meta;

type Story = StoryObj;

const FRAMEWORK = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export const Default: Story = {
  render: function Render() {
    const [isOpen, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
      <Popover open={isOpen} onOpenChange={setOpen}>
        <PopoverTrigger
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-full justify-between"
          rightIcon={
            <ChevronUpDownIcon
              className={classNames(
                isOpen
                  ? "text-primary-500"
                  : "text-secondary-500 dark:text-secondary-400",
                "h-4 w-4 shrink-0 stroke-2"
              )}
            />
          }
        >
          {value
            ? FRAMEWORK.find((framework) => framework.value === value)?.label
            : "Select framework..."}
        </PopoverTrigger>
        <PopoverContent className="!w-[760px] !p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {FRAMEWORK.map((framework) => (
                <CommandItem
                  key={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    className={classNames(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
};
