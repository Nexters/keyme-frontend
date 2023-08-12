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
    maxWidth: 320,
    maxHeight: 320,
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
  },
]);

export const backgroundCircle = style([
  absolute,
  circle,
  full,
  {
    boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.20)',
  },
]);

export const valueCircle = style([absoluteCenter, circle]);

export const image = style({
  width: 48,
  height: 48,
});
