'use client';


import Progress from '@/components/Progress';
import { useCounter } from '@/hooks/useCounter';
import { useTestsByIdQuery } from '@/quries/useTestsByIdQuery';

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
      <button role='button' onClick={increment}>
        NEXT
      </button>
    </>
  );
}

export default TestPage;
