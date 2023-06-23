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
  <ErrorMessage>! error</ErrorMessage>
</FieldControl>
```

## Orientation

Pass the `orientation` prop if you need to adjust the orientation of the fieldcontrol. Values can be `col, row, row-reverse`.

### col

```jsx
<FieldControl name="email" orientation="col">
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
  <ErrorMessage>! error</ErrorMessage>
</FieldControl>
```

### row

```jsx
<FieldControl name="email" orientation="row">
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
  <ErrorMessage>! error</ErrorMessage>
</FieldControl>
```

### row-reverse

```jsx
<FieldControl name="email" orientation="row-reverse">
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
  <ErrorMessage>! error</ErrorMessage>
</FieldControl>
```

## Required

Pass `isRequired` prop to make filed required.

```jsx
<FieldControl name="email" isRequired>
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
  <ErrorMessage>! error</ErrorMessage>
</FieldControl>
```

## Disabled

Pass `isDisabled` to disable field.

```jsx
<FieldControl name="email">
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
  <ErrorMessage>! error</ErrorMessage>
</FieldControl>
```

## Read Only

Pass `isReadOnly` to disable field.

```jsx
<FieldControl name="email" isReadOnly>
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
  <ErrorMessage>! error</ErrorMessage>
</FieldControl>
```

### Loading

```jsx
<FieldControl name="email" isLoading>
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
  <ErrorMessage>! error</ErrorMessage>
</FieldControl>
```

### Invalid

```jsx
<FieldControl name="email" isInvalid>
  <FieldLabel>Email Address</FieldLabel>
  <InputField />
  <ErrorMessage>! error</ErrorMessage>
</FieldControl>
```

### API

---

### Root

| Property    | Description | Type                    | Default |
| ----------- | ----------- | ----------------------- | ------- |
| orientation |             | `col, row, row-reverse` | col     |
| isRequired  |             | `boolean`               | false   |
| isDisabled  |             | `boolean`               | false   |
| isReadOnly  |             | `boolean`               | false   |
| isLoading   |             | `boolean`               | false   |
| isInvalid   |             | `boolean`               | false   |

### Label

| Property | Description | Type     | Default |
| -------- | ----------- | -------- | ------- |
| htmlFor  |             | `string` |         |

### Error Message

| Property | Description | Type          | Default |
| -------- | ----------- | ------------- | ------- |
| key      |             | `Key` /`null` |         |
