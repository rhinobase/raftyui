---
title: Progress
pageTitle: Progress - Rafty UI
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
---

Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

This component is made on top of [Radix UIs Progress Component](https://www.radix-ui.com/primitives/docs/components/progress) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { Progress } from "@rafty/ui";

<Progress />;
```

## Usage

{% example name="progress:usage" /%}

## size

There are 3 `size` options in progress: `sm`, `md` (default) & `lg`.

{% example name="progress:size" /%}

## colorScheme

There are 4 `colorScheme` options in progress: `primary` (default), `error`, `warning` & `success`.

{% example name="progress:colorscheme" /%}
