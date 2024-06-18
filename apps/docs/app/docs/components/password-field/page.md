---
title: Password Field
nextjs:
  metadata:
    title: Password Field
    description: Just like Input Field, Password Field is used for password inputs but gives an extra functionality of show and hide password.
    twitter:
      title: Password Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Password%20Field
    openGraph:
      title: Password Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Password%20Field
---

Just like Input Field, Password Field is used for Password inputs but gives an extra functionality of show and hide Password.

This component is made using Input Field and Input Group, making all native field props available for use.

## Anatomy

Import the component.

```jsx
import { PasswordField } from "@rafty/ui";

<PasswordField />;
```

## Usage

{% example %}

```jsx
<PasswordField />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="w-full space-y-2">
  <PasswordField size="sm" />
  <PasswordField size="md" />
  <PasswordField size="lg" />
</div>
```

{% /example %}

## Variant

There are 3 `variant` options available: `"solid"`, `"outline"` (default) & `"ghost"`.

{% example %}

```jsx
<div className="w-full space-y-2">
  <PasswordField variant="outline" />
  <PasswordField variant="ghost" />
  <PasswordField variant="solid" />
</div>
```

{% /example %}

---

## Props

### PasswordField

`PasswordField` is made using [InputField](https://rafty.rhinobase.io/docs/components/input-field) and [InputGroup](https://rafty.rhinobase.io/docs/components/input-field#input-group).

| Property | Description                           | Type                                      | Default |
| -------- | ------------------------------------- | ----------------------------------------- | ------- |
| size     | Size of the password field component. | `"sm"` or `"md"` or `"lg"` or `undefined` | `"md"`  |
