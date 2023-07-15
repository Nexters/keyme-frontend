'use client';

import { ThemeProvider } from 'next-themes';

import Hello from '@/components/Hello';
import { useMounted } from '@/hooks/useMounted';
import { darkTheme, lightTheme } from '@/styles/theme.css';

function Home() {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute='class'
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <Hello />
    </ThemeProvider>
  );
}

export default Home;
