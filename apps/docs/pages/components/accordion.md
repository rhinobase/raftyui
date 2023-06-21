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

## Expand Items

To make each accordion toggle (expand/collapse) on click, pass the `collapse`
prop.

```jsx
<Accordion collapse>
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
