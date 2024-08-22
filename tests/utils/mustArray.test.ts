import { mustArray } from '../../src/utils';

describe('utils musstArray', () => {
  it('传入非数组则包成数组', async () => {
    const data = 'aaa'
    const target = ['aaa']
    const result = await mustArray(data);
    expect(result).toEqual(target);
  });
  it('传入数组则不做处理直接返回', async () => {
    const data = ['aaa']
    const result = await mustArray(data);
    expect(result).toEqual(data);
  });
});
