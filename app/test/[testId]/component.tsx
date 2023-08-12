'use client';

import classNames from 'classnames';
import { RESET } from 'jotai/utils';
import { Fragment } from 'react';

import { Circle } from '@/components';
import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Progress from '@/components/Progress';
import Question from '@/components/Question';
import { useCounter } from '@/hooks/useCounter';
import { useSubmitTestsMutation } from '@/mutations';
import { useTestsByIdQuery } from '@/quries/useTestsByIdQuery';
import {
  useQuestionSubmissionAtomValue,
  useUpdateQuestionSubmissionAtomValueByQuestionId,
} from '@/stores/questionSubmissionAtom';
import { useRangeAtom } from '@/stores/rangeAtom';

import { bottom, button } from './style.css';

type Props = {
  testId: number;
};

function TestPage({ testId }: Props) {
  const { data: testsByIdQueryResponse } = useTestsByIdQuery(testId);
  const { mutate } = useSubmitTestsMutation(testId);
  const { questions = [] } = testsByIdQueryResponse?.data ?? {};

  const [currentIndex, { increment, decrement }] = useCounter();
  const currentQuestion = questions[currentIndex];
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === questions.length - 1;

  const [rangeAtomValue, setRangeAtomValue] = useRangeAtom();
  const questionSubmission = useQuestionSubmissionAtomValue();
  const updateQuestionSubmissionAtom =
    useUpdateQuestionSubmissionAtomValueByQuestionId();

  if (!currentQuestion) {
    return null;
  }

  return (
    <Fragment>
      {/** 최상단 문제 풀이 진행도 */}
      <Progress current={currentIndex} total={questions.length} />

      {/** 뒤로가기 버튼 */}
      <BackButton disabled={isFirstQuestion} onClick={decrement} />

      {/** 문제풀이 정도를 나타내는 원 (최대 3개 노출) */}
      {questions
        .slice(currentIndex, currentIndex + 3)
        .map((question, index) => (
          <Circle
            key={question.questionId}
            active={index === 0}
            index={index}
            length={3}
            question={question}
          />
        ))}

      <div className={classNames(bottom)}>
        {/** 질문 텍스트 + 레버 */}
        <Question question={currentQuestion} />
        {/** 하단 다음 버튼 */}
        <Button
          disabled={rangeAtomValue === undefined}
          className={classNames(button)}
          onClick={() => {
            if (isLastQuestion) {
              alert('마지막임');
              mutate(
                { results: questionSubmission },
                {
                  onSuccess: () => {
                    alert('성공');
                  },
                },
              );
              return;
            }
            if (rangeAtomValue) {
              updateQuestionSubmissionAtom({
                questionId: currentQuestion.questionId,
                score: rangeAtomValue,
              });
              setRangeAtomValue(RESET);
              increment();
            }
          }}
        >
          다음
        </Button>
      </div>
    </Fragment>
  );
}

export default TestPage;
