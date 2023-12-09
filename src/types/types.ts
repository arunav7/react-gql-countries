import { Maybe } from '../__generated__/operations';

export type MaybeString = Maybe<string>;
export type MaybeNumber = Maybe<number>;
export type MaybeBoolean = Maybe<boolean>;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & NonNullable<unknown>;
