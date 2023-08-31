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

{% example name="toast:usage" /%}

## Message

Pass the `message` prop to pass message into the toast

{% example name="toast:message" /%}

## Severity

Pass the `severity` prop if you need to adjust the color of the toast. Values can be `success`, `info`, `error`, `warning`.

{% example name="toast:severity" /%}

## Visible

Pass `visible` prop to set visibility of toast

{% example name="toast:visible" /%}

## Used with react-hot-toast

{% example name="toast:hot-toast" /%}
