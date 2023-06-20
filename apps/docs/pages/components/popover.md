---
title: Popover
pageTitle: Popover - Rafty UI
description: Popover
---

## Import

Displays rich content in a portal, triggered by a button.

```jsx
import { Popover, PopoverTrigger, PopoverContent } from "@rafty/ui";
```

## Usage

```jsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>
    <div>Popover Content</div>
  </PopoverContent>
</Popover>
```

## Default Open

To Open Popover By Default pass `defaultOpen` prop.

```jsx
<Popover defaultOpen>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>
    <div>Popover Content</div>
  </PopoverContent>
</Popover>
```
