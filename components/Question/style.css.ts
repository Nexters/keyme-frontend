import { style } from '@vanilla-extract/css';

import { full } from '@/styles/utils.css';

export const container = style([
  full,
  {
    padding: 0,
    borderRadius: 24,
    border: '1px solid #3A3A3A',
    background: '#232323',
  },
]);

export const text = style([
  full,
  {
    padding: '20px 30px 18px 30px',
    color: 'rgba(255, 255, 255, 1)',
  },
]);

export const seperator = style({
  border: 'none',
  background: 'rgba(255, 255, 255, 0.10)',
  width: 'calc(100% - 60px)',
  height: 1,
  margin: '0 auto',
  marginBottom: 36,
});
