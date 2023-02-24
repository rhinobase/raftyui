import { classNames } from "@rhinobase/utils";
import React, { useState } from "react";

export function RangePicker() {
  const [state, setState] = useState(false);
  return (
    <div
      className={classNames(
        state
          ? "border-primary-500 ring-primary-100 dark:border-primary-300 dark:ring-primary-100/30 ring-2"
          : "dark:border-white/20",
        "hover:border-primary-500 group flex h-[40px] items-center gap-2 rounded-md border px-2 transition-all ",
      )}
    >
      <input
        className="w-[150px] bg-transparent outline-none"
        onFocus={() => setState(true)}
        onBlur={() => setState(false)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={classNames(
          state
            ? "text-primary-500 dark:text-primary-300"
            : " text-black/60 dark:text-white/80",
          "h-6 w-6 leading-10",
        )}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
      <input
        className="w-[150px] bg-transparent outline-none"
        onFocus={() => setState(true)}
        onBlur={() => setState(false)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={classNames(
          state
            ? "text-primary-500 dark:text-primary-300"
            : " text-black/60 dark:text-white/80",
          "h-6 w-6 leading-10",
        )}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    </div>
  );
}
