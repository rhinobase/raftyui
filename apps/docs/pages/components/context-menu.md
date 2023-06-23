---
title: Context Menu
pageTitle: Context Menu - Rafty UI
description: Context Menu
---

# Import

Displays a menu located at the pointer triggered by a right-click or a long-press.

```jsx
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@rafty/ui";
```

## Usage

```jsx
const [bookmarksChecked, setBookmarksChecked] = useState(true);
const [urlsChecked, setUrlsChecked] = useState(false);
const [person, setPerson] = useState("1");

retutn(
  <ContextMenu>
    <ContextMenuTrigger></ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Back</ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
        <ContextMenuSubContent>
          <ContextMenuItem>Save Page As...</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Developer Tools</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
        Show Bookmarks
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
        Show Full URLs
      </ContextMenuCheckboxItem>
      <ContextMenuSeparator />
      <ContextMenuLabel>People</ContextMenuLabel>
      <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
        <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
        <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuContent>
  </ContextMenu>
);
```

## Size

Use the `size` prop to change the size of the ContextMenu. You can set the value to `sm, md, or lg`.

### sm

```jsx
<ContextMenu size="sm">
  <ContextMenuTrigger></ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### md

```jsx
<ContextMenu size="md">
  <ContextMenuTrigger></ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### lg

```jsx
<ContextMenu size="lg">
  <ContextMenuTrigger></ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Barebone

Pass `isBarebone` prop to remove all style in context-menu.

```jsx
<ContextMenu isbarebone>
  <ContextMenuTrigger></ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### API

---

### Root

| Property     | Description | Type          | Default          |
| ------------ | ----------- | ------------- | ---------------- |
| size         |             | `sm, md, lg`  | md               |
| isBarebone   |             | `boolean`     | false            |
| dir          |             | `ltr` / `rtl` | No default value |
| onOpenChange |             | `function`    | No default value |
| modal        |             | `boolean`     | true             |

### Trigger

| Property       | Description | Type              | Default |
| -------------- | ----------- | ----------------- | ------- |
| asChild        |             | `boolean`         | false   |
| disabled       |             | `boolean`         | false   |
| Data Attribute |             | Values            |         |
| [data-state]   |             | `open` / `closed` |         |

### Content

| Property             | Description | Type                               | Default          |
| -------------------- | ----------- | ---------------------------------- | ---------------- |
| asChild              |             | `boolean`                          | false            |
| loop                 |             | `boolean`                          | false            |
| onCloseAutoFocus     |             | `function`                         | No default value |
| onEscapeKeyDown      |             | `function`                         | No default value |
| onPointerDownOutside |             | `function`                         | No default value |
| onFocusOutside       |             | `function`                         | No default value |
| onInteractOutside    |             | `function`                         | No default value |
| forceMount           |             | `boolean`                          | No default value |
| alignOffset          |             | `number`                           | 0                |
| avoidCollisions      |             | `boolean`                          | true             |
| collisionBoundary    |             | Boundary                           | []               |
| collisionPadding     |             | `number / Padding `                | 0                |
| sticky               |             | `partial/always`                   | "partial"        |
| hideWhenDetached     |             | `boolean`                          | false            |
| Data Attribute       |             | Values                             |                  |
| [data-state]         |             | `open`/ `closed`                   |                  |
| [data-side]          |             | `left` / `right` / `bottom`/ `top` |                  |
| [data-align]         |             | `start`/ `end` / `center`          |                  |
| CSS Variable         |             | Description                        |                  |
