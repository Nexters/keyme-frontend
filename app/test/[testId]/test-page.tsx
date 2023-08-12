'use client';

import Progress from '@/components/Progress';
import { useTestsByIdQuery } from '@/quries/useTestsByIdQuery';

type Props = {
  testId: number;
};

function TestPage({ testId }: Props) {
  const { data: testsByIdQueryResponse } = useTestsByIdQuery(testId);
  const { questions = [] } = testsByIdQueryResponse?.data ?? {};
  return <Progress current={0} total={questions.length} />;
}

export default TestPage;
