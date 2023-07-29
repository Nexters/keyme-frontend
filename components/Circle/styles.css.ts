import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { absolute, absoluteCenter, circle, full } from '@/styles/utils.css';

export const container = style({
  position: 'relative',
  width: 250,
  height: 250,
});

export const backgroundCircle = style([
  absolute,
  circle,
  full,
  {
    background: vars.colors.secondary,
  },
]);

export const valueCircle = style([
  absoluteCenter,
  circle,
  {
    background: vars.colors.primary,
  },
]);
