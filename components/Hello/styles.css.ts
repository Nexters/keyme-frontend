import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.color.brand,
});
