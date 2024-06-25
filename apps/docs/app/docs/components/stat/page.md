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

This is a custom component made according to our styling conventions limiting the props available.

## Anatomy

Import all parts and piece them together.

```jsx
import { Stat, StatHelpText, StatLabel, StatValue } from "@rafty/ui";

<Stat>
  <StatLabel />
  <StatValue />
  <StatHelpText />
</Stat>;
```

## Usage

{% example %}

```jsx
<Stat type="normal">
  <StatLabel>Daily Return</StatLabel>
  <StatValue>17,770.90</StatValue>
  <StatHelpText>0.47%</StatHelpText>
</Stat>
```

{% /example %}

## Type

The type prop is used to define type of Stat, it has 3 options available: `"increase"`, `"decrease"` & `"normal"` (default).

{% example %}

```jsx
<Stat type="increase">
  <StatLabel>Daily Return</StatLabel>
  <StatValue>17,770.90</StatValue>
  <StatHelpText>0.47%</StatHelpText>
</Stat>
```

{% /example %}

---

## Props

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
