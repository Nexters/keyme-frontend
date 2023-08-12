'use client';

import classNames from 'classnames';

import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Progress from '@/components/Progress';
import Question from '@/components/Question';
import { useCounter } from '@/hooks/useCounter';
import { useTestsByIdQuery } from '@/quries/useTestsByIdQuery';

import { bottom, button } from './style.css';

type Props = {
  testId: number;
};

function TestPage({ testId }: Props) {
  const { data: testsByIdQueryResponse } = useTestsByIdQuery(testId);
  const { questions = [] } = testsByIdQueryResponse?.data ?? {};

  const [currentIndex, { increment, decrement }] = useCounter();
  const currentQuestion = questions[currentIndex];
  const isFirstQuestion = currentIndex === 0;

  if (!currentQuestion) {
    return null;
  }

  return (
    <>
      <BackButton disabled={isFirstQuestion} onClick={decrement} />

      <Progress current={currentIndex} total={questions.length} />

      <div className={classNames(bottom)}>
        {/** 질문 텍스트 + 레버 */}
        <Question question={currentQuestion} />
        {/** 하단 다음 버튼 */}
        <Button className={classNames(button)} onClick={increment}>
          다음
        </Button>
      </div>
    </>
  );
}

export default TestPage;
