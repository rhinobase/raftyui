---
title: ComboBox
pageTitle: ComboBox - Rafty UI
description: ComboBox
---

## Anatomy

Import all parts and piece them together.

```jsx
import { Popover, PopoverTrigger, Avatar, PopoverContent, Command, CommandList, CommandGroup, CommandItem, Text, CommandEmpty } from "@rafty/ui";

<Popover>
  <PopoverTrigger>
    <Avatar />
  </PopoverTrigger>
  <PopoverContent>
    <Command>
      <CommandList>
        <CommandGroup>
          <CommandItem>
            <Text />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>;
```

## Usage

{% example name="combobox:usage" /%}
