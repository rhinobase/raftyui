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

{% example name="textarea:usage" /%}

## Variants

Pass the `variant` prop if you need to adjust visual style of the textarea. Values can be `solid`, `outline`, `ghost`.

{% example name="textarea:variant" /%}

## UnStyled

Pass `isUnstyled` prop to remove style from textarea.

{% example name="textarea:unstyled" /%}

### API

---

### Root

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnStyled | Removes style from component | `boolean` | `false` |
