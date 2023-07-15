import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('*', {
  font: 'inherit',
  color: 'inherit',
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
  background: vars.colors.background,
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
