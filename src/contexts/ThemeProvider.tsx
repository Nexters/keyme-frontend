'use client';

import { ThemeProvider as BaseThemeProvider } from 'next-themes';

import { useMounted } from '@/hooks/useMounted';
import { darkTheme, lightTheme } from '@/styles/theme.css';

function ThemeProvider({ children }: React.PropsWithChildren) {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <BaseThemeProvider
      attribute='class'
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </BaseThemeProvider>
  );
}

export { ThemeProvider };
