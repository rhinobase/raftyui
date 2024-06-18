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

Displays an indicator showing the completion Progress of a task, typically displayed as a Progress bar.

This component is made on top of [Ark Progress Linear](https://ark-ui.com/react/docs/components/progress-linear) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { Progress } from "@rafty/ui";

<Progress />;
```

```jsx
import { CircularProgress } from "@rafty/ui";

<CircularProgress />;
```

## Linear Usage

{% example %}

```jsx
<Progress />
```

{% /example %}

## Linear Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="w-full space-y-3">
  <Progress value={70} size="sm" />
  <Progress value={40} size="md" />
  <Progress value={50} size="lg" />
</div>
```

{% /example %}

## Linear ColorScheme

There are 5 `colorScheme` options available: `"primary"` (default), `"error"`, `"warning"`, `"secondary"` & `"success"`.

{% example %}

```jsx
<div className="w-full space-y-3">
  <Progress value={70} colorScheme="primary" />
  <Progress value={40} colorScheme="error" />
  <Progress value={60} colorScheme="success" />
  <Progress value={50} colorScheme="warning" />
  <Progress value={50} colorScheme="secondary" />
</div>
```

{% /example %}

## Circular Progress

{% example %}

```jsx
<CircularProgress />
```

{% /example %}

## Circular Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="flex w-full items-center gap-3">
  <CircularProgress value={70} size="sm" />
  <CircularProgress value={40} size="md" />
  <CircularProgress value={50} size="lg" />
</div>
```

{% /example %}

## Circular ColorScheme

There are 5 `colorScheme` options available: `"primary"` (default), `"error"`, `"warning"`, `"secondary"` & `"success"`.

{% example %}

```jsx
<div className="flex w-full items-center gap-3">
  <CircularProgress value={70} colorScheme="primary" />
  <CircularProgress value={40} colorScheme="error" />
  <CircularProgress value={60} colorScheme="success" />
  <CircularProgress value={50} colorScheme="warning" />
  <CircularProgress value={50} colorScheme="secondary" />
</div>
```

{% /example %}

---

## Props

### Progress

This component is built on top of [Ark Progress Linear](https://ark-ui.com/react/docs/components/progress-linear#api-reference)

| Property    | Description                     | Type                                                                                   | Default     |
| ----------- | ------------------------------- | -------------------------------------------------------------------------------------- | ----------- |
| size        | Size of the progress component. | `"sm"` or `"md"` or `"lg"` or `undefined`                                              | `"md"`      |
| colorScheme | Color scheme of the component.  | `"primary"` or `"warning"` or `"error"` or `"success"` or `"secondary"` or `undefined` | `"primary"` |

### CircularProgress

This component is built on top of [Ark Progress Circular](https://ark-ui.com/react/docs/components/progress-circular#api-reference)

| Property    | Description                              | Type                                                                                   | Default     |
| ----------- | ---------------------------------------- | -------------------------------------------------------------------------------------- | ----------- |
| size        | Size of the circular progress component. | `"sm"` or `"md"` or `"lg"` or `undefined`                                              | `"md"`      |
| colorScheme | Color scheme of the component.           | `"primary"` or `"warning"` or `"error"` or `"success"` or `"secondary"` or `undefined` | `"primary"` |
