import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { absolute, center } from '@/styles/utils.css';

export const container = style({
  position: 'relative',
  width: '100vh',
  height: '100vh',
  background: vars.colors.background,
});

export const content = style([
  center,
  absolute,
  {
    flexDirection: 'column',
    top: '242px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
]);

export const icon = style({
  position: 'relative',
  selectors: {
    '&:before': {
      position: 'absolute',
      content: '\'\'',
      width: 9,
      height: 9,
      top: 0,
      left: -14,
      background: '#FFEFB1',
      borderRadius: '100%',
    },
  },
});

export const text = style({
  fontSize: 18,
  fontWeight: 600,
  letterSpacing: -0.54,
  lineHeight: '140%',
  color: '#FFF',
  marginTop: 34,
});
