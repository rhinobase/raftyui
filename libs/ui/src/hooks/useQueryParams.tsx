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
      const url_search_params = new URLSearchParams(searchParams);

      for (const [key, value] of Object.entries(params)) {
        if (value === undefined || value === null)
          url_search_params.delete(key);
        else url_search_params.set(key, String(value));
      }

      const search = url_search_params.toString();
      const query = search ? `?${search}` : search;
      onChange(`${pathname}${query}`);
    },
    [onChange, pathname, searchParams],
  );

  return { setQueryParams };
}
