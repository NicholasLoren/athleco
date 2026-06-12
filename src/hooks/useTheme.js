import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('athleco-theme', theme);
  }, [theme]);

  return { theme, toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')) };
}
