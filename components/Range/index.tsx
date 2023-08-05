'use client';

import { useState } from 'react';
import { Range as BaseRange } from 'react-range';

import Circle from '../Circle';
import { thumb, track } from './styles.css';

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
          <div {...props} style={undefined} className={`${track}`}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => <div {...props} className={`${thumb}`} />}
      />
    </div>
  );
}

export default Range;
