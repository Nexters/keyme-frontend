import { useTheme as useBaseTheme } from 'next-themes';

type Theme = 'light' | 'dark';

export function useTheme() {
  const themeProps = useBaseTheme();
  const setTheme = (theme: Theme) => themeProps.setTheme(theme);
  const toggleTheme = () =>
    setTheme(themeProps.theme === 'dark' ? 'light' : 'dark');

  return {
    ...themeProps,
    isDark: (themeProps.theme as Theme) === 'dark',
    setTheme,
    toggleTheme,
  };
}
