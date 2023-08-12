'use client';

import { Suspense } from '@suspensive/react';

import TestPage from './test-page';

interface Props {
  params: { testId: number };
}

function Page({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestPage testId={params.testId} />
    </Suspense>
  );
}

export default Page;
