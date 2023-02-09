import React from "react";
import { forwardRef } from "react";
import { Button } from "../button";
import { classNames, useBoolean } from "@rhinobase/utils";

// PasswordField Component
export type PasswordField = JSX.IntrinsicElements["input"];
export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
  ({ ...props }, forwardedRef) => {
    const [showPassword, { toggle }] = useBoolean();

    return (
      <div className="relative flex w-full items-center">
        <input
          type={showPassword ? "text" : "password"}
          autoComplete="password"
          {...props}
          className={classNames(
            "px-lg py-base md:py-md dark:text-secondary-200 block w-full appearance-none rounded-md border bg-transparent text-sm shadow-sm autofill:bg-transparent dark:border-zinc-700 md:text-base",
            "focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2",
            "read-only:focus:ring-0",
            "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
            props.className,
          )}
          ref={forwardedRef}
        />
        <Button
          size="sm"
          aria-label="show and hide password"
          variant="ghost"
          className="!px-base absolute right-1 m-1"
          onClick={toggle}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </Button>
      </div>
    );
  },
);
