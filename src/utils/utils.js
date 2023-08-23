export function setItem(key, data) {
  data = JSON.stringify(data);
  return window.localStorage.setItem(key, data);
}

export function getItem(key) {
  let data = window.localStorage.getItem(key);
  return JSON.parse(data);
}

export function removeItem(key) {
  return window.localStorage.removeItem(key);
}
