"use client";
import type {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useCallback, useRef } from "react";

export type useLastElementProps<T, U = unknown> = {
  isFetching?: boolean;
  hasNextPage?: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<T, U>>;
};

export function useLastElement<T = unknown, U = unknown>({
  isFetching = false,
  hasNextPage = false,
  fetchNextPage,
}: useLastElementProps<T, U>) {
  const observer = useRef<IntersectionObserver>();

  return useCallback(
    <E extends HTMLElement = HTMLDivElement>(node: E | null) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && hasNextPage) fetchNextPage();
      });
      if (node) observer.current?.observe(node);
    },
    [isFetching, hasNextPage, fetchNextPage],
  );
}
