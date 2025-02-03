"use client";
import { useCallback } from "react";

export type useQueryParams = {
  onChange: (path: string) => void;
  pathname: string;
  searchParams: string;
};

export function useQueryParams<T>({
  onChange,
  pathname,
  searchParams,
}: useQueryParams) {
  const setQueryParams = useCallback(
    (params: Partial<T>) => {
      const urlSearchParams = new URLSearchParams(searchParams);

      for (const [key, value] of Object.entries(params)) {
        if (value == null) urlSearchParams.delete(key);
        else urlSearchParams.set(key, String(value));
      }

      const search = urlSearchParams.toString();
      const query = search ? `?${search}` : search;
      onChange(`${pathname}${query}`);
    },
    [onChange, pathname, searchParams],
  );

  return { setQueryParams };
}
