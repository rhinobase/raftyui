import type { FieldNames, Item, NormalizeItem } from "./Cascader";

export const useNormalizedItems = (fieldNames: FieldNames) => {
  const normalizeItem = (item: Item): NormalizeItem => {
    const { value, label, children } = fieldNames;
    return {
      ...item,
      value: item[value as keyof Item] as string,
      label: item[label as keyof Item] as string,
      children: item[children as keyof Item] as NormalizeItem[],
    };
  };

  const getSelectedItems = (items: Item[], selectedValue: string) => {
    let selectedItems: Item[] = [];
    const search = (items: Item[], ref: Item[] = []) => {
      for (const item of items) {
        const { children, label, value, disabled, ...restItem } =
          normalizeItem(item);
        if (value === selectedValue) {
          selectedItems = [
            ...ref,
            {
              ...restItem,
              value: value,
              label: label,
            },
          ];
        } else if (Array.isArray(children) && children.length >= 1) {
          search(children, [
            ...ref,
            {
              ...restItem,
              value: value,
              label: label,
            },
          ]);
        }
      }
    };
    search(items);
    return selectedItems;
  };

  return { normalizeItem, getSelectedItems };
};
