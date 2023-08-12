'use client';

import { useTestsByIdQuery } from '@/quries/useTestsByIdQuery';

type Props = {
  testId: number;
};

function TestPage({ testId }: Props) {
  const { data: testsByIdQueryResponse } = useTestsByIdQuery(testId);
  const { questions = [] } = testsByIdQueryResponse?.data ?? {};
  return <div>{JSON.stringify(questions)}</div>;
}

export default TestPage;
