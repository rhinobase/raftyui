---
title: Text Area
pageTitle: Text Area - Rafty UI
description: Text Area
---

## Import

The Textarea component allows you to easily create multi-line text inputs.

- Textarea

```jsx
import { Textarea } from "@rafty/ui";
```

## Usage

```jsx
<Textarea placeholder="abc" />
```

## Variants

Pass the `variant` prop if you need to adjust visual style of the textarea. Values can be `solid, outline, ghost`.

```jsx
<Textarea placeholder="abc" variant="solid" />
<Textarea placeholder="abc" variant="outline" />
<Textarea placeholder="abc" variant="ghost" />
```

## UnStyled

Pass `isUnstyled` prop to remove style from textarea.

```jsx
<Textarea placeholder="abc" isUnstyled />
```
