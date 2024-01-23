import { useEffect, useState } from "react";

export function useSync<T>(defaultValue: T, callback?: (value: T) => void) {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    callback?.(value);
  }, [value, callback])

  return [value, setValue] as const;
}
