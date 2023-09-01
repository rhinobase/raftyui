import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Dialog, DialogContent } from "../dialog";
import { classNames } from "../utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Command Component
export type Command = React.ComponentPropsWithoutRef<typeof CommandPrimitive>;

export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  Command
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive
    {...props}
    className={classNames(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white dark:bg-secondary-800 dark:text-secondary-100",
      className,
    )}
    ref={forwardedRef}
  />
));
Command.displayName = "Command";

// CommandDialog Component
export type CommandDialog = Dialog;

export const CommandDialog = ({ children, ...props }: CommandDialog) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-secondary-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};
CommandDialog.displayName = "CommandDialog";

// CommandInput Component
export type CommandInput = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
>;

export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  CommandInput
>(({ className, ...props }, forwardedRef) => (
  <div className="flex items-center border-b dark:border-secondary-700 px-3">
    <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 text-secondary-500 dark:text-secondary-400" />
    <CommandPrimitive.Input
      {...props}
      className={classNames(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-secondary-500 dark:placeholder:text-secondary-400 disabled:cursor-not-allowed disabled:opacity-50 dark:text-secondary-100",
        className,
      )}
      ref={forwardedRef}
    />
  </div>
));
CommandInput.displayName = "CommandInput";

// CommandList Component
export type CommandList = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
>;

export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandList
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive.List
    {...props}
    className={classNames(
      "max-h-[300px] overflow-y-auto overflow-x-hidden",
      className,
    )}
    ref={forwardedRef}
  />
));
CommandList.displayName = "CommandList";

// CommandLoading Component
export const CommandLoading = CommandPrimitive.Loading;
CommandLoading.displayName = "CommandLoading";

// CommandEmpty Component
export type CommandEmpty = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Empty
>;

export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  CommandEmpty
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive.Empty
    {...props}
    className={classNames("py-6 text-center text-sm", className)}
    ref={forwardedRef}
  />
));
CommandEmpty.displayName = "CommandEmpty";

// CommandGroup Component
export type CommandGroup = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Group
>;

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  CommandGroup
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive.Group
    {...props}
    className={classNames(
      "overflow-hidden p-1 text-secondary-800 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-secondary-500 [&_[cmdk-group-heading]]:dark:text-secondary-400 dark:text-secondary-100",
      className,
    )}
    ref={forwardedRef}
  />
));
CommandGroup.displayName = "CommandGroup";

// CommandSeparator Component
export type CommandSeparator = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Separator
>;

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparator
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive.Separator
    {...props}
    className={classNames(
      "mx-2 h-px bg-secondary-200 dark:bg-secondary-700",
      className,
    )}
    ref={forwardedRef}
  />
));
CommandSeparator.displayName = "CommandSeparator";

// CommandItem Component
export type CommandItem = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Item
>;

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItem
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive.Item
    {...props}
    className={classNames(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-secondary-100 dark:aria-selected:bg-secondary-700 aria-selected:text-secondary-900 dark:aria-selected:text-secondary-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-secondary-100",
      className,
    )}
    ref={forwardedRef}
  />
));
CommandItem.displayName = "CommandItem";

// CommandShortcut Component
export type CommandShortcut = React.HTMLAttributes<HTMLSpanElement>;

export const CommandShortcut = React.forwardRef<
  HTMLSpanElement,
  CommandShortcut
>(({ className, ...props }, forwardedRef) => (
  <span
    {...props}
    className={classNames(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className,
    )}
    ref={forwardedRef}
  />
));
CommandShortcut.displayName = "CommandShortcut";
