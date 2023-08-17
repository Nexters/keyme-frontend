'use client';

import classNames from 'classnames';
import { RESET } from 'jotai/utils';
import { useEffect } from 'react';
import { getTrackBackground, Range as BaseRange } from 'react-range';

import { Question } from '@/apis/types';
import { MAX, MIN, STEP } from '@/constants/range';
import { useQuestionSubmissionAtomValue } from '@/stores/questionSubmissionAtom';
import { useRangeAtom } from '@/stores/rangeAtom';

import { bubble, container, mark, thumb, track } from './styles.css';

interface Props {
  color: Question['category']['color'];
  questionId: Question['questionId'];
}

const label: Record<number, string> = {
  1: '매우 아니다',
  2: '아니다',
  3: '보통',
  4: '그렇다',
  5: '매우 그렇다',
};

function Range({ color, questionId }: Props) {
  const [currentRange, setCurrentRange] = useRangeAtom();
  const findedQuestionSubmission = useQuestionSubmissionAtomValue().find(
    (submission) => submission.questionId === questionId,
  );
  const safeCurrentRange = currentRange ?? MIN;
  const values = [safeCurrentRange];

  useEffect(() => {
    if (findedQuestionSubmission) {
      setCurrentRange(findedQuestionSubmission.score);
    }
  }, [findedQuestionSubmission, setCurrentRange]);

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
          <div {...props} key={props.key} className={classNames(thumb)}>
            <div className={classNames(bubble)}>{label[safeCurrentRange]}</div>
          </div>
        )}
        renderMark={({ props }) => (
          <div {...props} key={props.key} className={classNames(mark)} />
        )}
      />
    </div>
  );
}

export default Range;
