import { ComboboxOption } from "./Combobox";

export function findLabel(value: string | number, items: ComboboxOption[]) {
  let label: string | undefined;
  for (const item of items) {
    if (typeof item.value === "string" || typeof item.value === "number") {
      if (value === item.value) label = item.label;
    } else label = findLabel(value, item.value);

    if (label) return label;
  }
}
