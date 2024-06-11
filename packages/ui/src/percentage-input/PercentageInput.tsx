"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";
import { InputField } from "../input-field";
import { InputGroup, Suffix } from "../input-group";

const ID = "percentage-input";

const KEY_FACTOR: Record<string, number> = {
  ArrowUp: 1,
  Enter: 0,
  ArrowDown: -1,
};

export type PercentageInput = Omit<
  InputField,
  | "defaultValue"
  | "value"
  | "onChange"
  | "min"
  | "max"
  | "type"
  | "inputMode"
  | "autoComplete"
  | "autoCorrect"
  | "spellCheck"
  | "isUnstyled"
> & {
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export const PercentageInput = forwardRef<HTMLInputElement, PercentageInput>(
  function PercentageInput(
    { size = "md", onChange, onKeyDown, onBlur, className, ...props },
    forwardedRef,
  ) {
    return (
      <InputGroup size={size} className={className}>
        <InputField
          {...props}
          id={ID}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          onChange={(event) => {
            const valueAsString = event.currentTarget.value.replace(
              /[^%.0-9]/g,
              "",
            );

            onChange?.(valueAsString);
          }}
          onKeyDown={(event) => {
            const valueAsString = event.currentTarget.value;
            const valueAsNumber = Number(valueAsString.replace(/%/g, ""));

            if (event.key in KEY_FACTOR) {
              event.preventDefault();
              event.stopPropagation();

              const constant = KEY_FACTOR[event.key];
              let val: number = valueAsNumber;
              if (constant === -1) val = Math.max(valueAsNumber + constant, 0);
              else if (constant === 1)
                val = Math.min(valueAsNumber + constant, 100);

              onChange?.(`${val}%`);
            } else onKeyDown?.(event);
          }}
          onBlur={(event) => {
            const valueAsString = event.currentTarget.value;
            const value = valueAsString.replace(/%/g, "");

            onChange?.(`${value}%`);
            onBlur?.(event);
          }}
          ref={forwardedRef}
        />
        <Suffix className="pointer-events-auto w-max">
          <div className="flex flex-col">
            <button
              type="button"
              tabIndex={-1}
              aria-label="increase"
              className="text-secondary-500 px-2 py-0.5 hover:text-black dark:hover:text-white"
              aria-controls={ID}
              onClick={() => {
                const valueAsNumber = Number(
                  (props.value ?? "0").replace(/%/g, ""),
                );
                const val = valueAsNumber + 1;

                onChange?.(`${val}%`);
              }}
            >
              <ChevronUpIcon className="size-2.5 stroke-[3]" />
            </button>
            <button
              type="button"
              tabIndex={-1}
              aria-label="decrease"
              className="text-secondary-500 px-2 py-0.5 hover:text-black dark:hover:text-white"
              aria-controls={ID}
              onClick={() => {
                const valueAsNumber = Number(
                  (props.value ?? "0").replace(/%/g, ""),
                );
                const val = valueAsNumber - 1;

                onChange?.(`${val}%`);
              }}
            >
              <ChevronDownIcon className="size-2.5 stroke-[3]" />
            </button>
          </div>
        </Suffix>
      </InputGroup>
    );
  },
);
