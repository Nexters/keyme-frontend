import { style } from '@vanilla-extract/css';

import { full } from '@/styles/utils.css';

export const title = style([
  full,
  {
    whiteSpace: 'pre-line',
    color: '#F8F8F8',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '130%',
    letterSpacing: -1.2,
    marginBottom: 36,
  },
]);

export const circleContainer = style([
  full,
  {
    height: '100%',
    position: 'relative',
    flex: 1,
    maxHeight: 320,
    marginBottom: 48,
  },
]);

export const copyButton = style({
  marginBottom: 48,
});
