export function getQuery(name: string) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
export function getQueryString(name: string) {
  const left = window.location.href.indexOf('?'); // 第一个参数
  if (left < 0) return undefined;
  
  const search = window.location.href.slice(left + 1);

  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const result = search.match(reg);
  if (result && result.length > 2) {
    if (result[2]) {
      return result[2];
    }
    return undefined;
  }
  return undefined;
}

export function isIOS() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

export function reloadIOS() {
  window.onpageshow = (e) => {
    if (e.persisted) {
      window.location.reload();
    }
  };
}

export function clickEffect(className: '', index = 0) {
  const doms = document.getElementsByClassName(className);
  const currentDom = doms[index] as HTMLElement
  if (currentDom) {
    currentDom.style.opacity = '0.6'
    setTimeout(() => {
      currentDom.style.opacity = '1'
    }, 50)
  }
}