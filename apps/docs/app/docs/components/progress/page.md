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

{% example %}

```jsx
<Progress size="lg" value={80} colorScheme="primary" className="w-full" />
```

{% /example %}

## Size

There are 3 `size` options in progress: `sm`, `md` (default) & `lg`.

{% example %}

```jsx
<div className="w-full space-y-3">
  <Progress value={70} size="sm" />
  <Progress value={40} size="md" />
  <Progress value={50} size="lg" />
</div>
```

{% /example %}

## ColorScheme

There are 4 `colorScheme` options in progress: `primary` (default), `error`, `warning` & `success`.

{% example %}

```jsx
<div className="w-full space-y-3">
  <Progress value={70} colorScheme="primary" />
  <Progress value={40} colorScheme="error" />
  <Progress value={60} colorScheme="success" />
  <Progress value={50} colorScheme="warning" />
</div>
```

{% /example %}

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
