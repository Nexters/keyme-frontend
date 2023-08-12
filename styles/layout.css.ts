import { style } from '@vanilla-extract/css';

import { center } from './utils.css';

export const container = style([
  center,
  {
    margin: '0 auto',
    padding: '0 16px',
    maxWidth: 1024,
    width: '100%',
    height: '100%',
  },
]);
