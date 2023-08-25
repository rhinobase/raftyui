---
title: Spinner
pageTitle: Spinner - Rafty UI
description: Spinner
---

## Import

Spinners provide a visual cue that an action is processing awaiting a course of change or a result.

- Spinner

```jsx
import { Spinner } from '@rafty/ui'
```

## Usage

```jsx
<Spinner />
```

## Size

Pass the `size` prop if you need to adjust the size of the spinner. Values can be `sm`, `md`, `lg`.

```jsx
<div className="flex gap-1">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>
```

### API

---

### Root

| Property      | Description | Type               | Default |
| ------------- | ----------- | ------------------ | ------- |
| className     |             | `string`           | -       |
| size          |             | `sm` \ `md` \ `lg` | `md`    |
| inheritParent |             | `boolean`          | `false` |
