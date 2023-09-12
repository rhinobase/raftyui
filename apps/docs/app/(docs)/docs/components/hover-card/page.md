---
title: Hover Card
nextjs:
  metadata:
    title: Hover Card
    description: For sighted users to preview content available behind a link.
---

For sighted users to preview content available behind a link.

This component is made on top of [Radix UIs Hover Card Component](https://www.radix-ui.com/primitives/docs/components/hover-card) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import { HoverCard, HoverCardTrigger, HoverCardContent, Text } from "@rafty/ui";

<HoverCard>
  <HoverCardTrigger />
  <HoverCardContent>
    <Text />
  </HoverCardContent>
</HoverCard>;
```

## Usage

{% example name="hover-card:usage" /%}
