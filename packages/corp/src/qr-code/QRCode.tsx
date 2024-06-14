"use client";
import { QrCode as ArkQrCode, type QrCodeRootProps } from "@ark-ui/react";
import { classNames } from "@rafty/ui";
import { type ElementRef, forwardRef } from "react";

export type QRCode = QrCodeRootProps;

export const QRCode = forwardRef<ElementRef<typeof ArkQrCode.Root>, QRCode>(
  function QRCode({ className, ...props }, forwardedRef) {
    return (
      <ArkQrCode.Root
        {...props}
        className={classNames("size-24 bg-white", className)}
        ref={forwardedRef}
      >
        <ArkQrCode.Frame>
          <ArkQrCode.Pattern />
        </ArkQrCode.Frame>
      </ArkQrCode.Root>
    );
  },
);
