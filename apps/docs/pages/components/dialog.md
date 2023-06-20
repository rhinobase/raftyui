---
title: Dialog
pageTitle: Dialog - Rafty UI
description: Dialog
---

## Import

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

- Dialog
- DialogBody
- DialogContent
- DialogOverlay
- DialogHeading
- DialogTrigger
- DialogCloseButton

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
