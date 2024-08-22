export function to<T>(promise: Promise<T>) {
  return promise
    .then((res: T) => [null, res])
    .catch((err: Error) => [err, null]);
}