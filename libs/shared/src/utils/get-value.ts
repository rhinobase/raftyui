type Fn = () => unknown;
export function getValue<T, U = T extends Fn ? ReturnType<T> : T>(
  valueOrFn?: T,
): U | undefined {
  if (valueOrFn === undefined) return undefined;
  return typeof valueOrFn === "function" ? valueOrFn() : valueOrFn;
}
