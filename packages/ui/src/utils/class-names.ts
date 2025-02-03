import { twMerge } from "tailwind-merge";

export function classNames(...classes: unknown[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}
