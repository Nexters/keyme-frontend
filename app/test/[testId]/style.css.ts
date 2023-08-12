import { style } from '@vanilla-extract/css';

import { fixed, full } from '@/styles/utils.css';

export const buttonContainer = style([
  fixed,
  full,
  {
    top: 'unset',
    bottom: 20,
  },
]);
