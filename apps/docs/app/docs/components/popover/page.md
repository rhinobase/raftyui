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

# Popover

Displays rich content in a portal, triggered by a button.

This component is made on top of [Radix UIs Popover Component](https://www.radix-ui.com/primitives/docs/components/popover) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from a particular sub-component).

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

{% example %}

```jsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent className="w-96 space-y-3">
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </Text>
    <div className="flex justify-end gap-3">
      <Button size="sm">Button</Button>
      <Button size="sm" colorScheme="primary">
        Button
      </Button>
    </div>
  </PopoverContent>
</Popover>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Popover size="sm">
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent className="w-96 space-y-3">
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </Text>
    <div className="flex justify-end gap-3">
      <Button size="sm">Button</Button>
      <Button size="sm" colorScheme="primary">
        Button
      </Button>
    </div>
  </PopoverContent>
</Popover>
```

{% /example %}

## Open

To manage open state of Popover you can use `open` prop and to open Popover by default pass `defaultOpen` prop.

{% example %}

```jsx
<Popover open>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent className="w-96 space-y-3">
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </Text>
    <div className="flex justify-end gap-3 py-1">
      <Button size="sm" colorScheme="success">
        Demo 1
      </Button>
      <Button size="sm" colorScheme="error">
        Demo 2
      </Button>
    </div>
  </PopoverContent>
</Popover>
```

{% /example %}

## ShowArrow

To make arrow on top of content visible you can use `showArrow` prop. It is a boolean type prop whose default value is `false`.

{% example %}

```jsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent className="w-96" showArrow>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </Text>
    <div className="mt-3 flex justify-end gap-3 py-1">
      <Button size="sm" colorScheme="success">
        Demo 1
      </Button>
      <Button size="sm" colorScheme="error">
        Demo 2
      </Button>
    </div>
  </PopoverContent>
</Popover>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in parent component to remove all styles in Popover.

{% example %}

```jsx
<Popover isUnstyled>
  <PopoverTrigger
    className="rounded-md bg-slate-100 px-4 py-2 hover:bg-slate-100 hover:text-purple-600 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-500"
    size="lg"
  >
    Open
  </PopoverTrigger>
  <PopoverContent className="bg-secondary-50 w-[300px] space-y-4 rounded-lg p-4 shadow-lg dark:bg-stone-950">
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </Text>
    <div className="flex justify-end gap-3">
      <Button className="bg-green-300 text-black" size="sm">
        Demo 1
      </Button>
      <Button className="bg-blue-300 text-black" size="sm">
        Demo 2
      </Button>
    </div>
  </PopoverContent>
</Popover>
```

{% /example %}

---

## Props

### Popover

This component is built on top of [Radix Popover](https://www.radix-ui.com/primitives/docs/components/popover#root)

| Property   | Description                                             | Type                                      | Default |
| ---------- | ------------------------------------------------------- | ----------------------------------------- | ------- |
| size       | Size of the popover and its sub-components.             | `"sm"` or `"md"` or `"lg"` or `undefined` | `"md"`  |
| isUnstyled | Remove style from this component and its sub-components | `boolean` or `undefined`                  | `false` |

### PopoverTrigger

This component is built on top of [Radix Popover Trigger](https://www.radix-ui.com/primitives/docs/components/popover#trigger) and using [Button](https://rafty.rhinobase.io/docs/components/button)

### PopoverContent

This component is built on top of [Radix Popover Content](https://www.radix-ui.com/primitives/docs/components/popover#content)

| Property        | Description                                   | Type                     | Default |
| --------------- | --------------------------------------------- | ------------------------ | ------- |
| sideOffset      | Side offset of the content from trigger.      | `number`                 | `10`    |
| isUnstyled      | Remove style from this component              | `boolean` or `undefined` | `false` |
| arrowClassNames | Additional class names for the arrow element. | `string` or `undefined`  | -       |
| showArrow       | Set Arrow visibility                          | `boolean` or `undefined` | `false` |

### PopoverClose

This component is built on top of [Radix Popover Close](https://www.radix-ui.com/primitives/docs/components/popover#close)
