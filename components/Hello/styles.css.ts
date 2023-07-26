import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const button = style({
  padding: 4,
  background: 'none',
  color: vars.colors.text.normal,
  cursor: 'pointer',
  border: `1px solid ${vars.colors.secondary}`,
});
