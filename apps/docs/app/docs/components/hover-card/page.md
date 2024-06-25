---
title: Hover Card
nextjs:
  metadata:
    title: Hover Card
    description: For sighted users to preview content available behind a link.
    twitter:
      title: Hover Card
      images:
        url: https://rafty.rhinobase.io/api/og?title=Hover%20Card
    openGraph:
      title: Hover Card
      images:
        url: https://rafty.rhinobase.io/api/og?title=Hover%20Card
---

For sighted users to preview content available behind a link.

This component is made on top of [Radix UIs Hover Card Component](https://www.radix-ui.com/primitives/docs/components/hover-card) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from a particular sub-component).

## Anatomy

Import all parts and piece them together.

```jsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@rafty/ui";

<HoverCard>
  <HoverCardTrigger />
  <HoverCardContent />
</HoverCard>;
```

## Usage

{% example %}

```jsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Image
      width={45}
      height={45}
      className="block size-[45px] cursor-pointer rounded-full"
      src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkyfHxjYXJ0b29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      alt="Rafty UI"
    />
  </HoverCardTrigger>
  <HoverCardContent className="not-prose w-[300px] space-y-4">
    <Image
      width={56}
      height={56}
      className="size-14 rounded-full"
      src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkyfHxjYXJ0b29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      alt="Rafty UI"
    />
    <div className="w-full space-y-1">
      <h4 className="text-primary-500 dark:text-primary-300 text-sm font-semibold">
        @nextjs
      </h4>
      <p className="text-sm">
        The React Framework - created and maintained by @vercel.
      </p>
      <p className="text-secondary-500 text-xs">Joined December 2021</p>
    </div>
  </HoverCardContent>
</HoverCard>
```

{% /example %}

## Align

{% example %}

```jsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Image
      width={45}
      height={45}
      className="block size-[45px] cursor-pointer rounded-full"
      src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkyfHxjYXJ0b29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      alt="Rafty UI"
    />
  </HoverCardTrigger>
  <HoverCardContent align="start" className="not-prose w-[300px] space-y-4">
    <Image
      width={56}
      height={56}
      className="size-14 rounded-full"
      src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkyfHxjYXJ0b29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      alt="Rafty UI"
    />
    <div className="w-full space-y-1">
      <h4 className="text-primary-500 dark:text-primary-300 text-sm font-semibold">
        @nextjs
      </h4>
      <p className="text-sm">
        The React Framework - created and maintained by @vercel.
      </p>
      <p className="text-secondary-500 text-xs">Joined December 2021</p>
    </div>
  </HoverCardContent>
</HoverCard>
```

{% /example %}

---

## Props

### HoverCard

This component is built on top of [Radix Hover Card](https://www.radix-ui.com/primitives/docs/components/hover-card#root)

### HoverCardTrigger

This component is built on top of [Radix Hover Card Trigger](https://www.radix-ui.com/primitives/docs/components/hover-card#trigger)

### HoverCardContent

This component is built on top of [Radix Hover Card Content](https://www.radix-ui.com/primitives/docs/components/hover-card#content)

| Property   | Description                                    | Type                               | Default    |
| ---------- | ---------------------------------------------- | ---------------------------------- | ---------- |
| align      | To manage the alignment of content poover.     | `"center"` or `"start"` or `"end"` | `"center"` |
| sideOffset | Side offset value of the content from trigger. | `number`                           | `4`        |
