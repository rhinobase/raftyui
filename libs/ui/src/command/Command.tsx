"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Command as CommandPrimitive } from "cmdk";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import { Dialog, DialogContent } from "../dialog";
import { classNames } from "../utils";

// Command Component
export type Command = ComponentPropsWithoutRef<typeof CommandPrimitive>;

export const Command = forwardRef<ElementRef<typeof CommandPrimitive>, Command>(
  ({ className, ...props }, forwardedRef) => (
    <CommandPrimitive
      {...props}
      className={classNames(
        "dark:bg-secondary-800 dark:text-secondary-100 flex h-full w-full flex-col overflow-hidden rounded-md bg-white",
        className,
      )}
      ref={forwardedRef}
    />
  ),
);
Command.displayName = "Command";

// CommandDialog Component
export type CommandDialog = Dialog;

export const CommandDialog = ({ children, ...props }: CommandDialog) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:text-secondary-500 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};
CommandDialog.displayName = "CommandDialog";

// CommandInput Component
export type CommandInput = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
>;

export const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  CommandInput
>(({ className, ...props }, forwardedRef) => (
  <div className="dark:border-secondary-700 flex items-center border-b px-3">
    <MagnifyingGlassIcon className="text-secondary-500 dark:text-secondary-400 mr-2 h-4 w-4 shrink-0" />
    <CommandPrimitive.Input
      {...props}
      className={classNames(
        "placeholder:text-secondary-500 dark:placeholder:text-secondary-400 dark:text-secondary-100 flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={forwardedRef}
    />
  </div>
));
CommandInput.displayName = "CommandInput";

// CommandList Component
export type CommandList = ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
>;

export const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
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
export type CommandEmpty = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Empty
>;

export const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
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
export type CommandGroup = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Group
>;

export const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  CommandGroup
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive.Group
    {...props}
    className={classNames(
      "text-secondary-800 [&_[cmdk-group-heading]]:text-secondary-500 [&_[cmdk-group-heading]]:dark:text-secondary-400 dark:text-secondary-100 overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      className,
    )}
    ref={forwardedRef}
  />
));
CommandGroup.displayName = "CommandGroup";

// CommandSeparator Component
export type CommandSeparator = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Separator
>;

export const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparator
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive.Separator
    {...props}
    className={classNames(
      "bg-secondary-200 dark:bg-secondary-700 mx-2 h-px",
      className,
    )}
    ref={forwardedRef}
  />
));
CommandSeparator.displayName = "CommandSeparator";

// CommandItem Component
export type CommandItem = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Item
>;

export const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  CommandItem
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive.Item
    {...props}
    className={classNames(
      "aria-selected:bg-secondary-100 dark:aria-selected:bg-secondary-700 aria-selected:text-secondary-900 dark:aria-selected:text-secondary-100 dark:text-secondary-100 relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    ref={forwardedRef}
  />
));
CommandItem.displayName = "CommandItem";

// CommandShortcut Component
export type CommandShortcut = HTMLAttributes<HTMLSpanElement>;

export const CommandShortcut = forwardRef<HTMLSpanElement, CommandShortcut>(
  ({ className, ...props }, forwardedRef) => (
    <span
      {...props}
      className={classNames(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className,
      )}
      ref={forwardedRef}
    />
  ),
);
CommandShortcut.displayName = "CommandShortcut";
