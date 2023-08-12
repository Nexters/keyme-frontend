import { style } from '@vanilla-extract/css';

import {
  absolute,
  absoluteCenter,
  center,
  circle,
  full,
} from '@/styles/utils.css';

export const container = style([
  full,
  absolute,
  center,
  {
    height: '100vw',
    maxWidth: 320,
    maxHeight: 320,
    left: '50%',
  },
]);

export const backgroundCircle = style([
  absolute,
  circle,
  full,
  {
    height: '100%',
    boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.20)',
  },
]);

export const valueCircle = style([absoluteCenter, circle]);

export const image = style([absoluteCenter]);
