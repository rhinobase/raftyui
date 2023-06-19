---
title: Accordion
pageTitle: Accordion - Rafty UI
description: Accordion
---

# Import

Rafty UI exports 5 accordion-related components.

- Accordion: The wrapper that uses cloneElement to pass props to AccordionItem children.
- AccordionItem: A single accordion item.
- AccordionButton: The button that toggles the expand/collapse state of the accordion item. This button must be wrapped in an element with role heading.
- AccordionPanel: The container for the details to be revealed.
- AccordionIcon: A chevron-down icon that rotates based on the expanded/collapsed state

```jsx
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@rafty/ui";
```
