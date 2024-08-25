export function getQuery(name: string) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
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