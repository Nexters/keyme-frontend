import { style } from '@vanilla-extract/css';

import { absolute, center, pointer } from '@/styles/utils.css';

export const button = style([
  absolute,
  center,
  pointer,
  {
    background: 'none',
    border: 'none',
    top: 36,
    left: 16,
    width: 10,
    height: 24,
  },
]);
