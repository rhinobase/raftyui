export type BooleanOrFunction<T = unknown> =
  | boolean
  | ((params?: T) => boolean);
