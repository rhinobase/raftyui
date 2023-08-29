---
title: Alert
pageTitle: Alert - Rafty UI
description: Alert
---

## Import

Rafty UI exports 4 alert related components.

- Alert: The wrapper for alert components.
- AlertIcon: The visual icon for the alert that changes based on the status prop.
- AlertTitle: The title of the alert to be announced by screen readers.
- AlertDescr iption: The description of the alert to be announced by screen readers.

```jsx
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@rafty/ui";

() => (
  <Alert>
    <AlertIcon />
    <AlertTitle />
    <AlertDescription />
  </Alert>
);
```

## Usage

{% example name="alert:usage" /%}

## Size

Pass the `size` prop if you need to adjust the size of the Alert. Values can be `sm`, `md`, `lg`.

{% example name="alert:size" /%}

## Status

Change the status of the alerts by passing the `status` prop. This affects the color scheme and icon used. Alert supports `error`, `success`, `warning`, `info` statuses.

{% example name="alert:status" /%}

## Variant

Pass the `variant` prop if you need to adjust visual style of the alert. Values can be `subtle`, `solid`, `left-accent` or `top-accent`.

{% example name="alert:variant" /%}

## Barebone

Pass `isBarebone` prop to remove all style in alert.

{% example name="alert:barebone" /%}

## UnStyled

Pass `isUnstyled` prop to remove all style from a particalr sub component.

{% example name="alert:unstyled" /%}

## API

---

### Root

| Property   | Description                                    | Type                                       | Default |
| ---------- | ---------------------------------------------- | ------------------------------------------ | ------- |
| className  |                                                | `string`                                   |         |
| UnStyled   | Removes Style from component and sub-component | `boolean`                                  | false   |
| isBarebone | Removes style from whole component             | `boolean`                                  | false   |
| status     | Show color of alert based on status            | `error, success, warning, info`            | info    |
| variant    | change visual style of alert                   | `subtle, solid, left-accent or top-accent` | solid   |
| size       | Change size of alert                           | `sm, md, lg`                               | md      |

### Icon

| Property  | Description                                    | Type      | Default |
| --------- | ---------------------------------------------- | --------- | ------- |
| className |                                                | `string`  |         |
| UnStyled  | Removes Style from component and sub-component | `boolean` | false   |

### Title

| Property  | Description                                    | Type      | Default |
| --------- | ---------------------------------------------- | --------- | ------- |
| className |                                                | `string`  |         |
| UnStyled  | Removes Style from component and sub-component | `boolean` | false   |

### Description

| Property  | Description                                    | Type      | Default |
| --------- | ---------------------------------------------- | --------- | ------- |
| className |                                                | `string`  |         |
| UnStyled  | Removes Style from component and sub-component | `boolean` | false   |
