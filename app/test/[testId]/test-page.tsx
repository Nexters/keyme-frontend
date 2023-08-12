'use client';

import classNames from 'classnames';

import Button from '@/components/Button';
import Progress from '@/components/Progress';
import { useCounter } from '@/hooks/useCounter';
import { useTestsByIdQuery } from '@/quries/useTestsByIdQuery';

import { buttonContainer } from './style.css';

type Props = {
  testId: number;
};

function TestPage({ testId }: Props) {
  const { data: testsByIdQueryResponse } = useTestsByIdQuery(testId);
  const { questions = [] } = testsByIdQueryResponse?.data ?? {};

  const [current, { increment }] = useCounter();

  return (
    <>
      <Progress current={current} total={questions.length} />
      <div className={classNames(buttonContainer)}>
        <Button onClick={increment}>다음</Button>
      </div>
    </>
  );
}

export default TestPage;
