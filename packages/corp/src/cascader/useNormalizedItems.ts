export type ValueType = string | number;

export type FieldNames = {
  value: ValueType;
  label: string;
  children: string;
};

export interface ItemType {
  value: ValueType;
  label: string;
  disabled?: boolean;
  children?: ItemType[];
}

export interface NormalizeItem extends ItemType {
  value: string;
  label: string;
  children?: NormalizeItem[];
}

export const useNormalizedItems = (fieldNames: FieldNames) => {
  const normalizeItem = (item: ItemType): NormalizeItem => {
    // @ts-ignore
    const value = item[fieldNames.value];
    // @ts-ignore
    const label = item[fieldNames.label];
    // @ts-ignore
    const children = item[fieldNames.children];

    return {
      ...item,
      value,
      label,
      children,
    };
  };

  const getSelectedItems = (items: ItemType[], selectedValue: ValueType) => {
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
