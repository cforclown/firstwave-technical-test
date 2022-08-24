export const saveToLocalStorage = (key: string, value: any): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string): any => {
  const value = window.localStorage.getItem(key);
  return value && JSON.parse(value);
};
