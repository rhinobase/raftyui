---
title: QR Code
nextjs:
  metadata:
    title: QR Code
    description: A component that generates a QR code based on the provided data.
    twitter:
      title: QR Code
      images:
        url: https://rafty.rhinobase.io/api/og?title=QR%20Code
    openGraph:
      title: QR Code
      images:
        url: https://rafty.rhinobase.io/api/og?title=QR%20Code
---

A component that generates a QR code based on the provided data.

This component is made on top of [Ark QR Code Component](https://ark-ui.com/react/docs/components/qr-code) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { QRCode } from "@rafty/ui";

<QRCode />;
```

## Usage

{% example %}

```jsx
<QRCode value="https://rafty.rhinobase.io/" />
```

{% /example %}

---

## Props

### QRCode

`QRCode` component is built on top of [Ark QR Code](https://ark-ui.com/react/docs/components/qr-code#api-reference)
