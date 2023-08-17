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
    width: 'calc(100vw - 56px)',
    aspectRatio: '1 / 1',
    maxWidth: 320,
    maxHeight: 320,
    left: '50%',
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

export const image = style([absoluteCenter]);
