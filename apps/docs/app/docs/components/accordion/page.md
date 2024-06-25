---
title: Accordion
nextjs:
  metadata:
    title: Accordion
    description: A vertically stacked set of interactive headings that each reveal an associated section of content.
    twitter:
      title: Accordion
      images:
        url: https://rafty.rhinobase.io/api/og?title=Accordion
    openGraph:
      title: Accordion
      images:
        url: https://rafty.rhinobase.io/api/og?title=Accordion
---

A vertically stacked set of interactive headings that each reveal an associated section of content.

This component is made on top of [Radix UIs Accordion Component](https://www.radix-ui.com/primitives/docs/components/accordion) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you wish to apply your own styling you can use the `isUnstyled` prop on root element (to remove styling from root component as well as from all its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from that particular sub-component).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@rafty/ui";

<Accordion>
  <AccordionItem>
    <AccordionTrigger />
    <AccordionContent />
  </AccordionItem>
</Accordion>;
```

## Usage

In Accordion root element, `type` prop is mandatory as it decides whether a `"single"` item or `"multiple"` items can be expanded or collapsed at the same time.

{% example %}

```jsx
<Accordion type="single">
  <AccordionItem value="1">
    <AccordionTrigger>Section 1 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Section 2 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

{% /example %}

## Collapsible

When using type `"single"`, the `collapsible` prop allows closing content by clicking the trigger for an open item otherwise one AccordionItem remains open after opened once.

{% example %}

```jsx
<Accordion type="single" collapsible>
  <AccordionItem value="1">
    <AccordionTrigger>Section 1 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Section 2 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

{% /example %}

## Multiple Type

- If you set type `"multiple"` then the Accordion will permit multiple items to be expanded at once.
- When using type `"multiple"` `value` and `defaultValue` are of `string[]` type and `onValueChange` function is of `(value: string[]) => void` type.

{% example %}

```jsx
<Accordion type="multiple">
  <AccordionItem value="1">
    <AccordionTrigger>Section 1 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Section 2 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

{% /example %}

## Default Value

- You can use `defaultValue` prop to expand any AccordionItem by default and it's type change according to change in `type` prop.
- When type is `"single"` defaultValue is of `string` type and when type is `"multiple"` defaultValue changes to `string[]` type.

{% example %}

```jsx
<Accordion type="single" defaultValue="2">
  <AccordionItem value="1">
    <AccordionTrigger>Section 1 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Section 2 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Accordion size="sm">
  <AccordionItem value="1">
    <AccordionTrigger>Section 1 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Section 2 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

{% /example %}

## Variant

There are 3 `variant` options available: `"solid"` (default), `"outline"` & `"ghost"`.

{% example %}

```jsx
<Accordion variant="outline">
  <AccordionItem value="1">
    <AccordionTrigger>Section 1 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Section 2 title</AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

{% /example %}

## Custom Icons

To add custom icons to AccordionTrigger you need to use 3 props ,i.e., `showIcon`, `openIcon` and `closeIcon`

{% example %}

```jsx
<Accordion type="single" collapsible>
  <AccordionItem value="1">
    <AccordionTrigger
      openIcon={<MinusIcon className="size-4 stroke-2" />}
      closeIcon={<PlusIcon className="size-4 stroke-2" />}
    >
      Section 1 title
    </AccordionTrigger>
    <AccordionContent data-cy="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in root element to remove style from Accordion and all its sub-components.

{% example %}

```jsx
<Accordion isUnstyled collapsible className="w-full space-y-2">
  <AccordionItem
    value="1"
    className="dark:bg-secondary-800 rounded-lg bg-white p-2 px-4 shadow-md dark:text-white"
  >
    <AccordionTrigger className="flex w-full items-center justify-between font-medium transition-all">
      Section 1 title
    </AccordionTrigger>
    <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem
    value="2"
    className="dark:bg-secondary-800 rounded-lg bg-white p-2 px-4 shadow-md dark:text-white"
  >
    <AccordionTrigger className="flex w-full items-center justify-between font-medium transition-all">
      Section 2 title
    </AccordionTrigger>
    <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

{% /example %}

## Unstyled Sub-Component

Pass `isUnstyled` prop in a particular sub-component to remove style from that sub-component.

{% example %}

```jsx
<Accordion collapsible defaultValue="1">
  <AccordionItem
    value="1"
    className="dark:bg-secondary-800 rounded-lg bg-white p-2 px-4 dark:text-white"
  >
    <AccordionTrigger
      isUnstyled
      className="flex w-full items-center justify-between font-medium transition-all"
    >
      Section 1 title
    </AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Section 2 title</AccordionTrigger>
    <AccordionContent isUnstyled>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

{% /example %}

---

## Props

### Accordion

This component is built on top of [Radix Accordion](https://www.radix-ui.com/primitives/docs/components/accordion#root)

| Property   | Description                                             | Type                                                 | Default   |
| ---------- | ------------------------------------------------------- | ---------------------------------------------------- | --------- |
| size       | Size of the accordion and its sub-components.           | `"sm"` or `"md"` or `"lg"` or `undefined`            | `"md"`    |
| variant    | Style variant of the accordion component.               | `"solid"` or `"ghost"` or `"outline"` or `undefined` | `"solid"` |
| isUnstyled | Remove style from this component and its sub-components | `boolean` or `undefined`                             | `false`   |

### AccordionItem

This component is built on top of [Radix Accordion Item](https://www.radix-ui.com/primitives/docs/components/accordion#item)

### AccordionTrigger

This component is built on top of [Radix Accordion Trigger](https://www.radix-ui.com/primitives/docs/components/accordion#trigger)

| Property   | Description                                                   | Type                         | Default |
| ---------- | ------------------------------------------------------------- | ---------------------------- | ------- |
| openIcon   | Custom JSX element for the open state icon.                   | `JSX.Element` or `undefined` | -       |
| closeIcon  | Custom JSX element for the close state icon.                  | `JSX.Element` or `undefined` | -       |
| showIcon   | Determine whether to display the default open and close icons | `boolean` or `undefined`     | `true`  |
| isUnstyled | Remove style from this component                              | `boolean` or `undefined`     | `false` |

### AccordionContent

This component is built on top of [Radix Accordion Content](https://www.radix-ui.com/primitives/docs/components/accordion#content)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |
