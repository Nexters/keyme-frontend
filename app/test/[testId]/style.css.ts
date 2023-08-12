import { style } from '@vanilla-extract/css';

import { fixed, full } from '@/styles/utils.css';

export const bottom = style([
  fixed,
  full,
  {
    top: 'unset',
    padding: '0 16px',
    bottom: 20,
  },
]);

export const button = style({
  marginTop: 18,
});
