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

The toast will close itself when the close button is clicked, or after a timeout.

Toasts can be configured to appear at either the top or the bottom of an application window, and it is possible to have more than one toast onscreen at a time.

```jsx
<Toast title="Success Banner" message="Data uploaded to the server. Fire on!" severity="success" />
```

## Severity

Pass the `severity` prop if you need to adjust the color of the toast. Values can be `success, info, error, warning`.

```jsx
<Toast title="Success Banner" message="Data uploaded to the server. Fire on!" severity="error" />
```
