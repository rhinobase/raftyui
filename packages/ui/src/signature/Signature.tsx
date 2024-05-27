"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import {
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { MdRefresh } from "react-icons/md";
import type { ReactSignatureCanvasProps } from "react-signature-canvas";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "../button";
import { useBoolean } from "../hooks";
import type { ValueOrFunction } from "../types";
import { classNames, getValue, mergeRefs } from "../utils";

const signatureClasses = cva(
  "border cursor-pointer border-secondary-300 dark:border-secondary-700 rounded h-[200px] w-full",
  {
    variants: {
      isDisabled: {
        true: "pointer-events-none bg-secondary-200 dark:bg-secondary-800 opacity-60",
        false: "",
      },
    },
  },
);

export type Signature = Omit<ReactSignatureCanvasProps, "onEnd" | "onBegin"> & {
  disabled?: ValueOrFunction<boolean>;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  onChange?: (value?: string) => void;
  hidden?: ValueOrFunction<boolean>;
  name?: string;
  value?: string;
  defaultValue?: string;
  instructions?: string;
};

export const Signature = forwardRef<
  ElementRef<typeof SignatureCanvas>,
  Signature
>(
  (
    {
      disabled = false,
      hidden = false,
      onChange,
      className,
      instructions,
      name,
      value,
      defaultValue,
      ...props
    },
    forwardedRef,
  ) => {
    const [isInput, toggleInput] = useBoolean(!(value ?? defaultValue));
    const ref = useRef<SignatureCanvas>(null);

    const isDisabled = getValue(disabled);
    const isHidden = getValue(hidden);

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

    const onBegin = () => {
      toggleInput(false);
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
          disabled && "cursor-not-allowed",
        )}
      >
        <SignatureCanvas
          {...props}
          onBegin={onBegin}
          onEnd={handleChange}
          canvasProps={{
            id: name,
            hidden: isHidden,

            className: `${signatureClasses({ isDisabled, className })}`,
          }}
          ref={mergeRefs(forwardedRef, ref)}
        />
        {isInput && (
          <span
            hidden={isHidden}
            className={classNames(
              "dark:text-secondary-300 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer select-none text-xs font-medium",
              disabled && "hidden",
            )}
          >
            {instructions}
          </span>
        )}
        <div
          aria-hidden={isHidden}
          className="pointer-events-none absolute bottom-2 mx-3 flex w-[calc(100%-24px)] select-none aria-hidden:hidden"
        >
          <XMarkIcon className="stroke-secondary-400 dark:stroke-secondary-500 size-4 stroke-2" />
          <div className="border-secondary-300 dark:border-secondary-700 w-full border-b-2" />
        </div>
        <Button
          size="icon"
          variant="ghost"
          hidden={isHidden}
          className={classNames(
            "absolute right-2 top-2 rounded p-1",
            disabled && "hidden",
          )}
          onClick={clear}
        >
          <MdRefresh size={14} />
        </Button>
      </div>
    );
  },
);

Signature.displayName = "Signature";
