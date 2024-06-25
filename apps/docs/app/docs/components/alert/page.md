---
title: Alert
nextjs:
  metadata:
    title: Alert
    description: An alert displays a short, important message in a way that captures the user's attention without disrupting the ongoing task.
    twitter:
      title: Alert
      images:
        url: https://rafty.rhinobase.io/api/og?title=Alert
    openGraph:
      title: Alert
      images:
        url: https://rafty.rhinobase.io/api/og?title=Alert
---

An Alert displays a short, important message in a way that captures the user's attention without disrupting the ongoing task.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props. If you wish to apply your own styling you can use the `isUnstyled` prop on root element (to remove styling from root component as well as from all its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from that particular sub-component).

## Anatomy

Import all parts and piece them together.

```jsx
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@rafty/ui";

<Alert>
  <AlertIcon />
  <AlertTitle />
  <AlertDescription />
</Alert>;
```

## Usage

{% example %}

```jsx
<Alert>
  <AlertIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Alert size="sm">
  <AlertIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

{% /example %}

## Status

There are 4 `status` options available: `"success"`, `"warning"`, `"error"` & `"info"` (default).

{% example %}

```jsx
<div className="w-full space-y-4">
  <Alert>
    <AlertIcon />
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </Alert>
  <Alert status="success">
    <AlertIcon />
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </Alert>
  <Alert status="warning">
    <AlertIcon />
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </Alert>
  <Alert status="error">
    <AlertIcon />
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </Alert>
</div>
```

{% /example %}

## Variant

There are 4 `variant` options available: `"simple"` (default), `"solid"`, `"left-accent"` & `"top-accent"`.

{% example %}

```jsx
<div className="w-full space-y-4">
  <Alert>
    <AlertIcon />
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </Alert>
  <Alert variant="solid">
    <AlertIcon />
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </Alert>
  <Alert variant="left-accent">
    <AlertIcon />
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </Alert>
  <Alert variant="top-accent">
    <AlertIcon />
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </Alert>
</div>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in root element to remove style from Alert and all its sub-components.

{% example %}

```jsx
<Alert
  isUnstyled
  className="flex h-16 w-full items-center gap-1 rounded-md border border-green-500 bg-green-300/40 p-4 dark:text-white"
>
  <AlertIcon className="size-7" />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

{% /example %}

## Unstyled Sub-Component

Pass `isUnstyled` prop in a particular sub-component to remove style from that sub-component.

{% example %}

```jsx
<Alert>
  <AlertIcon />
  <AlertTitle isUnstyled>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

{% /example %}

---

## Props

### Alert

`Alert` composes the `<div>` component.

| Property   | Description                                 | Type                                                                        | Default    |
| ---------- | ------------------------------------------- | --------------------------------------------------------------------------- | ---------- |
| status     | Status of the alert and its sub-components. | `"success"` or `"warning"` or `"error"` or `"info"` or `undefined`          | `"info"`   |
| size       | Size of the alert and its sub-components.   | `"sm"` or `"md"` or `"lg"` or `undefined`                                   | `"md"`     |
| variant    | Style variant of the alert component.       | `"simple"` or `"solid"` or `"left-accent"` or `"top-accent"` or `undefined` | `"simple"` |
| isUnstyled | Removes style from whole component          | `boolean` or `undefined`                                                    | `false`    |

### AlertIcon

`AlertIcon` composes the `<svg>` component.

| Property   | Description                       | Type                     | Default |
| ---------- | --------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component. | `boolean` or `undefined` | `false` |

### AlertTitle

`AlertTitle` composes the `<h5>` component.

| Property   | Description                       | Type                     | Default |
| ---------- | --------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component. | `boolean` or `undefined` | `false` |

### AlertDescription

`AlertDescription` composes the `<p>` component.

| Property   | Description                       | Type                     | Default |
| ---------- | --------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component. | `boolean` or `undefined` | `false` |
