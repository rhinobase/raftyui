"use client";
import { cva } from "class-variance-authority";
import {
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
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
  "border cursor-pointer border-secondary-300 dark:border-secondary-700 rounded h-[200px] w-[420px]",
  {
    variants: {
      disabled: {
        true: "pointer-events-none bg-secondary-200 dark:bg-secondary-800 opacity-60",
        false: "",
      },
    },
  },
);

export type Signature = Omit<ReactSignatureCanvasProps, "onEnd"> & {
  disabled?: ValueOrFunction<boolean>;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  onChange?: (value?: string) => void;
  hidden?: ValueOrFunction<boolean>;
};

export const Signature = forwardRef<
  ElementRef<typeof SignatureCanvas>,
  Signature
>(
  (
    {
      disabled: isDisabled = false,
      hidden: isHidden = false,
      onChange,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const disabled = getValue(isDisabled);
    const hidden = getValue(isHidden);
    const [isClick, toggle] = useBoolean();

    const ref = useRef<SignatureCanvas>(null);

    const clearBtn = () => {
      if (ref.current) {
        ref.current.clear();
        onChange?.(undefined);
        toggle();
      }
    };
    const handleChange = () => {
      if (ref.current) {
        const value = ref.current.toDataURL();
        onChange?.(value);
      }
    };

    return (
      <div className={classNames("relative", disabled && "cursor-not-allowed")}>
        <SignatureCanvas
          {...props}
          onBegin={() => toggle()}
          onEnd={handleChange}
          canvasProps={{
            hidden: hidden,
            className: `${signatureClasses({ disabled, className })}`,
          }}
          ref={mergeRefs(forwardedRef, ref)}
        />
        {!isClick && (
          <span
            hidden={hidden}
            className={classNames(
              "dark:text-secondary-300 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer select-none text-xs font-medium",
              disabled && "hidden",
            )}
          >
            Sign here
          </span>
        )}
        <Button
          size="icon"
          variant="ghost"
          hidden={hidden}
          className={classNames(
            "absolute right-2 top-2 rounded p-1",
            disabled && "hidden",
          )}
          onClick={clearBtn}
        >
          <MdRefresh size={14} />
        </Button>
      </div>
    );
  },
);
