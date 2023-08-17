import { style } from '@vanilla-extract/css';

import { full } from '@/styles/utils.css';

export const container = style([
  full,
  {
    height: 60,
    borderRadius: 16,
    fontSize: 18,
    lineHeight: 1.5,
    letterSpacing: -0.36,
    fontWeight: 700,
    border: 'none',
    background: 'rgba(255, 255, 255, 1)',
    color: 'rgba(0, 0, 0, 1)',
    selectors: {
      '&:disabled': {
        background: 'rgba(255, 255, 255, 0.4)',
      },
    },
  },
]);
