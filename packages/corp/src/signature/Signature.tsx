"use client";
import { SignaturePad, type SignaturePadRootProps } from "@ark-ui/react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import {
  Button,
  type SizeType,
  type ValueOrFunction,
  classNames,
  getValue,
  useFieldControlContext,
} from "@rafty/ui";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";

const signatureClasses = cva(
  "group/signature w-full h-60 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
  {
    variants: {
      readonly: {
        true: "cursor-default",
        false: "cursor-pointer",
      },
    },
  },
);

export type Signature = SignaturePadRootProps & {
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
};

export const Signature = forwardRef<
  ElementRef<typeof SignaturePad.Root>,
  Signature
>(function Signature(
  {
    name,
    disabled,
    readOnly,
    isDisabled,
    isLoading,
    isInvalid,
    isReadOnly,
    className,
    ...props
  },
  forwardedRef,
) {
  const fieldControlContext = useFieldControlContext() ?? {
    isDisabled: false,
    isLoading: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  };

  const _name = name ?? fieldControlContext.name;
  const _disabled =
    (disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled) ||
    (getValue(isLoading) ?? fieldControlContext.isLoading);
  const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
  const _readOnly =
    readOnly ?? getValue(isReadOnly) ?? fieldControlContext.isReadOnly;

  const signatureProps: SignaturePadRootProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    readOnly: _readOnly,
    className: classNames(signatureClasses({ readonly: _readOnly }), className),
    // @ts-ignore
    "data-invalid": _invalid,
  };

  return (
    <SignaturePad.Root {...signatureProps} ref={forwardedRef}>
      <SignaturePad.Control className="border-secondary-300 dark:bg-secondary-900 dark:border-secondary-700 ring-primary-300 dark:ring-primary-100 dark:ring-offset-secondary-950 h-full w-full rounded-lg border bg-white outline-none ring-offset-2 ring-offset-white focus-visible:ring-2 group-data-[invalid=false]/signature:ring-red-100 group-data-[invalid=true]/signature:ring-red-300">
        <SignaturePad.Segment className="fill-black dark:fill-white" />
        <SignaturePad.ClearTrigger
          title="Clear"
          className="absolute right-3 top-3"
          asChild
        >
          <Button size="icon" variant="ghost" isDisabled={_readOnly}>
            <ArrowPathIcon className="size-4 stroke-2" />
          </Button>
        </SignaturePad.ClearTrigger>
        <SignaturePad.Guide className="border-secondary-300 dark:border-secondary-700 absolute bottom-4 left-4 right-4 border-t-2 border-dotted" />
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
});
