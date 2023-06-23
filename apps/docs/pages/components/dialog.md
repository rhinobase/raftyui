---
title: Dialog
pageTitle: Dialog - Rafty UI
description: Dialog
---

## Import

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

```jsx
import { Dialog, DialogBody, DialogContent, DialogOverlay, DialogHeading, DialogTrigger, DialogCloseButton } from "@rafty/ui";
```

## Usage

```jsx
<Dialog>
  <DialogTrigger>open</DialogTrigger>
  <DialogOverlay />
  <DialogContent>
    <DialogBody>
      <DialogHeading>Dialog Header</DialogHeading>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
      <div className="flex items-center justify-end pt-5">
        <Button>Save Change</Button>
      </div>
      <DialogCloseButton />
    </DialogBody>
  </DialogContent>
</Dialog>
```

## Sizes

Pass the `size` prop if you need to adjust the size of the dialog. Values can be `sm, md, lg`.

### sm

```jsx
<Dialog size="sm">
  <DialogTrigger>open</DialogTrigger>
  <DialogOverlay />
  <DialogContent>
    <DialogBody>
      <DialogHeading>Dialog Header</DialogHeading>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
      <div className="flex items-center justify-end pt-5">
        <Button>Save Change</Button>
      </div>
      <DialogCloseButton />
    </DialogBody>
  </DialogContent>
</Dialog>
```

### md

```jsx
<Dialog size="md">
  <DialogTrigger>open</DialogTrigger>
  <DialogOverlay />
  <DialogContent>
    <DialogBody>
      <DialogHeading>Dialog Header</DialogHeading>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
      <div className="flex items-center justify-end pt-5">
        <Button>Save Change</Button>
      </div>
      <DialogCloseButton />
    </DialogBody>
  </DialogContent>
</Dialog>
```

### lg

```jsx
<Dialog size="lg">
  <DialogTrigger>open</DialogTrigger>
  <DialogOverlay />
  <DialogContent>
    <DialogBody>
      <DialogHeading>Dialog Header</DialogHeading>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
      <div className="flex items-center justify-end pt-5">
        <Button>Save Change</Button>
      </div>
      <DialogCloseButton />
    </DialogBody>
  </DialogContent>
</Dialog>
```

## Barebone

Pass `isBarebone` prop to remove all style in dialog.

```jsx
<Dialog isBarebone>
  <DialogTrigger>open</DialogTrigger>
  <DialogOverlay />
  <DialogContent>
    <DialogBody>
      <DialogHeading>Dialog Header</DialogHeading>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
      <div className="flex items-center justify-end pt-5">
        <Button>Save Change</Button>
      </div>
      <DialogCloseButton />
    </DialogBody>
  </DialogContent>
</Dialog>
```

### API

---

### Root

| Property     | Description                        | Type         | Default          |
| ------------ | ---------------------------------- | ------------ | ---------------- |
| size         |                                    | `sm, md, lg` | md               |
| isBarebone   | Removes style from whole component | `boolean`    | false            |
| defaultOpen  |                                    | boolean      | No default value |
| open         |                                    | boolean      | No default value |
| onOpenChange |                                    | function     | No default value |
| modal        |                                    | boolean      | true             |

### Trigger

`DialogTrigger`composes `Button` component

| Property       | Description | Type              | Default |
| -------------- | ----------- | ----------------- | ------- |
| isUnstyled     |             | `boolean`         |         |
| asChild        |             | `boolean`         | false   |
| Data Attribute |             | Values            |         |
| [data-state]   |             | `open` / `closed` |         |

### Overlay

| Property       | Description | Type              | Default          |
| -------------- | ----------- | ----------------- | ---------------- |
| className      |             | `string`          |                  |
| isUnstyled     |             | `boolean`         |                  |
| asChild        |             | boolean           | false            |
| forceMount     |             | boolean           | No default value |
| Data Attribute |             | Values            |                  |
| [data-state]   |             | "open" / "closed" |                  |

### Content

| Property             | Description | Type              | Default          |
| -------------------- | ----------- | ----------------- | ---------------- |
| className            |             | `string`          |                  |
| isUnstyled           |             | `boolean`         | false            |
| asChild              |             | `boolean`         | false            |
| forceMount           |             | boolean           | No default value |
| onOpenAutoFocus      |             | function          | No default value |
| onCloseAutoFocus     |             | function          | No default value |
| onEscapeKeyDown      |             | function          | No default value |
| onPointerDownOutside |             | function          | No default value |
| onInteractOutside    |             | function          | No default value |
| Data Attribute       |             | Values            |                  |
| [data-state]         |             | `open` / `closed` |                  |

### Close

| Property   | Description | Type      | Default |
| ---------- | ----------- | --------- | ------- |
| isUnstyled |             | `boolean` | false   |
| asChild    |             | `boolean` | false   |

### Title

| Property   | Description | Type      | Default |
| ---------- | ----------- | --------- | ------- |
| className  |             | `string`  |         |
| isUnstyled |             | `boolean` | false   |
| asChild    |             | `boolean` | false   |

### Descriptiom

| Property   | Description | Type      | Default |
| ---------- | ----------- | --------- | ------- |
| className  |             | `string`  |         |
| isUnstyled |             | `boolean` | false   |
| asChild    |             | `boolean` | false   |
