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

There are 3 `size` options in popover: `sm`, `md` (default) & `lg`

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

To manage open state of popover you can use `open` prop and to open popover by default pass `defaultOpen` prop.

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

{%example %}

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

Pass `isUnstyled` prop in parent component to remove all styles in popover.

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

## Props

---

### Popover

This component is built on top of [Radix Popover](https://www.radix-ui.com/primitives/docs/components/popover#root)

| Property   | Description                                            | Type                       | Default |
| ---------- | ------------------------------------------------------ | -------------------------- | ------- |
| size       | Size of the popover component and its subcomponents.   | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isUnstyled | Remove style from this component and its subcomponents | `boolean`                  | `false` |

### PopoverTrigger

This component is built on top of [Radix Popover Trigger](https://www.radix-ui.com/primitives/docs/components/popover#trigger)

| Property    | Description                              | Type                                                     | Default       |
| ----------- | ---------------------------------------- | -------------------------------------------------------- | ------------- |
| size        | Size of the popover trigger component.   | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"md"`        |
| variant     | Style variant of the component.          | `"solid"` or `"outline"` or `"ghost"`                    | `"solid"`     |
| colorScheme | Color scheme of the component.           | `"primary"` or `"secondary"` or `"error"` or `"success"` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.    | `JSX.Element`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.   | `JSX.Element`                                            | -             |
| isDisabled  | To manage disabled state.                | `boolean`                                                | `false`       |
| isActive    | To manage active state.                  | `boolean`                                                | `false`       |
| isLoading   | To manage loading state.                 | `boolean`                                                | `false`       |
| isUnstyled  | Remove style from this component         | `boolean`                                                | `false`       |
| asChild     | Treats the component as a child element. | `boolean`                                                | `false`       |

### PopoverContent

This component is built on top of [Radix Popover Content](https://www.radix-ui.com/primitives/docs/components/popover#content)

| Property        | Description                                   | Type      | Default |
| --------------- | --------------------------------------------- | --------- | ------- |
| sideOffset      | Side offset of the content from trigger.      | `number`  | `10`    |
| isUnstyled      | Remove style from this component              | `boolean` | `false` |
| arrowClassNames | Additional class names for the arrow element. | `string`  | -       |
| showArrow       | Set Arrow visibility                          | `boolean` | `false` |

### PopoverClose

This component is built on top of [Radix Popover Close](https://www.radix-ui.com/primitives/docs/components/popover#close)
