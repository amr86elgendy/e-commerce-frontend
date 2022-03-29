import { useState, useEffect, useCallback } from 'react';

const getLocalValue = (key, initValue) => {
  //SSR Next.js
  if (typeof window === 'undefined') return initValue;

  // if a value is already store
  const localValue = JSON.parse(localStorage.getItem(key));
  if (localValue) return localValue;

  // return result of a function
  if (initValue instanceof Function) return initValue();

  return initValue;
};

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return [value, setValue, remove];
};

export default useLocalStorage;
