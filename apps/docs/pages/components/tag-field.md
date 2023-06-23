---
title: Tag Field
pageTitle: Tag Field - Rafty UI
description: Tag Field
---

# Import

- TagField: TagField is used to create tag on the basis of inputs

```jsx
import { TagField } from "@rafty/ui";
```

## Usage

```jsx
<TagField />
```

## Disabled

Pass `isDisabled` prop to disable tag-field.

```jsx
<TagField />
```

## Required

Pass the `isRequired` prop to make search-field Required.

```jsx
<TagField isRequired />
```

### API

---

### Roots

| Property    | Description | Type                       | Default |
| ----------- | ----------- | -------------------------- | ------- |
| className   |             | `string`                   |         |
| initialData |             | `string`                   |         |
| onChange    |             | `(tags: string[]) => void` |         |
