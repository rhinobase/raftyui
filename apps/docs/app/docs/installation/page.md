---
title: Installation
nextjs:
  metadata:
    title: Installation
    description: Installation
---

## Import

Rafty UI exports 5 accordion-related components.

- Accordion: The wrapper that uses cloneElement to pass props to AccordionItem children.
- AccordionItem: A single accordion item.
- AccordionButton: The button that toggles the expand/collapse state of the accordion item. This button must be wrapped in an element with role heading.
- AccordionPanel: The container for the details to be revealed.
- AccordionIcon: A chevron-down icon that rotates based on the expanded/collapsed state

```jsx
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@rafty/ui";
```

## Usage

```jsx
<Accordion>
  <AccordionItem value="1">
    <AccordionTrigger>
        <span className="flex-1 text-left">Section 1 title</span>
    </AccordionTrigger>
    <AccordionContent data-cy="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger
        <span className="flex-1 text-left">Section 2 title</span>
    </AccordionTrigger>
    <AccordionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Collapsible

To make each accordion toggle (expand/collapse) on click, pass the `collapsible`
prop.

```jsx
<Accordion collapsible>
  <AccordionItem value="1">
    <AccordionTrigger>
        <span className="flex-1 text-left">Section 1 title</span>
    </AccordionTrigger>
    <AccordionContent data-cy="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger
        <span className="flex-1 text-left">Section 2 title</span>
    </AccordionTrigger>
    <AccordionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Expand Multiple items at once

To make each accordion toggle (expand/collapse) on click, pass the `collapse` and `type="multiple"`
prop.

```jsx
<Accordion collapse type="multiple">
  <AccordionItem value="1">
    <AccordionTrigger>
        <span className="flex-1 text-left">Section 1 title</span>
    </AccordionTrigger>
    <AccordionContent data-cy="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger
        <span className="flex-1 text-left">Section 2 title</span>
    </AccordionTrigger>
    <AccordionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Expand Item With DefaultValue

```jsx
<Accordion collapse type="multiple" defaultValue="1">
  <AccordionItem value="1">
    <AccordionTrigger>
        <span className="flex-1 text-left">Section 1 title</span>
    </AccordionTrigger>
    <AccordionContent data-cy="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger
        <span className="flex-1 text-left">Section 2 title</span>
    </AccordionTrigger>
    <AccordionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Barebone

Pass `isBarebone` prop to remove all style in accordion.

```jsx
<Accordion isBarebone collapse type="multiple" defaultValue="1">
  <AccordionItem value="1">
    <AccordionTrigger>
        <span className="flex-1 text-left">Section 1 title</span>
    </AccordionTrigger>
    <AccordionContent data-cy="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger
        <span className="flex-1 text-left">Section 2 title</span>
    </AccordionTrigger>
    <AccordionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

```jsx
<Accordion collapse type="multiple" defaultValue="1">
  <AccordionItem value="1">
    <AccordionTrigger  isUnstyled >
        <span className="flex-1 text-left">Section 1 title</span>
    </AccordionTrigger>
    <AccordionContent data-cy="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger
        <span className="flex-1 text-left">Section 2 title</span>
    </AccordionTrigger>
    <AccordionContent  isUnstyled >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## API

---

### Root

| Property      | Description                        | Type                 | Default          |
| ------------- | ---------------------------------- | -------------------- | ---------------- |
| className     |                                    | `string`             |                  |
| collapsible   | To Cloase all the Accordion Items  | `boolean`            | false            |
| type          | To Open Multiple Accordion Items   | `single`/ `multiple` | single           |
| isBarebone    | Removes style from whole component | `boolean`            | false            |
| UnStyled      | Removes Style from component       | `boolean`            | false            |
| value         |                                    | `string`             | No default value |
| defaultValue  |                                    | `string`             | No default value |
| onValueChange |                                    | `function`           | No default value |
| value         |                                    | `string[]`           | []               |
| defaultValue  |                                    | `string[]`           | []               |
| onValueChange |                                    | `function`           | No default value |
| collapsible   |                                    | `boolean`            | false            |
| disabled      |                                    | `boolean`            | false            |
| dir           |                                    | `enum`               | "ltr"            |
| orientation   |                                    | `enum`               | "vertical"       |
| variant       |                                    | `ghost` / `solid`    | `ghost`          |
| size          |                                    | `sm` / `md` / `lg`   | `md`             |

### Item

| Property           | Description | Type                      | Default |
| ------------------ | ----------- | ------------------------- | ------- |
| className          |             | `string`                  |         |
| asChild            |             | `boolean`                 | false   |
| disabled           |             | `boolean`                 | false   |
| value              |             | `string`                  |         |
| Data Attribute     |             | Values                    |         |
| [data-state]       |             | `open` / `closed`         |         |
| [data-disabled]    |             | Present when disabled     |         |
| [data-orientation] |             | `vertical` / `horizontal` |         |

### Header

| Property           | Description | Type                      | Default |
| ------------------ | ----------- | ------------------------- | ------- |
| className          |             | `string`                  |         |
| asChild            |             | boolean                   | false   |
| Data               |             | Attribute                 | Values  |
| [data-state]       |             | `open` / `closed`         |         |
| [data-disabled]    |             | Present when disabled     |         |
| [data-orientation] |             | `vertical` / `horizontal` |         |

### Trigger

`AccordionTrigger`composes `Button` component

| Property           | Description | Type                      | Default |
| ------------------ | ----------- | ------------------------- | ------- |
| className          |             | `string`                  |         |
| asChild            |             | boolean                   | false   |
| Data Attribute     |             | Values                    |         |
| [data-state]       |             | `open` / `closed`         |         |
| [data-disabled]    |             | Present when disabled     |         |
| [data-orientation] |             | `vertical` / `horizontal` |         |

### Content

| Property                         | Description | Type                                           | Default          |
| -------------------------------- | ----------- | ---------------------------------------------- | ---------------- |
| className                        |             | `string`                                       |                  |
| asChild                          |             | boolean                                        | false            |
| forceMount                       |             | boolean                                        | No default value |
| Data Attribute                   |             | Values                                         |                  |
| [data-state]                     |             | `open` / `closed`                              |                  |
| [data-disabled]                  |             | Present when disabled                          |                  |
| [data-orientation]               |             | `vertical` / `horizontal`                      |                  |
| CSS Variable                     |             | Description                                    |                  |
| --radix-accordion-content-width  |             | The width of the content when it opens/closes  |                  |
| --radix-accordion-content-height |             | The height of the content when it opens/closes |                  |
