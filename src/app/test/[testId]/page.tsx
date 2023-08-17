'use client';

import { Suspense } from '@suspensive/react';

import TestPage from './component';

interface Props {
  params: { testId: number };
}

function Page({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TestPage testId={params.testId} />
    </Suspense>
  );
}

export default Page;
