---
title: Stat
pageTitle: Stat - Rafty UI
description: Stat
---

## Import

As the name implies, the `Stat` component is used to display some statistics.Its is majorly used in finance projects.

```jsx
import { Stat, StatHelpText, StatIcon, StatLabel, StatValue } from "@rafty/ui";
() => (
  <Stat>
    <StatLabel />
    <StatValue />
    <StatHelpText>
      <StatIcon />
    </StatHelpText>
  </Stat>
);
```

## Usage

{% example name="stat:usage" /%}

## Type

Pass the `type` prop if you need to increase and decrease the stat type. Values can be `increase`, `decrease`, `normal`

{% example name="stat:type" /%}
