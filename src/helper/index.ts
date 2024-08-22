export function formatBankCard(data: string, mark = '-') {
  // 清除非数字的字符
  const tempData = data.replace(/\D/g, '');
  // 每 4 位添加一个 mark 符号
  const result= tempData.replace(/(\d{4})(?=\d)/g, `$1${mark}`);
  // 去掉末尾可能的 mark 符号
  if(result.length % 4 === 0) {
    return result.slice(0, -1);
  }
  return result;
}

export function formatPhone(phoneNumber: string, mark = '-') {
  // 清除非数字的字符
  const tempPhoneNumber = phoneNumber.replace(/\D/g, '');
  // 是否为 11 位
  const isValid = /^\d{11}$/.test(tempPhoneNumber );
  if (!isValid) {
    throw new Error("Invalid phone number");
  }

  return tempPhoneNumber.slice(0, 3) + mark +
    tempPhoneNumber.slice(3, 7) + mark +
    tempPhoneNumber.slice(7);
}