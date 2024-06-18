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

The Toast component is used to give feedback to users after an action has taken place.

This is a custom-made component according to our styling conventions, limiting the available props and styling options.

## Anatomy

Import the component.

```jsx
import { Toast } from "@rafty/ui";

<Toast />;
```

## Usage

`title` and `severity` are required props in Toast.

{% example %}

```jsx
<Toast title="Success Banner" severity="success" />
```

{% /example %}

## Title

The `title` is a required prop for in Toast.

{% example %}

```jsx
<Toast title="This is sample title" severity="warning" />
```

{% /example %}

## Message

The `message` prop is used to display description below title in Toast.

{% example %}

```jsx
<Toast
  title="Success Banner"
  message="Data uploaded to the server. Fire on!"
  severity="success"
/>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="flex w-full flex-col items-center gap-4">
  <Toast title="Success Banner" severity="success" size="sm" />
  <Toast title="Success Banner" severity="warning" size="md" />
  <Toast title="Success Banner" severity="info" size="lg" />
</div>
```

{% /example %}

## Severity

There are 4 `severity` options available: `"error"`, `"warning"`, `"info"` & `"success"`. It is a required prop.

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

The `visible` prop is used to manage the visibility of Toast.

{% example %}

```jsx
<Toast title="Success Banner" severity="info" visible />
```

{% /example %}

---

## Props

### Toast

`Toast` composes the `<div>` component.

| Property | Description                    | Type                                                | Default |
| -------- | ------------------------------ | --------------------------------------------------- | ------- |
| size     | Size of the toast component.   | `"sm"` or `"md"` or `"lg"` or `undefined`           | `"md"`  |
| severity | Severity level of the toast.   | `"error"` or `"success"` or `"warning"` or `"info"` | -       |
| visible  | Visibility state of the toast. | `boolean`                                           | `false` |
| title    | Title of the toast.            | `string`                                            | -       |
| message  | Content/message of the toast.  | `string`                                            | -       |
