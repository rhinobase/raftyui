---
title: Toast
pageTitle: Toast - Rafty UI
description: Toast
---

## Import

The toast component is used to give feedback to users after an action has taken place.

- Toast

```jsx
import { Toast } from "@rafty/ui";
```

## Usage

The toast will close itself after a timeout.

Toasts by default appears at the top of an application window, and it is possible to have more than one toast onscreen at a time.

```jsx
<Toast title="Success Banner" severity="success" />
```

## Message

Pass the `message` prop to pass message into the toast

<Toast title="Success Banner" message="Data uploaded to the server. Fire on!" severity="success" />

## Severity

Pass the `severity` prop if you need to adjust the color of the toast. Values can be `success, info, error, warning`.

```jsx
<Toast title="Success Banner" severity="success" />
<Toast title="Success Banner" severity="warning" />
<Toast title="Success Banner" severity="info" />
<Toast title="Success Banner" severity="error" />
```

## Visible

Pass `visible` prop to set visibility of toast

```jsx
<Toast title="Success Banner" severity="success" visible />
```

### API

---

### Root

| Property  | Description | Type                                     | Default |
| --------- | ----------- | ---------------------------------------- | ------- |
| className |             | `string`                                 |         |
| title\*   |             | `string`                                 |         |
| message?  |             | `string`                                 |         |
| severity  |             | `error` / `warning` / `info` / `success` |         |
| visible?  |             | `boolean`                                |         |
