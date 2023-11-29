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
import { Selector } from "./Selector";

const PAYMENT_METHODS = [
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-credit-card h-8 w-8 text-secondary-600 dark:text-secondary-400"
        viewBox="0 0 16 16"
      >
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
      </svg>
    ),
    heading: "Card",
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-paypal h-8 w-8 text-secondary-600 dark:text-secondary-400"
        viewBox="0 0 16 16"
      >
        <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
      </svg>
    ),
    heading: "Paypal",
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-apple h-8 w-8 text-secondary-600 dark:text-secondary-400"
        viewBox="0 0 16 16"
      >
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
      </svg>
    ),
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
              key={index}
              onClick={() => setSelected(index)}
              className={classNames(
                isSelect == index
                  ? "ring-primary-300 dark:ring-primary-500/50 border-primary-500 dark:border-primary-400 ring-2"
                  : "dark:border-secondary-700",
                "dark:hover:bg-secondary-900/70 hover:bg-secondary-50 flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border p-4 transition-all ease-in-out",
              )}
            >
              {item.logo}
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
              {selected == month && <CheckIcon className="opacity-60 h-4" />}
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
              {selected == year && <CheckIcon className="opacity-60 h-4" />}
            </div>
            <Text>{year}</Text>
            <div className="flex-1" />
          </div>
        </CommandItem>
      ))}
    </Selector>
  );
}
