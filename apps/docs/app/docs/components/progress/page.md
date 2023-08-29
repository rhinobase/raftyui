---
title: Progress
pageTitle: Progress - Rafty UI
description: Progress
---

## Import

Progress is used to display the progress status for a task that takes a long time or consists of several steps.

```jsx
import { Progress } from "@rafty/ui";
```

## Usage

{% example name="progress:usage" /%}

## size

Pass the `size` prop if you need to adjust the size of the progress. Values can be `sm`, `md`, `lg`.

{% example name="progress:size" /%}

## colorScheme

Pass the `colorScheme` prop to change the color of the progess. You can set the value to `primary`, `error`, `success`, `warning`.

{% example name="progress:colorscheme" /%}

### API

---

### Root

| Property        | Description | Type                                        | Default |
| --------------- | ----------- | ------------------------------------------- | ------- |
| className       |             | `string`                                    |         |
| size            |             | `sm` \ `md` \ `lg`                          | `md`    |
| isIndeterminate |             | `boolean`                                   |         |
| colorScheme     |             | `primary"` \ `warning`\ `success` \ `error` |         |
