import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    brand: 'blue',
  },
  font: {
    body: 'arial',
  },
});
