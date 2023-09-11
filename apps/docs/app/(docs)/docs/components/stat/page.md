---
title: Stat
pageTitle: Stat - Rafty UI
description: Stat component is used to display statistics/numbers.
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
