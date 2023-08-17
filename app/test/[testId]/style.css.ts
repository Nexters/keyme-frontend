import { style } from '@vanilla-extract/css';

import { full } from '@/styles/utils.css';

export const container = style([
  full,
  {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: 20,
  },
]);

export const top = style({
  position: 'relative',
  flex: 1,
  overflow: 'hidden',
});

export const bottom = style([
  full,
  {
    marginTop: 'auto',
    padding: '0 16px',
  },
]);

export const button = style({
  marginTop: 18,
});
