"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import {
  CommandItem,
  FieldControl,
  InputField,
  Label,
  Text,
  classNames,
} from "@rafty/ui";
import { useState } from "react";
import { BsApple, BsCreditCard, BsPaypal } from "react-icons/bs";
import { Selector } from "./Selector";

const PAYMENT_METHODS = [
  {
    logo: BsCreditCard,
    heading: "Card",
  },
  {
    logo: BsPaypal,
    heading: "Paypal",
  },
  {
    logo: BsApple,
    heading: "Apple",
  },
];

const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];

const YEARS = [
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
];

export function PaymentMethodExample() {
  const [isSelect, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      <div>
        <Text className="text-2xl font-semibold leading-snug">
          Payment Method
        </Text>
        <Text className="text-sm opacity-60">
          Add a new payment method to your account.
        </Text>
      </div>
      <form className="space-y-3">
        <div className="grid grid-cols-3 gap-3">
          {PAYMENT_METHODS.map((item, index) => (
            <div
              key={item.heading}
              onClick={() => setSelected(index)}
              onKeyDown={() => setSelected(index)}
              className={classNames(
                isSelect === index
                  ? "ring-primary-300 dark:ring-primary-500/50 border-primary-500 dark:border-primary-400 ring-2"
                  : "dark:border-secondary-700",
                "dark:hover:bg-secondary-900/70 hover:bg-secondary-50 flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border p-4 transition-all ease-in-out",
              )}
            >
              <item.logo
                size={30}
                className="text-secondary-600 dark:text-secondary-400"
              />
              <Text className="text-sm">{item.heading}</Text>
            </div>
          ))}
        </div>
        <FieldControl name="name">
          <Label>Name</Label>
          <InputField aria-label="Enter Your Name" />
        </FieldControl>
        <FieldControl name="city">
          <Label>City</Label>
          <InputField aria-label="Enter Your City" />
        </FieldControl>
        <FieldControl name="card">
          <Label>Card Number</Label>
          <InputField aria-label="Enter Your Card Number" />
        </FieldControl>
        <div className="flex w-full items-center gap-2">
          <FieldControl name="month">
            <Label>Expires</Label>
            <ExpireMonthSelect />
          </FieldControl>
          <FieldControl name="year">
            <Label>Year</Label>
            <ExpireYearSelect />
          </FieldControl>
          <FieldControl name="cvc">
            <Label>CVC</Label>
            <InputField
              placeholder="CVC"
              className="!py-2 placeholder:text-sm"
            />
          </FieldControl>
        </div>
      </form>
    </div>
  );
}

function ExpireMonthSelect() {
  const [selected, setSelected] = useState(MONTHS[0]);

  return (
    <Selector value={selected}>
      {MONTHS.map((month) => (
        <CommandItem key={month} value={month} onSelect={setSelected}>
          <div className="flex w-full items-center gap-2">
            <div className="w-3.5">
              {selected === month && (
                <CheckIcon width={16} height={16} className="opacity-60" />
              )}
            </div>
            <Text className="capitalize">{month}</Text>
            <div className="flex-1" />
          </div>
        </CommandItem>
      ))}
    </Selector>
  );
}

function ExpireYearSelect() {
  const [selected, setSelected] = useState(YEARS[0]);

  return (
    <Selector value={selected}>
      {YEARS.map((year) => (
        <CommandItem key={year} value={year} onSelect={setSelected}>
          <div className="flex w-full items-center gap-2 ">
            <div className="w-3.5">
              {selected === year && (
                <CheckIcon width={16} height={16} className="opacity-60" />
              )}
            </div>
            <Text>{year}</Text>
            <div className="flex-1" />
          </div>
        </CommandItem>
      ))}
    </Selector>
  );
}
