import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { absoluteCenter, circle, pointer } from '@/styles/utils.css';

export const track = style([
  absoluteCenter,
  pointer,
  {
    position: 'fixed',
    top: 'unset',
    bottom: 20,
    width: 'calc(100vw - 80px)',
    maxWidth: '300px',
    height: 5,
    borderRadius: 4,
    background: vars.colors.primary,
  },
]);

export const thumb = style([
  circle,
  pointer,
  {
    height: 30,
    width: 30,
    backgroundColor: vars.colors.secondary,
  },
]);
