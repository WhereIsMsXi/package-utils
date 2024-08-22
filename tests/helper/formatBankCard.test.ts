import { formatBankCard } from '../../src/helper';

describe('helper formatBackCard', () => {
  it('清除非数值字符', async () => {
    const data = '1212a1212a1';
    const target = '1212-1212-1'
    const result = await formatBankCard(data);
    expect(result).toBe(target);
  });
  it('每4个字符添加一个mark符号', () => {
    const data = '121212121';
    const target = '1212-1212-1'
    const result = formatBankCard(data);
    expect(result).toBe(target);
  });
  it('长度为4的倍数时，去掉末尾的 mark 的符号', () => {
    const data = '12345678';
    const target = '-'
    const result = formatBankCard(data)[data.length - 1];
    expect(result).not.toBe(target);
  });
});
