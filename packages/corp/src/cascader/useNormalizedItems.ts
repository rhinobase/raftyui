export type ValueType = string | number;

export type FieldNames = {
  value: ValueType;
  label: string;
  children: string;
};

export type CascaderItemType = {
  value: ValueType;
  label: string;
  disabled?: boolean;
  children?: CascaderItemType[];
};

export type NormalizeItem = CascaderItemType & {
  value: string;
  label: string;
  children?: NormalizeItem[];
};

export const useNormalizedItems = (fieldNames: FieldNames) => {
  const normalizeItem = (item: CascaderItemType): NormalizeItem => {
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

  const getSelectedItems = (
    items: CascaderItemType[],
    selectedValue: ValueType,
  ) => {
    let selectedItems: CascaderItemType[] = [];
    const search = (
      items: CascaderItemType[],
      ref: CascaderItemType[] = [],
    ) => {
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
