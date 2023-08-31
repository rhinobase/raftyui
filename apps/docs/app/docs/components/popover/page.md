---
title: Popover
pageTitle: Popover - Rafty UI
description: Popover
---

## Import

Displays rich content in a portal, triggered by a button.

```jsx
import { Popover, PopoverTrigger, PopoverContent } from "@rafty/ui";

() => (
  <Popover>
    <PopoverTrigger />
    <PopoverContent>
      <PopverClose />
    </PopoverContent>
  </Popover>
);
```

## Usage

{% example name="popover:usage" /%}

## Default Open

To Open Popover By Default pass `defaultOpen` prop.

{% example name="popover:default" /%}

## Barebone

Pass `isBarebone` prop to remove all style in popover.
{% example name="popover:barebone" /%}

### API

---

### Root

| Property   | Description | Type      | Default |
| ---------- | ----------- | --------- | ------- |
| isBarebone |             | `boolean` | false   |

### Trigger

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |
