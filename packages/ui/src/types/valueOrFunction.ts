export type ValueOrFunction<T = boolean, U = unknown> = T | ((params?: U) => T);
