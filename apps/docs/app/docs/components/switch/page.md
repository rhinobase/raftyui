---
title: Switch
pageTitle: Switch - Rafty UI
description: A control that allows the user to toggle between checked and not checked.It is used as an alternative for the checkbox component.
---

A control that allows the user to toggle between checked and not checked.It is used as an alternative for the checkbox component.

This component is made on top of [Radix UIs Switch Component](https://www.radix-ui.com/primitives/docs/components/switch) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { Switch } from "@rafty/ui";

<Switch />;
```

## Usage

{% example name="switch:usage" /%}

## Size

There are 3 size options in spinner: `sm`, `md` (default) & `lg

{% example name="switch:size" /%}

## IsDisabled

IsDisabled prop is used to show select component in disabled state.

{% example name="switch:disabled" /%}

## Default Selected

Pass the `defaultSelected` prop if you need to set the switch selected by default and `isSelected` prop is used to manage checked state.

{% example name="switch:selected" /%}

## IsRequired

IsRequired prop is used to show select in required state.

{% example name="switch:required" /%}

## IsReadOnly

IsReadOnly prop is used to show select in read-only state

{% example name="switch:readonly" /%}
