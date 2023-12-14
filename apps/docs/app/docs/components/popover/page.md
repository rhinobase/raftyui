---
title: Popover
nextjs:
  metadata:
    title: Popover
    description: Displays rich content in a portal, triggered by a button.
    twitter:
      title: Popover
      images:
        url: https://rafty.rhinobase.io/api/og?title=Popover
    openGraph:
      title: Popover
      images:
        url: https://rafty.rhinobase.io/api/og?title=Popover
---

Displays rich content in a portal, triggered by a button.

This component is made on top of [Radix UIs Popover Component](https://www.radix-ui.com/primitives/docs/components/popover) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopverClose,
} from "@rafty/ui";

<Popover>
  <PopoverTrigger />
  <PopoverContent>
    <PopverClose />
  </PopoverContent>
</Popover>;
```

## Usage

{% example name="popover:usage" /%}

## Size

There are 3 `size` options in popover: `sm`, `md` (default) & `lg`

{% example name="popover:size" /%}

## Open

To manage open state of popover you can use `open` prop and to open popover by default pass `defaultOpen` prop.

{% example name="popover:default" /%}

## ShowArrow

To make arrow on top of content visible you can use `showArrow` prop. It is a boolean type prop whose default value is `false`.

{%example name="popover:showarrow" /%}

## Unstyled

Pass `isUnstyled` prop in parent component to remove all styles in popover.
{% example name="popover:unstyled" /%}

## Props

---

### Popover

This component is built on top of [Radix Popover](https://www.radix-ui.com/primitives/docs/components/popover#root)

| Property   | Description                                              | Type                       | Default |
| ---------- | -------------------------------------------------------- | -------------------------- | ------- |
| size       | Size of the popover component.                           | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isUnstyled | Removes style from whole component and its subcomponents | `boolean`                  | `false` |

### PopoverTrigger

This component is built on top of [Radix Popover](https://www.radix-ui.com/primitives/docs/components/popover#trigger)

| Property    | Description                                  | Type                                                     | Default       |
| ----------- | -------------------------------------------- | -------------------------------------------------------- | ------------- |
| size        | Size of the popover trigger component.       | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"md"`        |
| variant     | Style variant of the component.              | `"solid"` or `"outline"` or `"ghost"`                    | `"solid"`     |
| colorScheme | Color scheme of the component.               | `"primary"` or `"secondary"` or `"error"` or `"success"` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.        | `JSX.Element`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.       | `JSX.Element`                                            | -             |
| isDisabled  | Whether the component is disabled.           | `boolean`                                                | `false`       |
| isActive    | Whether the component is in an active state. | `boolean`                                                | `false`       |
| isLoading   | Whether the component is in a loading state. | `boolean`                                                | `false`       |
| isUnstyled  | Removes Style from component                 | `boolean`                                                | `false`       |
| asChild     | Treats the component as a child element.     | `boolean`                                                | `false`       |

### PopoverContent

This component is built on top of [Radix Popover](https://www.radix-ui.com/primitives/docs/components/popover#content)

| Property        | Description                                   | Type      | Default |
| --------------- | --------------------------------------------- | --------- | ------- |
| sideOffset      | Horizontal offset for the component.          | `number`  | `10`    |
| isUnstyled      | Removes style from component                  | `boolean` | `false` |
| arrowClassNames | Additional class names for the arrow element. | `string`  | -       |
| showArrow       | Set Arrow visibility                          | `boolean` | `false` |

### PopoverClose

This component is built on top of [Radix Popover](https://www.radix-ui.com/primitives/docs/components/popover#close)
