import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { InputField, InputGroup, LeftAddon } from "@rafty/ui";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { getName } from "country-list";
import Fuse from "fuse.js";
import parsePhoneNumber, {
  type CountryCode,
  formatIncompletePhoneNumber,
  getCountries,
  getCountryCallingCode,
  getPhoneCode,
  isSupportedCountry,
} from "libphonenumber-js";
import { forwardRef, useEffect, useMemo, useState } from "react";
import {
  Combobox,
  ComboboxContent,
  type ComboboxOptionType,
  ComboboxTrigger,
  useComboboxContext,
} from "../combobox";

const ALL_COUNTRIES = getCountries();

const set = new Set();
const COUNTRY_OPTIONS: ComboboxOptionType[] = [];

for (const country of ALL_COUNTRIES) {
  const code = getCountryCallingCode(country);
  const name = getName(country);

  if (name == null || set.has(code)) continue;

  set.add(code);

  COUNTRY_OPTIONS.push({
    value: country,
    label: `${getUnicodeFlagIcon(country)} ${name} (+${code})`,
  });
}

export type PhoneNumberInput = Omit<
  InputField,
  | "value"
  | "onChange"
  | "min"
  | "max"
  | "type"
  | "inputMode"
  | "autoComplete"
  | "autoCorrect"
  | "spellCheck"
> & {
  value?: string;
  onChange?: (value?: string) => void;
};

export const PhoneNumberInput = forwardRef<HTMLInputElement, PhoneNumberInput>(
  function PhoneNumberInput(
    { size, value, onChange, className, ...props },
    forwardedRef,
  ) {
    const [phoneNumber, setPhoneNumber] = useState<{
      number: string;
      country?: CountryCode;
    }>();

    const [search, setSearch] = useState<string>();

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
      if (!value) return;

      const isSame = value === phoneNumber?.number;

      const formattedPhoneNumber = formatIncompletePhoneNumber(
        value,
        phoneNumber?.country,
      );

      const parsed = parsePhoneNumber(
        formattedPhoneNumber,
        phoneNumber?.country,
      );

      if (!isSame)
        setPhoneNumber({
          number: value,
          country: parsed?.country,
        });
    }, [value]);

    const fuse = useMemo(
      () =>
        new Fuse(COUNTRY_OPTIONS, {
          keys: ["label"],
          includeMatches: true,
          distance: 30,
        }),
      [],
    );

    let searchResults: ComboboxOptionType[] = COUNTRY_OPTIONS;
    let isEmpty = false;

    if (search) {
      const results = fuse.search(search);

      if (results.length === 0) isEmpty = true;

      searchResults = results.reduce<typeof searchResults>(
        (prev, { item, matches }) => {
          prev.push({
            ...item,
            matches: matches?.flatMap((match) => match.indices),
          });

          return prev;
        },
        [],
      );
    }

    return (
      <InputGroup size={size} className={className}>
        <LeftAddon className="p-0">
          <Combobox
            type="single"
            options={searchResults}
            placeholder={{ search: "Search for countries" }}
            selected={phoneNumber?.country}
            onSelectionChange={(selected) => {
              if (
                typeof selected === "string" &&
                isSupportedCountry(selected)
              ) {
                setPhoneNumber({
                  number: `+${getPhoneCode(selected)}`,
                  country: selected,
                });
              }
              setSearch(undefined);
            }}
          >
            <ComboboxTrigger
              rightIcon={
                <ChevronDownIcon className="size-2.5 stroke-[3] group-data-[state=open]:rotate-180" />
              }
              className="group py-1 ring-offset-0 hover:bg-transparent focus:ring-0 focus-visible:ring-0 dark:hover:bg-transparent [&>span]:text-xs [&>span]:font-semibold [&>span]:leading-5"
              variant="ghost"
            >
              <CountrySelectTrigger />
            </ComboboxTrigger>
            <ComboboxContent
              style={{ width: 300 }}
              align="start"
              shouldFilter={false}
              search={search}
              onSearchChange={setSearch}
            />
          </Combobox>
        </LeftAddon>
        <InputField
          {...props}
          inputMode="numeric"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          value={phoneNumber?.number}
          onChange={(event) => {
            const value = event.currentTarget.value.replace(/[^0-9+]/g, "");

            const phone =
              value.length > 0 && !value.startsWith("+") ? `+${value}` : value;

            const formattedPhoneNumber = formatIncompletePhoneNumber(
              phone,
              phoneNumber?.country,
            );

            const parsed = parsePhoneNumber(
              formattedPhoneNumber,
              phoneNumber?.country,
            );

            setPhoneNumber({
              number: formattedPhoneNumber,
              country: parsed?.country,
            });
          }}
          ref={forwardedRef}
        />
      </InputGroup>
    );
  },
);

function CountrySelectTrigger() {
  const { selected } = useComboboxContext();

  if (selected.length > 0) return getUnicodeFlagIcon(String(selected[0]));
  return "🌐";
}
