---
title: Field
pageTitle: Field - Rafty UI
description: Field
---

## Import

Collect information from your users using validation rules.

```jsx
import { FieldControl, FieldLabel, InputField } from "@rafty/ui";
```

## Usage

```jsx
<FieldControl name="email">
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
</FieldControl>
```

## Orientation

Pass the `orientation` prop if you need to adjust the orientation of the fieldcontrol. Values can be `col, row, row-reverse`.

### col

```jsx
<FieldControl name="email" orientation="col">
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
</FieldControl>
```

### row

```jsx
<FieldControl name="email" orientation="row">
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
</FieldControl>
```

### row-reverse

```jsx
<FieldControl name="email" orientation="row-reverse">
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
</FieldControl>
```

## Required

Pass `isRequired` prop to make filed required.

```jsx
<FieldControl name="email" isRequired>
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
</FieldControl>
```

## Disabled

Pass `isDisabled` to disable field.

```jsx
<FieldControl name="email">
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
</FieldControl>
```

## Read Only

Pass `isReadOnly` to disable field.

```jsx
<FieldControl name="email" isReadOnly>
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
</FieldControl>
```
