import { style } from '@vanilla-extract/css';

import { absolute, absoluteCenter, circle, full } from '@/styles/utils.css';

export const container = style([
  full,
  absoluteCenter,
  {
    display: 'flex',
    maxWidth: 320,
    maxHeight: 320,
    left: '50%',
    selectors: {
      '&::before': {
        content: '""',
        paddingTop: '100%',
      },
    },
  },
]);

export const valueCircle = style([
  absolute,
  circle,
  full,
  { left: 0, top: 0, height: '100%' },
]);

export const backgroundCircle = style([
  valueCircle,
  {
    boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.20)',
  },
]);

export const imageContainer = style([
  absoluteCenter,
  { width: 48, height: 48 },
]);
