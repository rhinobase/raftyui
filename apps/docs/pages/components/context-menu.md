---
title: Context Menu
pageTitle: Context Menu - Rafty UI
description: Context Menu
---

# Import

Displays a menu located at the pointer triggered by a right-click or a long-press.

- ContextMenu
- ContextMenuCheckboxItem
- ContextMenuContent
- ContextMenuItem
- ContextMenuLabel
- ContextMenuRadioGroup
- ContextMenuRadioItem
- ContextMenuSeparator
- ContextMenuSub
- ContextMenuSubContent
- ContextMenuSubTrigger
- ContextMenuTrigger

```jsx
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@rafty/ui";
```

## Usage

```jsx
<ContextMenu>
  <ContextMenuTrigger></ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem disabled>Forward</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>New Window...</ContextMenuItem>
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
```

## Sizes

Use the `size` prop to change the size of the ContextMenu. You can set the value to `sm, md, or lg`.

```jsx
<ContextMenu size="sm">
  <ContextMenuTrigger></ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem disabled>Forward</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>New Window...</ContextMenuItem>
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
```
