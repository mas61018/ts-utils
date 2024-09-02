export type Mutable<T extends object> = { -readonly [K in keyof T]: T[K] };

export type ValueOf<T extends object> = T[keyof T];
