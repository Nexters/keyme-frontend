import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  font: 'inherit',
  color: 'inherit',
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
  height: '100%',
});

globalStyle('a', {
  textDecoration: 'none',
});

globalStyle('ol, ul', {
  listStyle: 'none',
});

globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#fff',
      colorScheme: 'dark',
    },
  },
});
