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

{% example name="alert:usage" /%}

## Size

There are 3 `size` options available: `sm`, `md` (default) & `lg`

{% example name="alert:size" /%}

## Status

There are 4 `status` options in alert: `success`, `warning`, `error` & `info` (default).

{% example name="alert:status" /%}

## Variant

There are 4 `variant` options in alert: `simple` (default), `solid`, `left-accent` & `top-accent`.

{% example name="alert:variant" /%}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Alert.

{% example name="alert:unstyled" /%}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="alert:unstyledsub" /%}

## Props

---

### Alert

`Alert` composes the `div` component.

| Property   | Description                           | Type                                                         | Default    |
| ---------- | ------------------------------------- | ------------------------------------------------------------ | ---------- |
| status     | Status of the alert component.        | `"success"` or `"warning"` or `"error"` or `"info"`          | `"info"`   |
| size       | Size of the alert component.          | `"sm"` or `"md"` or `"lg"`                                   | `"md"`     |
| variant    | Style variant of the alert component. | `"simple"` or `"solid"` or `"left-accent"` or `"top-accent"` | `"simple"` |
| isUnstyled | Removes style from whole component    | `boolean`                                                    | `false`    |

### AlertIcon

`AlertIcon` composes the `svg` component.

| Property   | Description                                    | Type      | Default |
| ---------- | ---------------------------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component and sub-component | `boolean` | `false` |

### AlertTitle

`AlertIcon` composes the `h5` component.

| Property   | Description                                    | Type      | Default |
| ---------- | ---------------------------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component and sub-component | `boolean` | `false` |

### AlertDescription

`AlertIcon` composes the `p` component.

| Property   | Description                                    | Type      | Default |
| ---------- | ---------------------------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component and sub-component | `boolean` | `false` |
