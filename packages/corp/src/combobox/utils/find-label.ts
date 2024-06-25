import type { ComboboxOptionType } from "../types";

export function findLabel(
  value: string | number,
  items: ComboboxOptionType[],
): string | undefined {
  for (const item of items) {
    let label: string | undefined;

    if (Array.isArray(item.value)) label = findLabel(value, item.value);
    else if (value === item.value) label = item.label;

    if (label) return label;
  }
}
