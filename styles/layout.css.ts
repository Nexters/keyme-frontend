import { style } from '@vanilla-extract/css';

import { full } from './utils.css';

export const container = style([
  full,
  {
    margin: '0 auto',
    padding: '0 16px',
  },
]);
