'use client';

import classNames from 'classnames';
import { RESET } from 'jotai/utils';
import { getTrackBackground, Range as BaseRange } from 'react-range';

import { Question } from '@/apis/types';
import { useRangeAtom } from '@/stores/rangeAtom';

import { bubble, container, mark, thumb, track } from './styles.css';

interface Props {
  color: Question['category']['color'];
}

const MIN = 1;
const MAX = 5;
const STEP = 1;

const label: Record<number, string> = {
  1: '매우 아니다',
  2: '아니다',
  3: '보통',
  4: '그렇다',
  5: '매우 그렇다',
};

function Range({ color }: Props) {
  const [currentRange, setCurrentRange] = useRangeAtom();
  const values = [currentRange];
  return (
    <div className={classNames(container)}>
      <BaseRange
        values={values}
        onChange={(values) => setCurrentRange(values[0] ?? RESET)}
        step={STEP}
        min={MIN}
        max={MAX}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              background: getTrackBackground({
                values,
                min: MIN,
                max: MAX,
                colors: [`#${color}`, '#3d3d3d'],
              }),
            }}
            className={classNames(track)}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className={classNames(thumb)}>
            <div className={classNames(bubble)}>{label[currentRange]}</div>
          </div>
        )}
        renderMark={({ props }) => (
          <div {...props} className={classNames(mark)} />
        )}
      />
    </div>
  );
}

export default Range;
