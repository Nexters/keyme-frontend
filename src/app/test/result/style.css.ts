import { style } from '@vanilla-extract/css';

import { center, full } from '@/styles/utils.css';

export const container = style([
  full,
  center,
  {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 64,
    paddingBottom: 20,
  },
]);

export const title = style([
  full,
  {
    whiteSpace: 'pre-line',
    color: '#F8F8F8',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '130%',
    letterSpacing: -1.2,
  },
]);

export const circleContainer = style([
  full,
  {
    height: '100%',
    position: 'relative',
    flex: 1,
    maxHeight: 320,
  },
]);
