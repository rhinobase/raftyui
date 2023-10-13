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

## Barebone

Pass `isBarebone` prop to remove all style in alert.

{% example name="alert:barebone" /%}

## Unstyled

Pass `isUnstyled` prop to remove all style from a particalr sub component.

{% example name="alert:unstyled" /%}

## API

---

### Root

| Property   | Description                                    | Type      | Default |
| ---------- | ---------------------------------------------- | --------- | ------- |
| UnStyled   | Removes Style from component and sub-component | `boolean` | false   |
| isBarebone | Removes style from whole component             | `boolean` | false   |

### Icon

| Property | Description                                    | Type      | Default |
| -------- | ---------------------------------------------- | --------- | ------- |
| UnStyled | Removes Style from component and sub-component | `boolean` | false   |

### Title

| Property | Description                                    | Type      | Default |
| -------- | ---------------------------------------------- | --------- | ------- |
| UnStyled | Removes Style from component and sub-component | `boolean` | false   |

### Description

| Property | Description                                    | Type      | Default |
| -------- | ---------------------------------------------- | --------- | ------- |
| UnStyled | Removes Style from component and sub-component | `boolean` | false   |
