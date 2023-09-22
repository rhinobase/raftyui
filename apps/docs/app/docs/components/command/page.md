---
title: Command
nextjs:
  metadata:
    title: Command
    description: The Command component in React can function as a menu and also serves as an accessible combobox.
---

The Command component in React can function as a menu and also serves as an accessible combobox.

When you render items with it, it automatically filters and sorts them. It offers a fully composable API, allowing you to wrap items in other components or even use static JSX. This component is made on top of [CMDKs Command Component](https://cmdk.paco.me/) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import {
  Command,
  CommandList,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandSeparator
  CommandItem,
  CommandDialog,
  CommandShortcut,
  CommandLoading

} from "@rafty/ui";

 <Command>
     <CommandDialog>
     <CommandInput />
      <CommandList>
      <CommandLoading/>
        <CommandEmpty />
        <CommandGroup>
          <CommandItem>
            <CommandShortcut />
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
      </CommandDialog>
    </Command>
```

## Usage

{% example name="command:usage" /%}
