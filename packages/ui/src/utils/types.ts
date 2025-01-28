export type SizeType<T = undefined> = "sm" | "md" | "lg" | T;

export type ValueOrFunction<T = boolean, U = unknown> = T | ((params?: U) => T);
