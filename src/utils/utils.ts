import { KeyString } from "../types";

export function to<T>(promise: Promise<T>) {
  return promise
    .then((res: T) => [null, res])
    .catch((err: Error) => [err, null]);
}

export function removeEmptyProps<
  T extends KeyString
>(data: T) {
  function isEmpty(value: any) {
    return !['', null, undefined].includes(value)
  }

  const result: T = { ...data }
  return Object.fromEntries(
    Object.entries(result).filter(([key, value]) => isEmpty(value))
  );
}