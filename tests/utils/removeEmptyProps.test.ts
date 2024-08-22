import { removeEmptyProps } from '../../src/utils';

describe('utils removeEmptyProps', () => {
  it('不能删除对象的非空属性', () => {
    const params = {
      key: 'value'
    }
    const result = removeEmptyProps(params);
    expect(result).toEqual(params);
  });
  it('删除对象空属性', () => {
    const params = {
      key: 'value',
      name: ''
    }
    const target = {
      key: 'value',
    }
    const result = removeEmptyProps(params);
    expect(result).toEqual(target);
  });
});
