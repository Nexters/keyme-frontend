import {
  createGlobalTheme,
  createGlobalThemeContract,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';

const colors = createThemeContract({
  background: null,
});

export const lightTheme = createTheme(colors, {
  background: '#171717',
});

export const darkTheme = createTheme(colors, {
  background: '#171717',
});

export const root = createGlobalThemeContract({
  font: {
    body: 'arial',
  },
});

export const vars = { ...root, colors };

createGlobalTheme(':root', vars);
