import { useEffect, useState } from 'react';

const PREFIX = 'ishop-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(null);

  useEffect(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue !== null) setValue(JSON.parse(jsonValue));
    setValue(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
