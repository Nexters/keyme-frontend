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
  marginTop: 16,
});

export const bottom = style([
  full,
  {
    marginTop: 'auto',
  },
]);

export const button = style({
  marginTop: 18,
});
