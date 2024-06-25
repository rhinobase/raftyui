---
title: Tooltip
nextjs:
  metadata:
    title: Tooltip
    description: A label that provides information on hover or focus.
    twitter:
      title: Tooltip
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tooltip
    openGraph:
      title: Tooltip
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tooltip
---

A label that provides information on hover or focus.

This component is made on top of [Radix UIs Tooltip Component](https://www.radix-ui.com/primitives/docs/components/tooltip) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import all parts and piece them together.

```jsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@rafty/ui";

<Tooltip>
  <TooltipTrigger />
  <TooltipContent />
</Tooltip>;
```

## Usage

{% example %}

```jsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button size="fab">
      <PlusIcon width={24} height={24} className="stroke-2" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Hover Me!</TooltipContent>
</Tooltip>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Tooltip size="sm">
  <TooltipTrigger asChild>
    <Button size="fab">
      <PlusIcon width={24} height={24} className="stroke-2" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Hover Me!</TooltipContent>
</Tooltip>
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of Tooltip.

{% example %}

```jsx
<Tooltip isDisabled>
  <TooltipTrigger asChild>
    <Button size="fab">
      <PlusIcon width={24} height={24} className="stroke-2" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Hover Me!</TooltipContent>
</Tooltip>
```

{% /example %}

## Hide Arrow

`isArrow` prop is used to manage the visible state of arrow in TooltipContent and its default value is `true`.

{% example %}

```jsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button size="fab">
      <PlusIcon width={24} height={24} className="stroke-2" />
    </Button>
  </TooltipTrigger>
  <TooltipContent isArrow={false}>Hover Me!</TooltipContent>
</Tooltip>
```

{% /example %}

---

## Props

### Tooltip

This component is built on top of [Radix Tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip#root)

| Property   | Description                                 | Type                                      | Default |
| ---------- | ------------------------------------------- | ----------------------------------------- | ------- |
| size       | Size of the tooltip and its sub-components. | `"sm"` or `"md"` or `"lg"` or `undefined` | `"md"`  |
| isDisabled | To manage the disabled state.               | `boolean` or `undefined`                  | `false` |

### TooltipTrigger

This component is built on top of [Radix Tooltip Trigger](https://www.radix-ui.com/primitives/docs/components/tooltip#trigger)

### TooltipContent

This component is built on top of [Radix Tooltip Content](https://www.radix-ui.com/primitives/docs/components/tooltip#content)

| Property     | Description                                                | Type                                                   | Default |
| ------------ | ---------------------------------------------------------- | ------------------------------------------------------ | ------- |
| hasAnimation | Determines whether the tooltip has animation.              | `boolean` or <Info>() => boolean</Info> or `undefined` | `true`  |
| sideOffset   | Side offset of the content from trigger.                   | `number`                                               | `4`     |
| isArrow      | Indicates whether to show an arrow in the tooltip content. | `boolean` or <Info>() => boolean</Info> or `undefined` | `true`  |
