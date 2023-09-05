---
title: Avatar
pageTitle: Avatar - Rafty UI
description: Avatar
---

The Avatar component is used to represent a user and can display the profile picture, initials or fallback icon.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { Avatar } from "@rafty/ui";

() => <Avatar />;
```

## Usage

By default, the Avatar component displays a generic Person Icon. You can replace this icon with a text string by passing `name` prop or an image by passing `src` prop.

{% example name="avatar:usage" /%}

## Size

There are 3 `size` options in Avatar Component: `sm`, `md` (default) & `lg`.

{% example name="avatar:size" /%}

## Avatar Group

- In case, you might need to stack avatars as a group. Use the AvatarGroup component.
- To limit the number of avatars, use the `max` prop. It'll truncate the avatars and show a "+X" label (where X is the remaining avatars).
- To size all the avatars equally, pass the `size` prop in AvatarGroup.

{% example name="avatar:avatar-group" /%}
