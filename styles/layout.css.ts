import { style } from '@vanilla-extract/css';

import { center, full } from './utils.css';

export const container = style([
  full,
  center,
  {
    height: '100%',
    flexDirection: 'column',
    color: '#fff',
    margin: '0 auto',
    padding: '0 16px',
  },
]);
