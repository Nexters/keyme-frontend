'use client';

import { RESET } from 'jotai/utils';
import { Range as BaseRange } from 'react-range';

import { useRangeAtom } from '@/stores/rangeAtom';

import { thumb, track } from './styles.css';

function Range() {
  const [currentRange, setCurrentRange] = useRangeAtom();
  return (
    <BaseRange
      values={[currentRange]}
      onChange={(values) => setCurrentRange(values[0] ?? RESET)}
      step={1}
      min={1}
      max={5}
      renderTrack={({ props, children }) => (
        <div {...props} style={undefined} className={`${track}`}>
          {children}
        </div>
      )}
      renderThumb={({ props }) => <div {...props} className={`${thumb}`} />}
    />
  );
}

export default Range;
