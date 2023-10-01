import { style } from '@vanilla-extract/css';

import { absolute, center, circle, full, pointer } from '@/styles/utils.css';

export const container = style([
  full,
  center,
  {
    padding: '24px 24px 40px',
    borderRadius: 24,
    border: '1px solid #3A3A3A',
    background: 'rgba(0, 0, 0, 1)',
  },
]);

export const track = style([
  full,
  pointer,
  {
    height: 16,
    borderRadius: 20,
    position: 'relative',
    selectors: {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: 82,
      },
    },
  },
]);

export const thumb = style([
  circle,
  pointer,
  {
    position: 'relative',
    height: 24,
    width: 24,
    background: 'rgba(255, 255, 255, 1)',
  },
]);

export const mark = style([
  circle,
  absolute,
  {
    top: 'unset',
    bottom: -20,
    height: 4,
    width: 4,
    background: '#9D9D9D',
  },
]);

export const bubble = style([
  absolute,
  {
    background: '#333536',
    border: '1px solid #454545',
    borderRadius: 24,
    padding: '4px 18px',
    whiteSpace: 'nowrap',
    width: 'auto',
    top: 'calc(-100% - 18px)',
    left: 0,
    lineHeight: '130%',
    fontSize: 14,
    fontWeight: 500,
    color: '#fff',
    letterSpacing: -0.42,
    transform: 'translateX(calc(-50% + 12px))',
    selectors: {
      '&::after': {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        width: 0,
        height: 0,
        border: '8px solid transparent',
        borderTopColor: '#333536',
        borderBottom: 0,
        marginLeft: -8,
        marginBottom: -8,
      },
    },
  },
]);
