import { KeyString } from "../types";

// 统一处理 Promise 中的 Error
export function to<T>(promise: Promise<T>) {
  return promise
    .then((res: T) => [null, res])
    .catch((err: Error) => [err, null]);
}

// 处理接口传参时空值可能导致的覆盖问题
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

export function mustArray(data: unknown) {
  return Array.isArray(data) ? data : [data];
}