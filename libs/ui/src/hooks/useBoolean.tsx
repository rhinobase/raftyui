import { useCallback, useState } from "react";

export function useBoolean(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  const enable = useCallback(() => setValue(true), []);

  const disable = useCallback(() => setValue(false), []);

  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return [value, { enable, disable, toggle }] as const;
}
