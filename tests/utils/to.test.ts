import { to } from '../../src/utils/utils';

const successPromise = Promise.resolve('success');
const failPromise = Promise.reject('fail');

describe('utils to', () => {
  it('promise 成功时返回一个数组，且长度为2', async () => {
    const result = await to(successPromise);
    expect(result.length).toBe(2);
  });
  it('promise 失败时返回一个数组，且长度为2', async () => {
    const result = await to(failPromise);
    expect(result.length).toBe(2);
  });
  it('promise 成功时，成功的返回值在返回的数组的末尾', async () => {
    // const promise = Promise.resolve('success');
    const result = await to(successPromise);
    expect(result).toEqual([null, 'success']);
  });
  it('promise 失败时，失败的返回值在返回的数组的开头', async () => {
    const result = await to(failPromise);
    expect(result).toEqual(['fail', null]);
  });
});
