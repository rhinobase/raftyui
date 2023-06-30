// import { useRef } from "react";
// import type { ComboBoxProps } from "@react-types/combobox";
// import { useComboBoxState } from "react-stately";
// import { useComboBox, useButton } from "react-aria";
// import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
// import { InputField, InputGroup, Suffix } from "../input";
// import { Button } from "../button";
// import { PopoverContent } from "../popover";
// // import { ListBox } from "../select";
// import { Spinner } from "../spinner";

// export {
//   Item as ComboboxItem,
//   Section as ComboboxSection,
// } from "react-stately";

// export type Combobox<T> = ComboBoxProps<T> & {
//   size?: "sm" | "md" | "lg";
//   variant?: "solid" | "outline" | "ghost";
//   isLoading?: boolean;
// };

// export function Combobox<T extends object>({
//   size = "md",
//   variant = "outline",
//   isLoading = false,
//   ...props
// }: Combobox<T>) {
//   const state = useComboBoxState({
//     ...props,
//     allowsEmptyCollection: true,
//   });

//   // Used by combobox
//   const buttonRef = useRef(null);
//   const inputRef = useRef(null);
//   const listBoxRef = useRef(null);
//   const popoverRef = useRef(null);

//   const {
//     buttonProps: triggerProps,
//     inputProps,
//     listBoxProps,
//   } = useComboBox(
//     {
//       ...props,
//       inputRef,
//       buttonRef,
//       popoverRef,
//       listBoxRef,
//       menuTrigger: "focus",
//     },
//     state
//   );

//   const { buttonProps } = useButton(triggerProps, buttonRef);

//   return (
//     <div className="relative" ref={popoverRef}>
//       <InputGroup>
//         <InputField
//           {...inputProps}
//           size={size}
//           variant={variant}
//           ref={inputRef}
//           onClickCapture={() => state.open()}
//         />
//         <Suffix>
//           {isLoading && (
//             <Spinner size="sm" className="absolute right-10 top-2.5" />
//           )}
//           <Button
//             {...buttonProps}
//             ref={buttonRef}
//             isActive={state.isOpen}
//             size="sm"
//             variant="ghost"
//             className="!z-[1] !p-1"
//           >
//             <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
//           </Button>
//         </Suffix>
//       </InputGroup>
//       {/* <PopoverContent
//         triggerState={state}
//         triggerRef={popoverRef}
//         scrollRef={listBoxRef}
//         isNonModal
//         placement="bottom start"
//         className="-ml-3 w-full"
//       >
//         <ListBox
//           {...listBoxProps}
//           listBoxRef={listBoxRef}
//           autoFocus={state.focusStrategy}
//           shouldSelectOnPressUp
//           state={state}
//           shouldUseVirtualFocus
//           size={size}
//         />
//       </PopoverContent> */}
//     </div>
//   );
// }

import * as React from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
} from "@rafty/ui";

const frameworks = [
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

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] !p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
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
}
