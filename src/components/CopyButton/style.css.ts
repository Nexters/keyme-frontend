import { style } from '@vanilla-extract/css';

import { center, full } from '@/styles/utils.css';

export const container = style([
  full,
  center,
  {
    padding: '20px 24px',
    borderRadius: 16,
    fontSize: 16,
    lineHeight: '140%',
    letterSpacing: -0.48,
    fontWeight: 600,
    color: '#ffffff',
    border: '1px solid #3C3C3C',
    background: 'rgba(54, 54, 54, 0.50)',
    backdropFilter: 'blur(10px)',
  },
]);

export const codeText = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: '#9B9B9B',
  fontSize: 14,
  lineHeight: '130%',
  letterSpacing: -0.42,
  flex: 1,
});

export const copyIcon = style({
  marginLeft: 6,
});
