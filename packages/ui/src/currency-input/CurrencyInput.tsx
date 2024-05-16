import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { forwardRef, useRef } from "react";
import { InputField } from "../input-field";
import { InputGroup, LeftAddon, Suffix } from "../input-group";
import { mergeRefs } from "../utils";

const ID = "currency-input";

export type CurrencyInput = Omit<InputField, "value" | "onChange"> & {
  value?: string;
  onChange?: (value?: string) => void;
  currencyCode?: string;
};

const KEY_FACTOR: Record<string, number> = {
  ArrowUp: 1,
  Enter: 0,
  ArrowDown: -1,
};

const CURRENCY: Record<
  string,
  {
    symbol: string;
    locales?: Intl.LocalesArgument;
    options?: Intl.NumberFormatOptions | undefined;
  }
> = {
  USD: {
    symbol: "$",
    locales: "en-US",
    options: { currency: "USD", minimumFractionDigits: 2 },
  },
  INR: {
    symbol: "₹",
    locales: "en-IN",
    options: { currency: "INR", minimumFractionDigits: 2 },
  },
  EUR: {
    symbol: "€",
    locales: "en-IE",
    options: { currency: "EUR", minimumFractionDigits: 2 },
  },
  GBP: {
    symbol: "₤",
    locales: "en-GB",
    options: { currency: "GBP", minimumFractionDigits: 2 },
  },
};

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInput>(
  (
    {
      size,
      currencyCode = "USD",
      value,
      onChange,
      onKeyDown,
      onBlur,
      ...props
    },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const key = currencyCode.toUpperCase();
    const currencyProps = CURRENCY[key] ?? {
      ...CURRENCY.USD,
      symbol: key.slice(0, 3),
    };

    const formatter = new Intl.NumberFormat(
      currencyProps.locales,
      currencyProps.options,
    ).format;

    return (
      <InputGroup size={size}>
        <LeftAddon>{currencyProps.symbol || "¤"}</LeftAddon>
        <InputField
          {...props}
          id={ID}
          value={value}
          onChange={(event) => {
            const valueAsString = event.currentTarget.value.replace(
              /,|[a-z]/gi,
              "",
            );

            onChange?.(valueAsString);
          }}
          onKeyDown={(event) => {
            const valueAsString = event.currentTarget.value;
            const valueAsNumber = Number(valueAsString.replace(/,/g, ""));

            if (event.key in KEY_FACTOR) {
              event.preventDefault();
              event.stopPropagation();

              const constant = KEY_FACTOR[event.key];
              const formattedValue = formatter(valueAsNumber + constant);

              onChange?.(formattedValue);
            } else onKeyDown?.(event);
          }}
          onBlur={(event) => {
            const valueAsString = event.currentTarget.value;
            const valueAsNumber = Number(valueAsString.replace(/,/g, ""));

            const formattedValue = formatter(valueAsNumber);

            onChange?.(formattedValue);
            onBlur?.(event);
          }}
          ref={mergeRefs(inputRef, forwardedRef)}
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
                inputRef.current?.focus();
                const valueAsNumber = Number((value ?? "0").replace(/,/g, ""));
                const formattedValue = formatter(valueAsNumber + 1);

                onChange?.(formattedValue);
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
                inputRef.current?.focus();
                const valueAsNumber = Number((value ?? "0").replace(/,/g, ""));
                const formattedValue = formatter(valueAsNumber - 1);

                onChange?.(formattedValue);
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
CurrencyInput.displayName = "CurrencyInput";
