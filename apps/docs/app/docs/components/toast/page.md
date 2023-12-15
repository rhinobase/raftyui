---
title: Toast
nextjs:
  metadata:
    title: Toast
    description: The toast component is used to give feedback to users after an action has taken place.
    twitter:
      title: Toast
      images:
        url: https://rafty.rhinobase.io/api/og?title=Toast
    openGraph:
      title: Toast
      images:
        url: https://rafty.rhinobase.io/api/og?title=Toast
---

The toast component is used to give feedback to users after an action has taken place.

This is a custom-made component according to our styling conventions, limiting the available props and styling options.

## Anatomy

Import the component.

```jsx
import { Toast } from "@rafty/ui";

<Toast />;
```

## Usage

The toast will close itself after a timeout.

Toasts by default appears at the top of an application window, and it is possible to have more than one toast onscreen at a time.

{% example name="toast:usage" /%}

## Title

The title is another required prop for in toast.

{% example name="toast:title" /%}

## Message

The message prop is used to display description below title in toast

{% example name="toast:message" /%}

## Severity

There are 4 `severity` options in toast: `error`, `warning`, `info` & `success`. It is a required prop.

{% example name="toast:severity" /%}

## Visible

The visible prop is used to manage the visibility of toast.

{% example name="toast:visible" /%}

## Props

---

### Toast

`Toast` composes the `<div>` component.

| Property | Description                    | Type                                                | Default |
| -------- | ------------------------------ | --------------------------------------------------- | ------- |
| severity | Severity level of the toast.   | `"error"` or `"success"` or `"warning"` or `"info"` | `false` |
| visible  | Visibility state of the toast. | `boolean`                                           | `false` |
| title    | Title of the toast.            | `string`                                            | -       |
| message  | Content/message of the toast.  | `string`                                            | -       |
