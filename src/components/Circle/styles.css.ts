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
    '@media': {
      'screen and (max-height: 800px) and (max-width: 375px)': {
        maxWidth: 280,
        maxHeight: 280,
      },
    },
  },
]);

export const valueCircle = style([
  absolute,
  circle,
  full,
  { left: 0, top: 0, height: '100%', backdropFilter: 'blur(15px)' },
]);

export const backgroundCircle = style([
  valueCircle,
  {
    boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.20)',
  },
]);

export const iconContainer = style([
  absoluteCenter,
  center,
  {
    flexDirection: 'column',
  },
]);

export const imageContainer = style({
  position: 'relative',
  width: 48,
  height: 48,
});

export const label = style({
  marginTop: 10,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '140%',
  letterSpacing: -0.48,
});

export const questionMark = style({
  display: 'block',
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 800,
  lineHeight: '120%',
});
