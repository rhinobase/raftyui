---
title: Progress
nextjs:
  metadata:
    title: Progress
    description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
    twitter:
      title: Progress
      images:
        url: https://rafty.rhinobase.io/api/og?title=Progress
    openGraph:
      title: Progress
      images:
        url: https://rafty.rhinobase.io/api/og?title=Progress
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

## Size

There are 3 `size` options in progress: `sm`, `md` (default) & `lg`.

{% example name="progress:size" /%}

## ColorScheme

There are 4 `colorScheme` options in progress: `primary` (default), `error`, `warning` & `success`.

{% example name="progress:colorscheme" /%}

## Props

---

### Progress

This component is built on top of [Radix Progress](https://www.radix-ui.com/primitives/docs/components/progress#root)

| Property           | Description                                       | Type                                                   | Default     |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------ | ----------- |
| size               | Size of the progress component.                   | `"sm"` or `"md"` or `"lg"`                             | `"md"`      |
| colorScheme        | Color scheme of the component.                    | `"primary"` or `"warning"` or `"error"` or `"success"` | `"primary"` |
| value              | Value associated with the component.              | `number`                                               | -           |
| indicatorClassName | Additional class names for the indicator element. | `string`                                               | -           |
