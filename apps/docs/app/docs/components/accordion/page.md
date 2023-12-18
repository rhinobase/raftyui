---
title: Accordion
nextjs:
  metadata:
    title: Accordion
    description: The accordion component allows the user to show and hide sections of related content on a page.
    twitter:
      title: Accordion
      images:
        url: https://rafty.rhinobase.io/api/og?title=Accordion
    openGraph:
      title: Accordion
      images:
        url: https://rafty.rhinobase.io/api/og?title=Accordion
---

The accordion component allows the user to show and hide sections of related content on a page.

This component is made on top of [Radix UIs Accordion Component](https://www.radix-ui.com/primitives/docs/components/accordion) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

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

In Accordion parent element, `type` prop is mandatory as it decides whether a `single` item or `multiple` items can be expanded/collapsed at the same time.

{% example  %}

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

when using type `single`, the `collapsible` prop allows closing content by clicking the trigger for an open item otherwise one accordion item remains open by default.

{% example  %}

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

{% /example  %}

## Expand Multiple items at once

- If you set type `multiple` then the accordion will permit multiple items to be expanded at once.
- when using type `multiple` value and default value are `string [] ` and `onValueChange` function is like `(value: string []) => void`

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

## Expand Item With DefaultValue

{% example %}

```jsx
<Accordion type="single" defaultValue="1">
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

There are 3 `size` options in accordion: `sm`, `md` (default) & `lg`.

{% example %}

```jsx
<Accordion type="single" variant="ghost" size="sm">
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

There are 2 `variant` options in accordion: `solid` (default) & `ghost`.

{% example %}

```jsx
<Accordion type="single" variant="ghost">
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

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Accordion.

{% example %}

```jsx
<Accordion isUnstyled collapsible type="single" className="w-full space-y-2">
  <AccordionItem
    value="1"
    className="dark:bg-secondary-800 rounded-lg bg-white p-2 px-4 shadow-md dark:text-white"
  >
    <AccordionTrigger className="flex w-full items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180">
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
    <AccordionTrigger className="flex w-full items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180">
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

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example %}

```jsx
<Accordion collapsible type="single" defaultValue="1">
  <AccordionItem
    value="1"
    className="dark:bg-secondary-800 rounded-lg bg-white p-2 px-4 dark:text-white"
  >
    <AccordionTrigger
      isUnstyled
      className="flex w-full items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180"
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

## Props

---

### Accordion

This component is built on top of [Radix Accordion](https://www.radix-ui.com/primitives/docs/components/accordion#root)

| Property   | Description                                            | Type                       | Default   |
| ---------- | ------------------------------------------------------ | -------------------------- | --------- |
| size       | Size of the accordion component.                       | `"sm"` or `"md"` or `"lg"` | `"md"`    |
| variant    | Style variant of the accordion component.              | `"solid"` or `"ghost"`     | `"solid"` |
| isUnstyled | Remove style from this component and its subcomponents | `boolean`                  | `false`   |

### AccordionItem

This component is built on top of [Radix Accordion Item](https://www.radix-ui.com/primitives/docs/components/accordion#item)

### AccordionTrigger

This component is built on top of [Radix Accordion Trigger](https://www.radix-ui.com/primitives/docs/components/accordion#trigger)

| Property   | Description                                                   | Type          | Default |
| ---------- | ------------------------------------------------------------- | ------------- | ------- |
| openIcon   | Custom JSX element for the open state icon.                   | `JSX.Element` | -       |
| closeIcon  | Custom JSX element for the close state icon.                  | `JSX.Element` | -       |
| showIcon   | Determine whether to display the default open and close icons | `boolean`     | `true`  |
| isUnstyled | Remove style from this component                              | `boolean`     | `false` |

### AccordionContent

This component is built on top of [Radix Accordion Content](https://www.radix-ui.com/primitives/docs/components/accordion#content)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |
