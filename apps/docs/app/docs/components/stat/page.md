---
title: Stat
nextjs:
  metadata:
    title: Stat
    description: Stat component is used to display statistics/numbers.
    twitter:
      title: Stat
      images:
        url: https://rafty.rhinobase.io/api/og?title=Stat
    openGraph:
      title: Stat
      images:
        url: https://rafty.rhinobase.io/api/og?title=Stat
---

Stat component is used to display statistics/numbers.

This is a custom component made according to our styling conventions limiting the props available

## Anatomy

Import all parts and piece them together.

```jsx
import { Stat, StatHelpText, StatIcon, StatLabel, StatValue } from "@rafty/ui";

<Stat>
  <StatLabel />
  <StatValue />
  <StatHelpText>
    <StatIcon />
  </StatHelpText>
</Stat>;
```

## Usage

{% example name="stat:usage" /%}

## Type

The type prop is used to define type of stat, it has 3 options: `increase`, `decrease` & `normal` (default).

{% example name="stat:type" /%}

## Props

---

### Stat

`Stat` composes the `<div>` component.

| Property | Description                 | Type                                       | Default    |
| -------- | --------------------------- | ------------------------------------------ | ---------- |
| type     | Type of the stat component. | `"increase"` or `"decrease"` or `"normal"` | `"normal"` |

### StatLabel

`StatLabel` composes the `<div>` component.

### StatValue

`StatValue` composes the `<div>` component.

### StatHelpText

`StatHelpText` composes the `<div>` component.

### StatIcon

`StatIcon` composes the `<svg>` component.

| Property | Description        | Type     | Default |
| -------- | ------------------ | -------- | ------- |
| height   | height of the icon | `number` | `14`    |
| width    | width of the icon  | `number` | `14`    |
