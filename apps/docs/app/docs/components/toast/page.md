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

{% example %}

```jsx
<Toast title="Success Banner" severity="success" />
```

{% /example %}

## Title

The title is another required prop for in toast.

{% example %}

```jsx
<Toast title="This is sample title" severity="warning" />
```

{% /example %}

## Message

The message prop is used to display description below title in toast

{% example %}

```jsx
<Toast
  title="Success Banner"
  message="Data uploaded to the server. Fire on!"
  severity="success"
/>
```

{% /example %}

## Severity

There are 4 `severity` options in toast: `error`, `warning`, `info` & `success`. It is a required prop.

{% example %}

```jsx
<div className="flex w-full flex-col items-center gap-4">
  <Toast title="Success Banner" severity="success" />
  <Toast title="Success Banner" severity="warning" />
  <Toast title="Success Banner" severity="info" />
  <Toast title="Success Banner" severity="error" />
</div>
```

{% /example %}

## Visible

The visible prop is used to manage the visibility of toast.

{% example %}

```jsx
<Toast title="Success Banner" severity="info" visible />
```

{% /example %}

## Props

---

### Toast

`Toast` composes the `<div>` component.

| Property | Description                    | Type                                                | Default |
| -------- | ------------------------------ | --------------------------------------------------- | ------- |
| severity | Severity level of the toast.   | `"error"` or `"success"` or `"warning"` or `"info"` | -       |
| visible  | Visibility state of the toast. | `boolean`                                           | `false` |
| title    | Title of the toast.            | `string`                                            | -       |
| message  | Content/message of the toast.  | `string`                                            | -       |
