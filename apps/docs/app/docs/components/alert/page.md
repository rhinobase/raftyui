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

An alert displays a short, important message in a way that captures the user's attention without disrupting the ongoing task.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

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

There are 3 `size` options available: `sm`, `md` (default) & `lg`

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

There are 4 `status` options in alert: `success`, `warning`, `error` & `info` (default).

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

There are 4 `variant` options in alert: `simple` (default), `solid`, `left-accent` & `top-accent`.

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

Pass `isUnstyled` prop in parent component to remove style in Alert.

{% example %}

```jsx
<Alert
  isUnstyled
  className="flex h-16 w-full items-center gap-1 rounded-md border border-green-500 bg-green-300/40 p-4 dark:text-white"
>
  <AlertIcon className="h-7 w-7" />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

{% /example %}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example %}

```jsx
<Alert>
  <AlertIcon />
  <AlertTitle isUnstyled>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

{% /example %}

## Props

---

### Alert

`Alert` composes the `<div>` component.

| Property   | Description                           | Type                                                         | Default    |
| ---------- | ------------------------------------- | ------------------------------------------------------------ | ---------- |
| status     | Status of the alert component.        | `"success"` or `"warning"` or `"error"` or `"info"`          | `"info"`   |
| size       | Size of the alert component.          | `"sm"` or `"md"` or `"lg"`                                   | `"md"`     |
| variant    | Style variant of the alert component. | `"simple"` or `"solid"` or `"left-accent"` or `"top-accent"` | `"simple"` |
| isUnstyled | Removes style from whole component    | `boolean`                                                    | `false`    |

### AlertIcon

`AlertIcon` composes the `<svg>` component.

| Property   | Description                       | Type      | Default |
| ---------- | --------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component. | `boolean` | `false` |

### AlertTitle

`AlertTitle` composes the `<h5>` component.

| Property   | Description                       | Type      | Default |
| ---------- | --------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component. | `boolean` | `false` |

### AlertDescription

`AlertDescription` composes the `<p>` component.

| Property   | Description                       | Type      | Default |
| ---------- | --------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component. | `boolean` | `false` |
