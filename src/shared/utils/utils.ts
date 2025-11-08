export function setCookie(cookie: string) {
  globalThis.document.cookie = cookie
}

export function setLocalStorageItem(key: string, value: string) {
  globalThis.localStorage.setItem(key, value)
}
