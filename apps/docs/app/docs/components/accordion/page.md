---
title: Accordion
pageTitle: Accordion - Rafty UI
description: Accordion
---

## Import

Rafty UI exports 5 accordion-related components.

- Accordion: The wrapper that uses cloneElement to pass props to AccordionItem children.
- AccordionItem: A single accordion item.
- AccordionButton: The button that toggles the expand/collapse state of the accordion item. This button must be wrapped in an element with role heading.
- AccordionPanel: The container for the details to be revealed.
- AccordionIcon: A chevron-down icon that rotates based on the expanded/collapsed state

```jsx
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@rafty/ui";

() => (
  <Accordion>
    <AccordionItem>
      <AccordionTrigger />
      <AccordionContent />
    </AccordionItem>
  </Accordion>
);
```

## Usage

{% example name="accordion:usage" /%}

## Collapsible

To make each accordion toggle (expand/collapse) on click, pass the `collapsible`
prop.

{% example name="accordion:collapsible" /%}

## Expand Multiple items at once

To make each accordion toggle (expand/collapse) on click, pass the `collapse` and `type="multiple"`
prop.

{% example name="accordion:multi_item" /%}

## Expand Item With DefaultValue

{% example name="accordion:defaultvalue" /%}

## Barebone

Pass `isBarebone` prop to remove all style in accordion.

{% example name="accordion:barebone" /%}

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

{% example name="accordion:unstyled" /%}

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
