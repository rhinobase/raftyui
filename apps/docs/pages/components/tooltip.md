---
title: Tooltip
pageTitle: Tooltip - Rafty UI
description: Tooltip
---

## Import

A tooltip is a brief, informative message that appears when a user interacts with an element.

- Tooltip

```jsx
import { Tooltip } from "@rafty/ui";
```

## Usage

```jsx
<Tooltip content="Hover me">
  <Button size="fab">
    <PlusIcon className="h-6 w-6" />
  </Button>
</Tooltip>
```

## Side

Using the `side` prop you can adjust where your tooltip will be displayed.Vales can be `top, right, bottom, left`.

```jsx
<Tooltip side="top" content="Hover me">
  <Button size="fab">
    <PlusIcon className="h-6 w-6" />
  </Button>
</Tooltip>
<Tooltip side="right" content="Hover me">
  <Button size="fab">
    <PlusIcon className="h-6 w-6" />
  </Button>
</Tooltip>
<Tooltip side="bottom" content="Hover me">
  <Button size="fab">
    <PlusIcon className="h-6 w-6" />
  </Button>
</Tooltip>
<Tooltip side="left" content="Hover me">
  <Button size="fab">
    <PlusIcon className="h-6 w-6" />
  </Button>
</Tooltip>
```

## Align

Using the `align` prop you can adjust the alignment of tooltip. Vales can be `center, start, end`.

```jsx

<Tooltip align="center" content="Hover me">
  <Button size="fab">
    <PlusIcon className="h-6 w-6" />
  </Button>
</Tooltip>
<Tooltip align="start" content="Hover me">
  <Button size="fab">
    <PlusIcon className="h-6 w-6" />
  </Button>
</Tooltip>
<Tooltip align="end" content="Hover me">
  <Button size="fab">
    <PlusIcon className="h-6 w-6" />
  </Button>
</Tooltip>
```
