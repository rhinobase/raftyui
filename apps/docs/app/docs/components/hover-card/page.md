---
title: Hover Card
nextjs:
  metadata:
    title: Hover Card
    description: For sighted users to preview content available behind a link.
    twitter:
      title: Hover Card
      images:
        url: https://rafty.rhinobase.io/api/og?title=Hover%20Card
    openGraph:
      title: Hover Card
      images:
        url: https://rafty.rhinobase.io/api/og?title=Hover%20Card
---

For sighted users to preview content available behind a link.

This component is made on top of [Radix UIs Hover Card Component](https://www.radix-ui.com/primitives/docs/components/hover-card) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@rafty/ui";

<HoverCard>
  <HoverCardTrigger />
  <HoverCardContent />
</HoverCard>;
```

## Usage

{% example name="hover-card:usage" /%}

## Props

---

### HoverCard

This component is built on top of [Radix HoverCard](https://www.radix-ui.com/primitives/docs/components/hover-card#root)

### HoverCardTrigger

This component is built on top of [Radix HoverCard](https://www.radix-ui.com/primitives/docs/components/hover-card#trigger)

### HoverCardContent

This component is built on top of [Radix HoverCard](https://www.radix-ui.com/primitives/docs/components/hover-card#content)

| Property   | Description                          | Type                               | Default    |
| ---------- | ------------------------------------ | ---------------------------------- | ---------- |
| align      | Alignment of the component.          | `"center"` or `"start"` or `"end"` | `"center"` |
| sideOffset | Horizontal offset for the component. | `number`                           | `4`        |
