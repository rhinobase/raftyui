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
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@rafty/ui'
```

## Usage

```jsx
<Alert>
  <AlertIcon />
  <AlertTitle id="title">Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

## Size

Pass the `size` prop if you need to adjust the size of the Alert. Values can be `sm`, `md`, `lg`.

```jsx
<Alert size="sm" status="error">
  <AlertIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

## Status

Change the status of the alerts by passing the `status` prop. This affects the color scheme and icon used. Alert supports `error`, `success`, `warning`, `info` statuses.

```jsx
<Alert status="error">
  <AlertIcon />
  <AlertTitle id="title">Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

## Variant

Pass the `variant` prop if you need to adjust visual style of the alert. Values can be `subtle`, `solid`, `left-accent` or `top-accent`.

```jsx
<Alert variant="subtle">
  <AlertIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

## Barebone

Pass `isBarebone` prop to remove all style in alert.

```jsx
<Alert isBarebone status="info">
  <AlertIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

## UnStyled

Pass `isUnstyled` prop to remove all style from a particalr sub component.

```jsx
<Alert isUnstyled status="info">
  <AlertIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

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