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

export function mustArray<T>(data: T | T[]): T[] {
  return Array.isArray(data) ? data : [data];
}

export function hasOwnProperty(
  obj: Record<string, unknown>, prop: string
) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function randomChar(length = 16, chars?: string) {
  const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charSet = chars || defaultChars;
  
  let result = '';
  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    result += charSet[randomIndex]
  }
  return result;
}

export function format2KebabCase(camelCased: string): string {
  if(camelCased.length === 0) return camelCased;
  
  const firstChar = camelCased.charAt(0);
  const isFirstCharUpperCase = firstChar === firstChar.toUpperCase();

  return camelCased.replace(/([A-Z])/g, (match, offset) => {
    if (isFirstCharUpperCase && offset === 0) {
      return match.toLowerCase();
    }
    return `-${match.toLowerCase()}`;
  })
}
