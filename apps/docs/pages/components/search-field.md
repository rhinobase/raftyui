---
title: Search Field
pageTitle: Search Field - Rafty UI
description: Search Field
---

## Import

A SearchField is a text field designed for searches.

- SearchField

```jsx
import { SearchField } from "@rafty/ui";
```

## Usage

```jsx
<SearchField />
```

## Size

Pass the `size` prop if you need to adjust the size of the search-field. Values can be `sm, md, lg`.

```jsx
<SearchField size="sm"/>
<SearchField size="md"/>
<SearchField size="lg"/>
```

## Variant

Pass the `variant` prop if you need to adjust the visual style of the searxh-field. Values can be `solid, outline, ghost`.

```jsx
<SearchField size="solid"/>
<SearchField size="outline"/>
<SearchField size="ghost"/>
```

## Read Only

Pass the `isReadOnly` prop to make search-field Read Only.

```jsx
<SearchField isReadOnly />
```

## Required

Pass the `isRequired` prop to make search-field Required.

```jsx
<SearchField isRequired />
```

## Disabled

Pass the `isDisabled` prop to make search-field Disabled.

```jsx
<SearchField isDisabled />
```
