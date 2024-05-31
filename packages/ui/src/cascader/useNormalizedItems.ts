import type { FieldNames, ItemType, NormalizeItem } from "./Cascader";

export const useNormalizedItems = (fieldNames: FieldNames) => {
  const normalizeItem = (item: ItemType): NormalizeItem => {
    const { value, label, children } = fieldNames;
    return {
      ...item,
      value: item[value as keyof ItemType] as string,
      label: item[label as keyof ItemType] as string,
      children: item[children as keyof ItemType] as NormalizeItem[],
    };
  };

  const getSelectedItems = (items: ItemType[], selectedValue: string) => {
    let selectedItems: ItemType[] = [];
    const search = (items: ItemType[], ref: ItemType[] = []) => {
      for (const item of items) {
        const { children, label, value, disabled, ...restItem } =
          normalizeItem(item);
        if (value === selectedValue) {
          selectedItems = [
            ...ref,
            {
              ...restItem,
              value,
              label,
            },
          ];
        } else if (Array.isArray(children) && children.length >= 1) {
          search(children, [
            ...ref,
            {
              ...restItem,
              value,
              label,
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
