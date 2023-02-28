import React from "react";

type PickerHeader = {
  onFirstPage?: () => void;
  onPreviousPage?: () => void;
  children: JSX.Element;
  onNextPage?: () => void;
  onLastPage?: () => void;
};
export function PickerHeader(props: PickerHeader) {
  return (
    <div className="flex w-full items-center justify-between border-b border-zinc-200/50 py-2 px-3 dark:border-zinc-700">
      <div className="flex items-center gap-2">
        {props.onFirstPage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 cursor-pointer stroke-2 text-black/40 hover:text-black dark:text-white/60 dark:hover:text-white"
            onClick={props.onFirstPage}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        )}
        {props.onPreviousPage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 cursor-pointer stroke-2 text-black/40 hover:text-black dark:text-white/60 dark:hover:text-white"
            onClick={props.onPreviousPage}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        )}
      </div>
      {props.children}
      <div className="flex items-center gap-2">
        {props.onNextPage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 cursor-pointer stroke-2 text-black/40 hover:text-black dark:text-white/60 dark:hover:text-white"
            onClick={props.onNextPage}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
        {props.onLastPage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 cursor-pointer stroke-2 text-black/40 hover:text-black dark:text-white/60 dark:hover:text-white"
            onClick={props.onLastPage}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
