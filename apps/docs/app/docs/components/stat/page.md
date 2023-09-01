---
title: Stat
pageTitle: Stat - Rafty UI
description: Stat
---

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

Pass the `type` prop if you need to increase and decrease the stat type. Values can be `increase`, `decrease`, `normal`

{% example name="stat:type" /%}
