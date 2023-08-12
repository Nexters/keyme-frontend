import { style } from '@vanilla-extract/css';

export const full = style({
  width: '100%',
  height: '100%',
});

export const center = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const absolute = style({
  position: 'absolute',
  top: 0,
  left: 0,
});

export const fixed = style({
  position: 'fixed',
  top: 0,
  left: 0,
});

export const absoluteCenter = style([
  absolute,
  {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
]);

export const circle = style({
  borderRadius: '100%',
});

export const pointer = style({
  cursor: 'pointer',
});
