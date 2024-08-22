import { formatPhone } from '../../src/helper';

describe('helper formatPhone', () => {
  it('清除非数值字符', () => {
    function formatPhoneWrapper() {
      formatPhone('12aa56aa90123');
    }
    expect(formatPhoneWrapper).toThrow(new Error("Invalid phone number"));
  });
  it('长度必须为11位', () => {
    function formatPhoneWrapper() {
      formatPhone('1234567890');
    }
    expect(formatPhoneWrapper).toThrow(new Error("Invalid phone number"));
  });
  it('格式化后的手机号第3，4位，7,8位之间都有相应的 mark 符号', () => {
    const data = '12345678901';
    const target = '123-4567-8901';
    expect(formatPhone(data)).toBe(target);
  });
});
