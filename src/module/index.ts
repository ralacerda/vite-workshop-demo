import isOdd from "is-odd";

export function isEven(value: number) {
  return !isOdd(value);
}
