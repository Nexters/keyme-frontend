import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('*', {
  font: 'inherit',
  color: 'inherit',
  boxSizing: 'border-box',
  wordBreak: 'keep-all',
  padding: 0,
  margin: 0,
});

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
  height: '100%',
  background: vars.colors.background,
});

globalStyle('a', {
  textDecoration: 'none',
});

globalStyle('ol, ul', {
  listStyle: 'none',
});
