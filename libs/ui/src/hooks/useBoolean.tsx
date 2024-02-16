import { useCallback, useState } from "react";

export function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(
    (value?: boolean) =>
      setValue((prev) => {
        if (value == null) return !prev;
        return value;
      }),
    [],
  );

  return [value, toggle] as const;
}
