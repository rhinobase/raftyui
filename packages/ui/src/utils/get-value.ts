type Fn = () => unknown;

export function getValue<T, U, V = T extends Fn ? ReturnType<T> : T>(
  valueOrFn?: T,
  params?: U,
): V | undefined {
  if (valueOrFn === undefined) return undefined;
  return typeof valueOrFn === "function" ? valueOrFn(params) : valueOrFn;
}
