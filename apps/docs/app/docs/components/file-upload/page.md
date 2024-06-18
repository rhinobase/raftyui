---
title: File Upload
nextjs:
  metadata:
    title: File Upload
    description: A component that is used to upload one or more files.
    twitter:
      title: File Upload
      images:
      url: https://rafty.rhinobase.io/api/og?title=File%20Upload
    openGraph:
      title: File Upload
      images:
      url: https://rafty.rhinobase.io/api/og?title=File%20Upload
---

A component that is used to upload one or more files.

This component is made on top of [Ark File Upload Component](https://ark-ui.com/react/docs/components/file-upload) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { FileUpload } from "@rafty/ui";

<FileUpload />;
```

## Usage

{% example %}

```jsx
<FileUpload />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<FileUpload isDisabled />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<FileUpload isLoading />
```

{% /example %}

## Max File Upload

{% example %}

```jsx
<FileUpload maxFiles="5" />
```

{% /example %}

---

## Props

### FileUpload

`FileUpload` component is built on top of [Ark File Upload](https://ark-ui.com/react/docs/components/file-upload#api-reference)

| Property   | Description                  | Type                                                   | Default |
| ---------- | ---------------------------- | ------------------------------------------------------ | ------- |
| isDisabled | To manage the disable state. | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading  | To manage the loading state. | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
