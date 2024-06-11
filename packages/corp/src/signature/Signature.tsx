"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import {
  Button,
  type ValueOrFunction,
  classNames,
  getValue,
  mergeRefs,
  useBoolean,
} from "@rafty/ui";
import { cva } from "class-variance-authority";
import {
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import type { ReactSignatureCanvasProps } from "react-signature-canvas";
import SignatureCanvas from "react-signature-canvas";

export const signatureClasses = cva(
  "border cursor-pointer border-secondary-300 dark:border-secondary-700 rounded-md h-[250px] w-full bg-white dark:bg-secondary-800",
  {
    variants: {
      disabled: {
        true: "pointer-events-none bg-secondary-200 dark:bg-secondary-800 opacity-60",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export type Signature = Omit<ReactSignatureCanvasProps, "onEnd" | "onBegin"> & {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  onChange?: (value?: string) => void;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: ValueOrFunction;
  isHidden?: ValueOrFunction;
};

export const Signature = forwardRef<
  ElementRef<typeof SignatureCanvas>,
  Signature
>(function Signature(
  {
    isDisabled = false,
    isHidden = false,
    onChange,
    className,
    placeholder = "Sign here",
    name,
    value,
    defaultValue,
    ...props
  },
  forwardedRef,
) {
  const [isInput, toggleInput] = useBoolean(!(value ?? defaultValue));
  const ref = useRef<SignatureCanvas>(null);

  const disabled = getValue(isDisabled);
  const hidden = getValue(isHidden);

  const clear = () => {
    if (ref.current) {
      ref.current.clear();
      onChange?.(undefined);
      toggleInput(true);
    }
  };

  const handleChange = () => {
    if (ref.current) {
      const value = ref.current.toDataURL();
      onChange?.(value);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const dataUrl = value ?? defaultValue;
    if (ref.current && dataUrl) {
      ref.current.fromDataURL(dataUrl);
      toggleInput(false);
    }
  }, [value, defaultValue]);

  return (
    <div
      className={classNames(
        "relative w-full",
        disabled && "pointer-events-none cursor-not-allowed",
        className,
      )}
    >
      <SignatureCanvas
        {...props}
        onBegin={() => toggleInput(false)}
        onEnd={handleChange}
        canvasProps={{
          id: name,
          hidden,
          "aria-disabled": disabled,
          className:
            "border cursor-pointer border-secondary-300 dark:border-secondary-700 rounded-md h-[250px] w-full bg-white dark:bg-secondary-800 aria-disabled:pointer-events-none aria-disabled:opacity-70",
        }}
        ref={mergeRefs(forwardedRef, ref)}
      />
      {isInput && (
        <span
          hidden={hidden}
          className={classNames(
            "dark:text-secondary-200 text-secondary-600 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-sm font-medium",
            disabled && "hidden",
          )}
        >
          {placeholder}
        </span>
      )}
      <div
        aria-hidden={hidden}
        className="pointer-events-none absolute bottom-3 flex w-full select-none px-3 aria-hidden:hidden"
      >
        <XMarkIcon className="stroke-secondary-600 dark:stroke-secondary-200 size-4 stroke-[2.5]" />
        <div className="border-secondary-600 dark:border-secondary-200 ml-1.5 w-full border-b" />
      </div>
      <Button
        size="icon"
        variant="ghost"
        hidden={disabled || hidden}
        className="absolute right-3 top-3 rounded p-1"
        onClick={clear}
        title="Clear"
      >
        <ArrowPathIcon className="size-3.5 stroke-[2.5]" />
      </Button>
    </div>
  );
});
