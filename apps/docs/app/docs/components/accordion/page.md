---
title: Accordion
pageTitle: Accordion - Rafty UI
description: Accordion
---

## Anatomy

Import all parts and piece them together.

```jsx
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@rafty/ui";

<Accordion>
  <AccordionItem>
    <AccordionTrigger />
    <AccordionContent />
  </AccordionItem>
</Accordion>;
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

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isBarebone | Removes style from whole component | `boolean` | false   |

### Trigger

`AccordionTrigger`composes `Button` component

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | -       |

### Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | -       |
