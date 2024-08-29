import { format2KebabCase } from '../../src/utils';

describe('utils format2KebabCase', () => {
  it('传入"",返回""', () => {
    const data = ''
    const target = ''
    const result = format2KebabCase(data);
    expect(result).toEqual(target);
  });
  it('传入"camel",返回"camel"', () => {
    const data = 'camel'
    const target = 'camel'
    const result = format2KebabCase(data);
    expect(result).toEqual(target);
  });
  it('传入"camel-case",返回"camel-case"', () => {
    const data = 'camel-case'
    const target = 'camel-case'
    const result = format2KebabCase(data);
    expect(result).toEqual(target);
  });
  it('传入"camelCase",返回"camel-case"', () => {
    const data = 'camelCase'
    const target = 'camel-case'
    const result = format2KebabCase(data);
    expect(result).toEqual(target);
  });
  it('传入"CamelCase",返回"camel-case"', () => {
    const data = 'CamelCase'
    const target = 'camel-case'
    const result = format2KebabCase(data);
    expect(result).toEqual(target);
  });
});
