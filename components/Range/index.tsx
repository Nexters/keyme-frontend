'use client';

import { useState } from 'react';
import { Range as BaseRange } from 'react-range';

import { vars } from '@/styles/theme.css';

import Circle from '../Circle';

function Range() {
  const [values, setValues] = useState([0]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        padding: 20,
      }}
    >
      <Circle value={values[0] ?? 0} />
      <BaseRange
        values={values}
        onChange={setValues}
        step={1}
        min={0}
        max={5}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              width: 400,
              height: 36,
              display: 'flex',
              position: 'fixed',
              bottom: 20,
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                alignSelf: 'center',
                background: vars.colors.primary,
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              borderRadius: '4px',
              backgroundColor: vars.colors.secondary,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                height: '16px',
                width: '5px',
              }}
            />
          </div>
        )}
      />
    </div>
  );
}

export default Range;
