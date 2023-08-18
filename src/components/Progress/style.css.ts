import { style } from '@vanilla-extract/css';

import { center, full } from '@/styles/utils.css';

export const container = style([
  full,
  center,
  {
    marginTop: 12,
    height: 'auto',
    display: 'flex',
  },
]);

export const bar = style({
  flex: 1,
  height: 2,
  borderRadius: 3,
  background: 'rgba(255, 255, 255, 0.30)',
  selectors: {
    '&:not(:last-of-type)': {
      marginRight: 2,
    },
  },
});

export const active = style({
  background: '#FFFFFF',
});
