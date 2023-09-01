---
title: ComboBox
pageTitle: ComboBox - Rafty UI
description: ComboBox
---

## Anatomy

Import all parts and piece them together.

```jsx
import { Popover, PopoverTrigger, Avatar, PopoverContent, Command, CommandList, CommandGroup, CommandItem, CommandLoading, Spinner, Text, CommandEmpty } from "@rafty/ui";

<Popover>
  <PopoverTrigger>
    <Avatar />
  </PopoverTrigger>
  <PopoverContent>
    <Command>
      <CommandList>
        <CommandGroup>
          <CommandItem />
          <CommandLoading>
            <Spinner />
            <Text />
          </CommandLoading>
          <CommandEmpty />
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>;
```

## Usage

{% example name="combobox:usage" /%}
