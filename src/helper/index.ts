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