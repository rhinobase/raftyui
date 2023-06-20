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
```

## Usage

```jsx
<Alert>
  <AlertIcon />
  <AlertTitle id="title">Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

## Status

Change the status of the alerts by passing the `status` prop. This affects the color scheme and icon used. Alert supports `error, success, warning, and info` statuses.

```jsx
<Alert status="error">
  <AlertIcon />
  <AlertTitle id="title">Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

## Variant

Alert has 4 variant styles you can use. Pass the `variant` prop and use either `subtle, solid, left-accent or top-accent`.

```jsx
<Alert variant="solid" status="success">
  <AlertIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```

## Widths

Pass the `size` prop if you need to adjust the size of the dialog. Values can be `sm, md, lg`.

```jsx
<Alert size="sm" variant="left-accent" status="error">
  <AlertIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
```
