---
title: Avatar
nextjs:
  metadata:
    title: Avatar
    description: The Avatar component is used to represent a user and can display the profile picture, initials or fallback icon.
    twitter:
      title: Avatar
      images:
        url: https://rafty.rhinobase.io/api/og?title=Avatar
    openGraph:
      title: Avatar
      images:
        url: https://rafty.rhinobase.io/api/og?title=Avatar
---

The Avatar component is used to represent a user and can display the profile picture, initials or fallback icon.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { Avatar } from "@rafty/ui";

<Avatar />;
```

## Usage

By default, the Avatar component displays a generic Person Icon. You can replace this icon with a text string by passing `name` prop or an image by passing `src` prop.

{% example %}

```jsx
<Avatar name="Sample Name" />
```

{% /example %}

## Size

There are 3 `size` options in Avatar Component: `sm`, `md` (default) & `lg`.

{% example %}

```jsx
<Avatar
  name="Jhon"
  src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  size="sm"
/>
```

{% /example %}

## Avatar Group

- In case, you might need to stack avatars as a group. Use the AvatarGroup component.
- To limit the number of avatars, use the `max` prop. It'll truncate the avatars and show a "+X" label (where X is the remaining avatars).
- To size all the avatars equally, pass the `size` prop in AvatarGroup.

{% example %}

```jsx
<AvatarGroup max={2} size="lg" className="h-12">
  <Avatar
    name="Lily"
    src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  />
  <Avatar
    name="Jhon"
    src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  />
  <Avatar
    name="Aman"
    src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  />
  <Avatar
    name="Jhon"
    src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  />
</AvatarGroup>
```

{% /example %}

## Props

---

### Avatar

`Avatar` composes the `<div>` component.

| Property | Description                           | Type                       | Default |
| -------- | ------------------------------------- | -------------------------- | ------- |
| name     | User name or initials for the avatar. | `string`                   | -       |
| src      | URL of the image for the avatar.      | `string`                   | -       |
| size     | Size of the avatar component.         | `"sm"` or `"md"` or `"lg"` | `"md"`  |

### Avatar Group

`Avatar Group` composes the `<div>` component.

| Property | Description                                          | Type                       | Default |
| -------- | ---------------------------------------------------- | -------------------------- | ------- |
| max      | Maximum number of avatars to display                 | `number`                   | -       |
| size     | Size of avatar group component and its subcomponents | `"sm"` or `"md"` or `"lg"` | `"md"`  |
