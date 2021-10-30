import { useEffect, useState } from 'react';

export default function useTheme() {
  const [themeColor, setThemeColor] = useState({});

  useEffect(() => {
    if (localStorage.getItem('ishop-theme')) {
      setThemeColor(JSON.parse(localStorage.getItem('ishop-theme')));
    } else {
      setThemeColor({
        primary: '#f43f5e',
        primaryDark: '',
        primaryLightest: '#FFF1F2',
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ishop-theme', JSON.stringify(themeColor));
    document.documentElement.style.setProperty('--primary', themeColor.primary);
    document.documentElement.style.setProperty(
      '--primaryDark',
      themeColor.primaryDark
    );
    document.documentElement.style.setProperty(
      '--primaryLightest',
      themeColor.primaryLightest
    );
  }, [themeColor]);

  return { themeColor, setThemeColor };
}
